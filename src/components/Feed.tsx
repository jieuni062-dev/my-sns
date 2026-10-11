import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchNextPosts } from '../data/fetchPosts'
import type { Post } from '../data/samplePosts'
import PostCard from './PostCard'

// idle: 다음 묶음을 기다리는 중, end: 더 없음
type Status = 'idle' | 'loading' | 'end' | 'error'

function Feed() {
  // "몇 시간 전" 계산의 기준 시각. 화면을 열었을 때로 고정
  const [now] = useState(() => Date.now())
  const [posts, setPosts] = useState<Post[]>([])
  const [status, setStatus] = useState<Status>('idle')
  // 같은 요청이 두 번 나가지 않게 막는 표시
  const loadingRef = useRef(false)
  // 목록 끝에 두는 보이지 않는 표시
  const endRef = useRef<HTMLDivElement>(null)

  const loadMore = useCallback(async () => {
    if (loadingRef.current) return
    loadingRef.current = true
    setStatus('loading')

    try {
      const page = await fetchNextPosts(posts.length)
      setPosts((posts) => [...posts, ...page.posts])
      setStatus(page.hasMore ? 'idle' : 'end')
    } catch {
      setStatus('error')
    } finally {
      loadingRef.current = false
    }
  }, [posts.length])

  // 끝 표시가 화면에 들어오면 다음 묶음을 불러온다. 첫 묶음도 여기서 시작
  // 불러오는 중 · 더 없음 · 오류일 때는 지켜보지 않는다
  useEffect(() => {
    const end = endRef.current
    if (status !== 'idle' || !end) return

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) loadMore()
    })
    observer.observe(end)

    return () => observer.disconnect()
  }, [status, loadMore])

  return (
    <>
      <main className="feed">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} now={now} />
        ))}
      </main>

      <section className="states">
        <div ref={endRef} />

        {status === 'loading' && (
          <div className="state" role="status">
            <div className="breads">
              <svg className="doodle" aria-hidden="true">
                <use href="#loaf" />
              </svg>
              <svg className="doodle" aria-hidden="true">
                <use href="#baguette" />
              </svg>
              <svg className="doodle" aria-hidden="true">
                <use href="#donut" />
              </svg>
            </div>
            <p>
              {posts.length === 0
                ? '빵 굽는 중이에요…'
                : '다음 빵을 꺼내는 중이에요…'}
            </p>
          </div>
        )}

        {status === 'end' && (
          <div className="state end">
            <svg className="doodle" aria-hidden="true">
              <use href="#loaf" />
            </svg>
            <p>오늘 빵은 모두 나왔어요</p>
          </div>
        )}

        {status === 'error' && (
          <div className="state error sketch" role="alert">
            <svg className="doodle" aria-hidden="true">
              <use href="#loaf-sad" />
            </svg>
            <p>빵을 가져오지 못했어요.</p>
            <button type="button" className="retry" onClick={loadMore}>
              다시 시도
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default Feed

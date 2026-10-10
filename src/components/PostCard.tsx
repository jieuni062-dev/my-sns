import { useState } from 'react'
import type { Post } from '../data/samplePosts'

type PostCardProps = {
  post: Post
  now: number
}

const avatars = ['donut', 'loaf', 'baguette']

const MINUTE = 60 * 1000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

// 올린 시각을 "3시간 전" 처럼 바꾼다. 일주일이 넘으면 날짜로
function timeAgo(createdAt: string, now: number): string {
  const created = new Date(createdAt)
  const diff = now - created.getTime()

  if (diff < MINUTE) return '방금 전'
  if (diff < HOUR) return `${Math.floor(diff / MINUTE)}분 전`
  if (diff < DAY) return `${Math.floor(diff / HOUR)}시간 전`
  if (diff < 7 * DAY) return `${Math.floor(diff / DAY)}일 전`
  return `${created.getMonth() + 1}월 ${created.getDate()}일`
}

function PostCard({ post, now }: PostCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = post.content.length > 90

  return (
    <article className="card sketch">
      <div className="card-head">
        <div className="author">
          <svg className="doodle avatar" aria-hidden="true">
            <use href={`#${avatars[post.id % avatars.length]}`} />
          </svg>
          <span>{post.author}</span>
        </div>
        <time className="time" dateTime={post.created_at}>
          {timeAgo(post.created_at, now)}
        </time>
      </div>

      {/* 사진은 첫 장만 */}
      <div className="photo sketch">
        <span className="tape" />
        <img src={post.images[0]} alt={`${post.author}의 사진`} loading="lazy" />
      </div>

      <p className={isLong && !expanded ? 'content clamp' : 'content'}>
        {post.content}
      </p>
      {isLong && (
        <button
          type="button"
          className="more"
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          {expanded ? '접기' : '더 보기'}
        </button>
      )}

      <div className="card-foot" />
    </article>
  )
}

export default PostCard

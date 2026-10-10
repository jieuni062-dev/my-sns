import { useState } from 'react'
import { samplePosts } from '../data/samplePosts'
import PostCard from './PostCard'

function Feed() {
  // "몇 시간 전" 계산의 기준 시각. 화면을 열었을 때로 고정
  const [now] = useState(() => Date.now())

  return (
    <main className="feed">
      {samplePosts.map((post) => (
        <PostCard key={post.id} post={post} now={now} />
      ))}
    </main>
  )
}

export default Feed

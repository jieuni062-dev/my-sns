import { supabase } from '../lib/supabase'
import type { Post } from './samplePosts'

export const PAGE_SIZE = 10

export type PostPage = {
  posts: Post[]
  // 이 뒤에 남은 글이 있는지
  hasMore: boolean
}

// 다음 10개 가져오기. offset 은 지금까지 받은 글의 수
export async function fetchNextPosts(offset: number): Promise<PostPage> {
  const { data, error } = await supabase
    .from('sns_posts')
    .select('id, author, content, images, created_at')
    .order('created_at', { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1)
    .overrideTypes<Post[], { merge: false }>()

  if (error) throw error

  // 10개보다 적게 왔으면 더 없음
  return { posts: data, hasMore: data.length === PAGE_SIZE }
}

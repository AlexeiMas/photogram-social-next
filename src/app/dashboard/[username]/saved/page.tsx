import { IDynamicPageParams } from '@/types/general';
import PostsGrid from '@/components/PostsGrid';
import { fetchSavedPostsByUsername } from '@/lib/data';

async function SavedPage({ params: { username } }: IDynamicPageParams<{ username: string }>) {
  const savedPosts = await fetchSavedPostsByUsername(username);
  const posts = savedPosts?.map((savedPost) => savedPost.post);

  return <PostsGrid posts={posts} />;
}

export default SavedPage;

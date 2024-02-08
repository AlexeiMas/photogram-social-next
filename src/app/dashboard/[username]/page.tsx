import { IDynamicPageParams } from '@/types/general';
import PostsGrid from '@/components/PostsGrid';
import { fetchPostByUsername } from '@/lib/data';

async function ProfilePage({ params: { username } }: IDynamicPageParams<{ username: string }>) {
  const posts = await fetchPostByUsername(username);

  return <PostsGrid posts={posts} />;
}

export default ProfilePage;

import PostView from '@/components/PostView';
import { IDynamicPageParams } from '@/types/general';
import { notFound } from 'next/navigation';
import { fetchPostById } from '@/lib/data';

async function PostModal({ params: { id } }: IDynamicPageParams<{ id: string }>) {
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return <PostView id={id} post={post} />;
}

export default PostModal;

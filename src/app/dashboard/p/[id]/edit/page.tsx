import { fetchPostById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { IDynamicPageParams } from '@/types/general';
import EditPost from '@/components/EditPost';

async function EditPostPage({ params: { id } }: IDynamicPageParams<{ id: string }>) {
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return <EditPost id={id} post={post} />;
}

export default EditPostPage;

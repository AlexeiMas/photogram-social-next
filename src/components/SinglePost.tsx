import { fetchPostById } from '@/lib/data';
import { auth } from '@/auth';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Link from 'next/link';
import UserAvatar from '@/components/UserAvatar';
import PostOptions from '@/components/PostOptions';
import { ScrollArea } from '@/components/ui/scroll-area';
import MiniPost from '@/components/MiniPost';
import Comment from '@/components/Comment';
import PostActions from '@/components/PostActions';
import CommentForm from '@/components/CommentForm';
import Post from '@/components/Post';

interface ISinglePostProps {
  id: string;
}

const SinglePost = async ({ id }: ISinglePostProps) => {
  const post = await fetchPostById(id);
  const session = await auth();
  const postUsername = post?.user.username;
  const userId = session?.user.id;

  if (!post) {
    notFound();
  }

  return (
    <>
      <Card className='max-w-3xl lg:max-w-4xl hidden md:flex mx-auto'>
        <div className='relative overflow-hidden h-[450px] max-w-sm lg:max-w-lg w-full'>
          <Image
            src={post.fileUrl}
            alt='Post preview'
            fill
            className='md:rounded-l-md object-cover'
          />
        </div>

        <div className='flex max-w-sm flex-col flex-1'>
          <div className='flex items-center justify-between border-b px-5 py-3'>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href={`/dashboard/${postUsername}`} className='font-semibold text-sm'>
                  {postUsername}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className='w-fit'>
                <div className='flex items-center space-x-2'>
                  <UserAvatar user={post.user} className='h-14 w-14' />
                  <div>
                    <p className='font-bold'>{postUsername}</p>
                    <p className='text-sm font-medium dark:text-neutral-400'>{post.user.name}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <PostOptions post={post} userId={userId} />
          </div>

          {post.comments.length === 0 && (
            <div className='flex flex-col items-center gap-1.5 flex-1 justify-center'>
              <p className='text-xl lg:text-2xl font-extrabold'>No comments yet.</p>
              <p className='text-sm font-medium'>Start the conversation.</p>
            </div>
          )}

          {post.comments.length > 0 && (
            <ScrollArea className='hidden md:inline py-1.5 flex-1 max-h-[250px]'>
              <MiniPost post={post} />
              {post.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </ScrollArea>
          )}

          <div className='px-2 hidden md:block mt-auto border-y p-2.5'>
            <PostActions post={post} userId={userId} />
            <time className='text-[11px] uppercase text-zinc-300 font-medium'>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <CommentForm postId={id} className='hidden md:inline-flex' />
        </div>
      </Card>

      <div className='md:hidden'>
        <Post post={post} />
      </div>
    </>
  );
};

export default SinglePost;

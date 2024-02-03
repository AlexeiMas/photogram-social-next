import { TPostWithExtras } from '@/lib/definitions';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { ActionIcon, BookmarkButton, LikeButton, ShareButton } from '@/components/Buttons';

interface IPostActionsProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  post: TPostWithExtras;
  userId?: string;
}

const PostActions = ({ post, userId, className }: IPostActionsProps) => {
  return (
    <div className={cn('relative flex items-start w-full gap-x-2', className)}>
      <LikeButton post={post} userId={userId} />
      <Link href={`/dashboard/p/${post.id}`}>
        <ActionIcon>
          <MessageCircle className='h-6 w-6' />
        </ActionIcon>
      </Link>
      <ShareButton postId={post.id} />
      <BookmarkButton post={post} userId={userId} />
    </div>
  );
};

export default PostActions;

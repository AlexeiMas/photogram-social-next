'use client';

import { CommentWithExtras } from '@/lib/definitions';
import { RefObject } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import UserAvatar from '@/components/UserAvatar';
import Timestamp from '@/components/Timestamp';
import CommentOptions from '@/components/CommentOptions';

interface ICommentProps {
  comment: CommentWithExtras;
  inputRef?: RefObject<HTMLInputElement>;
}

const Comment = ({ comment, inputRef }: ICommentProps) => {
  const { data: session } = useSession();
  const username = comment.user.username;
  const href = `/dashboard/${username}`;

  return (
    <div className='group p-3 px-3.5  flex items-start space-x-2.5'>
      <Link href={href}>
        <UserAvatar user={comment.user} />
      </Link>
      <div className='space-y-1.5'>
        <div className='flex items-center space-x-1.5 leading-none text-sm'>
          <Link href={href} className='font-semibold'>
            {username}
          </Link>
          <p className='font-medium'>{comment.body}</p>
        </div>
        <div className='flex h-5 items-center space-x-2.5'>
          <Timestamp createdAt={comment.createdAt} />
          <button
            className='text-xs font-semibold text-neutral-500'
            onClick={() => inputRef?.current?.focus()}
          >
            Reply
          </button>
          {comment.userId === session?.user.id && <CommentOptions comment={comment} />}
        </div>
      </div>
    </div>
  );
};

export default Comment;

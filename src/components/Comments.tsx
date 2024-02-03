'use client';

import { CommentWithExtras } from '@/lib/definitions';
import { User } from 'next-auth';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateComment } from '@/lib/schemas';
import { useOptimistic, useTransition } from 'react';
import { Comment } from '@prisma/client';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { createComment } from '@/lib/actions';

interface ICommentsProps {
  postId: string;
  comments: CommentWithExtras[];
  user?: User | null;
}

const Comments = ({ postId, comments, user }: ICommentsProps) => {
  const form = useForm<z.infer<typeof CreateComment>>({
    resolver: zodResolver(CreateComment),
    defaultValues: {
      body: '',
      postId,
    },
  });
  const [isPending, startTransition] = useTransition();
  const [optimisticComments, addOptimisticComments] = useOptimistic<CommentWithExtras[]>(
    comments,
    //@ts-ignore
    (state: Comment[], newComment: string) => [
      {
        body: newComment,
        userId: user?.id,
        postId,
        user,
      },
      ...state,
    ]
  );

  const body = form.watch('body');
  const commentsCount = optimisticComments.length;

  return (
    <div className='space-y-0.5 px-3 sm:px-0'>
      {commentsCount > 1 && (
        <Link
          scroll={false}
          href={`/dashboard/p/${postId}`}
          className='text-sm font-medium text-neutral-500'
        >
          View all {commentsCount} comments
        </Link>
      )}

      {optimisticComments.slice(0, 3).map((comment, i) => {
        const username = comment.user?.username;
        return (
          <div key={i} className='text-sm flex items-center space-x-2 font-medium'>
            <Link href={`/dashboard/${username}`} className='font-semibold'>
              {username}
            </Link>
            <p>{comment.body}</p>
          </div>
        );
      })}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values) => {
            const valuesCopy = { ...values };
            form.reset();
            startTransition(() => {
              addOptimisticComments(valuesCopy.body);
            });

            await createComment(valuesCopy);
          })}
          className='border-b border-gray-300 dark:border-neutral-800 pb-3 flex items-center space-x-2'
        >
          <FormField
            control={form.control}
            name={'body'}
            render={({ field, fieldState }) => (
              <FormItem className='w-full flex'>
                <FormControl>
                  <input
                    type='text'
                    placeholder='Add a comment...'
                    className='bg-transparent text-sm border-none focus:outline-none flex-1 placeholder-neutral-500 dark:text-white dark:placeholder-neutral-400 font-medium'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {body.trim().length > 0 && (
            <button
              type={'submit'}
              className='text-sky-500 text-sm font-semibold hover:text-white disabled:hover:text-sky-500 disabled:cursor-not-allowed'
            >
              Post
            </button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default Comments;

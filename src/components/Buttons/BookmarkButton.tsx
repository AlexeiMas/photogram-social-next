'use client';

import { TPostWithExtras } from '@/lib/definitions';
import { SavedPost } from '@prisma/client';
import { useOptimistic } from 'react';
import { bookmarkPost } from '@/lib/actions';
import { Bookmark } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ActionIcon } from '@/components/Buttons/index';

interface IBookmarkButtonProps {
  post: TPostWithExtras;
  userId?: string;
}

const BookmarkButton = ({ post, userId }: IBookmarkButtonProps) => {
  const predicate = (bookmark: SavedPost) =>
    bookmark.userId === userId && bookmark.postId === post.id;
  const [optimisticBookmarks, addOptimisticBookmark] = useOptimistic<SavedPost[]>(
    post.savedBy,
    // @ts-ignore
    (state: SavedPost[], newBookmark: SavedPost) =>
      //   here we check if the bookmark already exists, if it does, we remove it, if it doesn't, we add it
      state.some(predicate)
        ? state.filter((bookmark) => bookmark.userId !== userId)
        : [...state, newBookmark]
  );

  return (
    <div className='ml-auto'>
      <form
        action={async (formData: FormData) => {
          const postId = formData.get('postId');
          addOptimisticBookmark({ postId, userId });

          await bookmarkPost(postId);
        }}
      >
        <input type={'hidden'} name={'postId'} value={post.id} />
        <ActionIcon>
          <Bookmark
            className={cn('h-6 w-6', {
              'dark:fill-white fill-black': optimisticBookmarks.some(predicate),
            })}
          />
        </ActionIcon>
      </form>
    </div>
  );
};

export default BookmarkButton;

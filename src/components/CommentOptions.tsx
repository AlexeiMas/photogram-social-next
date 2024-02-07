'use client';

import { CommentWithExtras } from '@/lib/definitions';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MoreHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import { SubmitButton } from '@/components/Buttons';
import { deleteComment } from '@/lib/actions';

interface ICommentOptionsProps {
  comment: CommentWithExtras;
}

const CommentOptions = ({ comment }: ICommentOptionsProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <MoreHorizontal className='h-5 w-5 hidden group-hover:inline cursor-pointer dark:text-neutral-400' />
      </DialogTrigger>
      <DialogContent className='dialogContent'>
        <form
          action={async (formData) => {
            const { message } = await deleteComment(formData);
            toast(message);
          }}
          className='postOption'
        >
          <input type='hidden' name={'id'} value={comment.id} />
          <SubmitButton className='text-red-500 font-bold disabled:cursor-not-allowed w-full p-3'>
            Delete
          </SubmitButton>
        </form>

        <DialogClose className='postOption border-0 w-full p-3'>Cancel</DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CommentOptions;

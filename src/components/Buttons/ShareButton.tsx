'use client';

import { Link, Send } from 'lucide-react';
import { toast } from 'sonner';
import { ActionIcon } from '@/components/Buttons/index';

interface IShareButtonProps {
  postId: string;
}

const ShareButton = ({ postId }: IShareButtonProps) => {
  return (
    <ActionIcon
      onClick={() => {
        navigator.clipboard.writeText(`${window.location.origin}/dashboard/p/${postId}`).finally();
        toast('Link copied to clipboard', {
          icon: <Link className='h-5 w-5' />,
        });
      }}
    >
      <Send className='h-6 w-6' />
    </ActionIcon>
  );
};

export default ShareButton;

'use client';

import { useMount } from '@/hooks/useMount';
import { usePathname, useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import Following from '@/components/Following/Following';
import { FollowingWithExtras } from '@/lib/definitions';

interface IFollowingModalProps {
  following?: FollowingWithExtras[];
  username: string;
}

const FollowingModal = ({ following, username }: IFollowingModalProps) => {
  const mount = useMount();
  const pathname = usePathname();
  const router = useRouter();
  const isFollowingPage = pathname === `/dashboard/${username}/following`;

  if (!mount) {
    return null;
  }

  return (
    <Dialog open={isFollowingPage} onOpenChange={(isOpen) => !isOpen && router.back()}>
      <DialogContent className='dialogContent'>
        <DialogHeader className='border-b border-zinc-300 dark:border-neutral-700 py-2 w-full'>
          <DialogTitle className='mx-auto font-bold text-base'>Following</DialogTitle>
        </DialogHeader>

        {following?.length === 0 && (
          <p className='p-4 text-sm font-medium'>This user has no following.</p>
        )}

        <ScrollArea className='min-h-fit max-h-[350px]'>
          {following?.map((following) => (
            <Following key={following.followingId} following={following} />
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FollowingModal;

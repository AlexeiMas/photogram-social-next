import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { UserAvatarSkeleton } from '@/components/Skeletons/UserAvatarSkeleton';

export function SinglePostSkeleton() {
  return (
    <Card className='max-w-3xl lg:max-w-4xl mx-auto hidden md:flex'>
      <div className='relative overflow-hidden h-[450px] max-w-sm lg:max-w-lg  w-full'>
        <Skeleton className='h-full w-full' />
      </div>

      <div className='flex max-w-sm flex-col flex-1'>
        <div className='flex items-center justify-between border-b px-5 py-3'>
          <div className='flex items-center space-x-2'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[250px]' />
            </div>
          </div>
        </div>

        <div className='px-5 space-y-3 mt-8'>
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
          <UserAvatarSkeleton />
        </div>
      </div>
    </Card>
  );
}

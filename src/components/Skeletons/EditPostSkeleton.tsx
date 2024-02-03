import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

export function EditPostSkeleton() {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit info</DialogTitle>
        </DialogHeader>

        <AspectRatio ratio={1} className='relative h-full'>
          <Skeleton className='h-full w-full' />
        </AspectRatio>

        <Skeleton className='h-10 w-full' />
      </DialogContent>
    </Dialog>
  );
}

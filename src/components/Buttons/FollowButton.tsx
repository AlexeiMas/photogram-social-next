import { HTMLAttributes } from 'react';
import { SubmitButton } from '@/components/Buttons/index';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { followUser } from '@/lib/actions';

interface IFollowButtonProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  isFollowing?: boolean;
  profileId: string;
  buttonClassName?: string;
}

const FollowButton = ({
  isFollowing,
  profileId,
  className,
  buttonClassName,
}: IFollowButtonProps) => {
  return (
    <form action={followUser} className={className}>
      <input type='hidden' value={profileId} name='id' />
      <SubmitButton
        className={buttonVariants({
          variant: isFollowing ? 'secondary' : 'default',
          className: cn('!font-bold w-full', buttonClassName),
          size: 'sm',
        })}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </SubmitButton>
    </form>
  );
};

export default FollowButton;

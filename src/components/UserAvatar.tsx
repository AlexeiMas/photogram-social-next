import { Avatar } from '@/components/ui/avatar';
import type { User } from 'next-auth';
import type { AvatarProps } from '@radix-ui/react-avatar';
import Image from 'next/image';

interface IUserAvatarProps extends Partial<AvatarProps> {
  user?: User;
}

const UserAvatar = ({ user, ...avatarProps }: IUserAvatarProps) => {
  return (
    <Avatar className='relative h-8 w-8' {...avatarProps}>
      <Image
        src={user?.image || 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'}
        fill
        alt={`${user?.name}'s profile picture`}
        className='rounded-full object-cover'
      />
    </Avatar>
  );
};

export default UserAvatar;

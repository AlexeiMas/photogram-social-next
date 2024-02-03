'use client';

import type { User } from 'next-auth';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '@/components/ui/button';
import UserAvatar from '@/components/UserAvatar';

interface IProfileLinkProps {
  user?: User;
}

const ProfileLink = ({ user }: IProfileLinkProps) => {
  const pathname = usePathname();
  const href = `/dashboard/${user?.username}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: isActive ? 'secondary' : 'ghost',
        className: 'navLink',
        size: 'lg',
      })}
    >
      <UserAvatar
        user={user}
        className={cn('h-6 w-6', {
          'border-2 border-white': isActive,
        })}
      />
      <p
        className={cn('hidden lg:block', {
          'font-extrabold': isActive,
        })}
      >
        Profile
      </p>
    </Link>
  );
};

export default ProfileLink;

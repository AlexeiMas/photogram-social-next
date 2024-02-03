'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: Home,
  },
  {
    name: 'Search',
    href: '/dashboard/search',
    icon: Search,
    hideOnMobile: true,
  },
  {
    name: 'Explore',
    href: '/dashboard/explore',
    icon: Compass,
  },
  {
    name: 'Reels',
    href: '/dashboard/reels',
    icon: Clapperboard,
  },
  {
    name: 'Messages',
    href: '/dashboard/messages',
    icon: MessageCircle,
  },
  {
    name: 'Notifications',
    href: '/dashboard/notifications',
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: 'Create',
    href: '/dashboard/create',
    icon: PlusSquare,
  },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        const LinkIcon = link.icon;

        LinkIcon.defaultProps = {
          strokeWidth: isActive ? 3 : undefined,
          absoluteStrokeWidth: !isActive,
        };

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? 'secondary' : 'ghost',
              className: cn('navLink', { 'hidden md:flex': link.hideOnMobile }),
              size: 'lg',
            })}
          >
            <LinkIcon className='w-6' />
            <p
              className={cn('hidden lg:block', {
                'font-extrabold': isActive,
              })}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;

import React from 'react';
import { Moon_Dance } from 'next/font/google';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const moonDance = Moon_Dance({ weight: ['400'], subsets: ['latin'] });

function Logo() {
  return (
    <Link
      href={'/dashboard'}
      className={buttonVariants({
        className: 'hidden md:flex navLink !mb-10 lg:hover:bg-transparent lg:!p-0',
        variant: 'ghost',
        size: 'lg',
      })}
    >
      <Instagram className='h-6 w-6 shrink-0 lg:hidden' />
      <p className={`${moonDance.className} font-semibold text-5xl hidden lg:block`}>Instagram</p>
    </Link>
  );
}

export default Logo;

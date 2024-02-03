import React from 'react';
import Logo from '@/components/Logo';
import NavLinks from '@/components/NavLinks';
import MoreDropdown from '@/components/MoreDropdown/MoreDropdown';
import { auth } from '@/auth';
import ProfileLink from '@/components/ProfileLink';

async function SideNav() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <div className='flex flex-row justify-evenly md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2 -ml-3 md:ml-0 bg-white dark:bg-black h-16 z-50 flex-1 w-full md:relative md:h-full fixed bottom-0 border-t md:border-none'>
        <Logo />
        <NavLinks />
        {user && <ProfileLink user={user} />}

        <div className='hidden md:flex relative md:mt-auto flex-1 items-end w-full'>
          <MoreDropdown />
        </div>
      </div>
    </div>
  );
}

export default SideNav;

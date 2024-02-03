import { PropsWithChildren } from 'react';
import SideNav from '@/components/SideNav';

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col md:flex-row md:overflow-hidden h-screen relative'>
      <div className='w-20 flex-none lg:w-64 md:border-r'>
        <SideNav />
      </div>
      <div className='flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto'>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;

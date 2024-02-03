import { PropsWithChildren } from 'react';

function AuthLayout({ children }: PropsWithChildren) {
  return <div className='grid place-items-center h-screen'>{children}</div>;
}

export default AuthLayout;

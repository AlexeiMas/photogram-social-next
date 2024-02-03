import { PropsWithChildren } from 'react';
import Header from '@/components/Header';

function HomePageLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default HomePageLayout;

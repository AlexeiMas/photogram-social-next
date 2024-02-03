'use client';

import { useEffect, useState } from 'react';

export const useMount = () => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount;
};

'use client';

import { ButtonProps } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { PropsWithChildren } from 'react';

const SubmitButton = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  const { pending } = useFormStatus();

  return (
    <button type={'submit'} disabled={pending} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
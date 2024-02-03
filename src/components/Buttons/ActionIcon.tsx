import { PropsWithChildren } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

const ActionIcon = ({ children, ...buttonProps }: PropsWithChildren<ButtonProps>) => {
  return (
    <Button type={'submit'} variant={'ghost'} size={'icon'} className='h-9 w-9' {...buttonProps}>
      {children}
    </Button>
  );
};

export default ActionIcon;

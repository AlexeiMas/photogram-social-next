'use client';

import React, { useRef, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useOnClickOutside } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import NestedItemContent from '@/components/MoreDropdown/NestedItemContent';
import DefaultItems from '@/components/MoreDropdown/DefaultItems';

function MoreDropdown() {
  const [showModeToggle, setModeToggle] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setModeToggle(false);
    setOpen(false);
  };

  const changeModeToggleHandler = (newState: boolean) => {
    setModeToggle(newState);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'ghost'}
          className='md:w-full !justify-start space-x-2 !px-3'
          size={'lg'}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <Menu />
          <div className='hidden lg:block'>More</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        ref={ref}
        className={cn(
          'dark:bg-neutral-800 w-64 !rounded-xl !p-0 transition-opacity hidden md:block',
          {
            'opacity-0': !open,
          }
        )}
        align={'end'}
        alignOffset={-40}
      >
        {showModeToggle ? (
          <NestedItemContent changeModeToggleHandler={changeModeToggleHandler} />
        ) : (
          <DefaultItems changeModeToggleHandler={changeModeToggleHandler} />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MoreDropdown;

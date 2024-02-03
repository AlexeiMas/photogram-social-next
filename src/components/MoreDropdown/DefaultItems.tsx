import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Activity, Bookmark, LogOut, Moon, Settings } from 'lucide-react';
import { signOut } from 'next-auth/react';

interface IDefaultItemsProps {
  changeModeToggleHandler: (state: boolean) => void;
}

const DefaultItems = ({ changeModeToggleHandler }: IDefaultItemsProps) => {
  return (
    <>
      <DropdownMenuItem className='menuItem'>
        <Settings size={20} />
        <p>Settings</p>
      </DropdownMenuItem>
      <DropdownMenuItem className='menuItem'>
        <Activity size={20} />
        <p>Your activity</p>
      </DropdownMenuItem>
      <DropdownMenuItem className='menuItem'>
        <Bookmark size={20} />
        <p>Saved</p>
      </DropdownMenuItem>

      <DropdownMenuItem className='menuItem' onClick={() => changeModeToggleHandler(true)}>
        <Moon size={20} />
        <p>Switch appearance</p>
      </DropdownMenuItem>

      <DropdownMenuItem className='menuItem' onClick={() => signOut()}>
        <LogOut size={20} />
        <p>Log out</p>
      </DropdownMenuItem>
    </>
  );
};

export default DefaultItems;

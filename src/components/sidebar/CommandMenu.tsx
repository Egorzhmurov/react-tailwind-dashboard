import { Command } from 'cmdk';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export const CommandMenu = ({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [value, setValue] = useState('');

  // Открытие меню по комбинации Ctrl+K или Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div onClick={() => setOpen(false)} className="fixed inset-0 z-50 bg-stone-950/50 flex justify-center pt-24">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-lg rounded-lg shadow-xl overflow-hidden border border-stone-300 h-fit">
        <Command value={value} onValueChange={setValue}>
          <Command.Input placeholder="Search for something..." className="w-full p-4 border-b border-stone-300 text-stone-900 outline-none" />
          <Command.List className="p-2 max-h-64 overflow-y-auto">
            <Command.Empty className="p-4 text-sm text-stone-500 text-center">No results found for "{value}".</Command.Empty>
            
            <Command.Group heading="Team" className="text-xs text-stone-500 mb-2 px-2 pt-2">
              <Command.Item className="p-2 text-sm text-stone-900 hover:bg-stone-200 cursor-pointer rounded-md mt-1">Invite Member</Command.Item>
              <Command.Item className="p-2 text-sm text-stone-900 hover:bg-stone-200 cursor-pointer rounded-md mt-1">Org Chart</Command.Item>
            </Command.Group>
            
            <Command.Group heading="Settings" className="text-xs text-stone-500 mb-2 px-2 pt-2">
              <Command.Item className="p-2 text-sm text-stone-900 hover:bg-stone-200 cursor-pointer rounded-md mt-1">Billing</Command.Item>
              <Command.Item className="p-2 text-sm text-stone-900 hover:bg-stone-200 cursor-pointer rounded-md mt-1">Profile</Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};
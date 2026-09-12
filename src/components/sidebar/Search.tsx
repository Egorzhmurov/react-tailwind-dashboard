import { useState } from "react";
import { CommandMenu } from "./CommandMenu";

export const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-200 rounded flex items-center px-2 py-1.5 text-sm mb-4 relative">
        <input 
          type="text" 
          placeholder="Search" 
          onFocus={(e) => {
            e.target.blur(); // Убираем фокус с инпута, чтобы показать модалку
            setOpen(true);
          }}
          className="w-full bg-transparent placeholder-stone-500 outline-none cursor-pointer"
        />
        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-stone-50 text-stone-500 text-[10px] px-1.5 py-0.5 rounded shadow-sm font-medium">
          ⌘K
        </span>
      </div>
      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};
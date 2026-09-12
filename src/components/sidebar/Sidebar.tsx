import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";

export const Sidebar = () => {
  return (
    <aside className="h-full flex flex-col">
      <AccountToggle />
      <Search />
      
      {/* Navigation block takes up all available space */}
      <nav className="flex-1 space-y-1">
        <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md bg-stone-200 text-stone-900">
          Dashboard
        </a>
        <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md text-stone-600 hover:bg-stone-200 hover:text-stone-900 transition-colors">
          Analytics
        </a>
        <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md text-stone-600 hover:bg-stone-200 hover:text-stone-900 transition-colors">
          Integrations
        </a>
        <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md text-stone-600 hover:bg-stone-200 hover:text-stone-900 transition-colors">
          Settings
        </a>
      </nav>

      {/* Bottom block for logout */}
      <div className="border-t border-stone-300 pt-4 mt-4 pb-2">
        <button className="w-full text-left px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-200 rounded-md transition-colors">
          Log Out
        </button>
      </div>
    </aside>
  );
};
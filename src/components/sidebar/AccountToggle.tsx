export const AccountToggle = () => {
  return (
    <div className="border-b border-stone-300 pb-4 mb-4 mt-2">
      <button className="flex items-center gap-2 p-1.5 hover:bg-stone-200 rounded transition-colors w-full text-left">
        <div className="w-8 h-8 rounded bg-violet-500 shrink-0 shadow-sm flex items-center justify-center text-white font-bold">
          Y
        </div>
        <div className="text-start">
          <span className="text-sm font-bold block text-stone-900">Yehor Zhmurov</span>
          <span className="text-xs text-stone-500 block">yehor@admin.com</span>
        </div>
      </button>
    </div>
  );
};
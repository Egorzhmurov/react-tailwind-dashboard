export const TopBar = () => {
  return (
    <div className="border-b border-stone-200 pb-4 mb-6 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Good evening, Yehor!</h1>
        <p className="text-sm text-stone-500">Here is what's happening with your projects today.</p>
      </div>
      <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
        Create New
      </button>
    </div>
  );
};
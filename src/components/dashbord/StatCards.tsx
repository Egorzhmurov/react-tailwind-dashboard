export const StatCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {/* Card 1 */}
      <div className="p-4 rounded-lg border border-stone-200 bg-stone-50">
        <p className="text-sm text-stone-500 mb-1">Total Revenue</p>
        <p className="text-2xl font-bold text-stone-900">$45,231.89</p>
        <p className="text-sm text-green-500 mt-2">+20.1% from last month</p>
      </div>
      
      {/* Card 2 */}
      <div className="p-4 rounded-lg border border-stone-200 bg-stone-50">
        <p className="text-sm text-stone-500 mb-1">Active Users</p>
        <p className="text-2xl font-bold text-stone-900">2,350</p>
        <p className="text-sm text-green-500 mt-2">+180 new today</p>
      </div>
      
      {/* Card 3 */}
      <div className="p-4 rounded-lg border border-stone-200 bg-stone-50">
        <p className="text-sm text-stone-500 mb-1">System Status</p>
        <p className="text-2xl font-bold text-stone-900">Online</p>
        <p className="text-sm text-stone-500 mt-2">All services running smoothly</p>
      </div>
    </div>
  );
};
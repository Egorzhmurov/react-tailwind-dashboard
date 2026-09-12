export const ActivityTable = () => {
  const activities = [
    { id: 1, user: "Anna Smith", action: "Upgraded Plan", date: "Today, 14:30", status: "Completed" },
    { id: 2, user: "Mark Johnson", action: "Refund Request", date: "Today, 11:15", status: "Pending" },
    { id: 3, user: "Elena Davis", action: "Canceled Subscription", date: "Yesterday", status: "Failed" },
    { id: 4, user: "Tom Wilson", action: "Invited Team Member", date: "Yesterday", status: "Completed" },
  ];

  return (
    <div className="border border-stone-200 rounded-lg overflow-hidden bg-white">
      <div className="px-6 py-4 border-b border-stone-200">
        <h2 className="text-lg font-semibold text-stone-900">Recent Activity</h2>
      </div>
      <table className="w-full text-left text-sm text-stone-600">
        <thead className="bg-stone-50 text-stone-500">
          <tr>
            <th className="px-6 py-3 font-medium">User</th>
            <th className="px-6 py-3 font-medium">Action</th>
            <th className="px-6 py-3 font-medium">Date</th>
            <th className="px-6 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-200">
          {activities.map((item) => (
            <tr key={item.id} className="hover:bg-stone-50 transition-colors">
              <td className="px-6 py-4 font-medium text-stone-900">{item.user}</td>
              <td className="px-6 py-4">{item.action}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                  item.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
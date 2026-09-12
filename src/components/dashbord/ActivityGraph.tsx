import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Desktop: 4000, Mobile: 2400 },
  { name: 'Feb', Desktop: 3000, Mobile: 1398 },
  { name: 'Mar', Desktop: 2000, Mobile: 9800 },
  { name: 'Apr', Desktop: 2780, Mobile: 3908 },
  { name: 'May', Desktop: 1890, Mobile: 4800 },
  { name: 'Jun', Desktop: 2390, Mobile: 3800 },
  { name: 'Jul', Desktop: 3490, Mobile: 4300 },
];

export const ActivityGraph = () => {
  return (
    <div className="col-span-1 lg:col-span-8 overflow-hidden rounded-lg border border-stone-200 bg-white p-4">
      <div className="mb-4">
        <h3 className="font-bold text-stone-900">Activity</h3>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="#a8a29e" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#a8a29e" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip wrapperClassName="text-sm rounded-lg" />
            <Line type="monotone" dataKey="Desktop" stroke="#8b5cf6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Mobile" stroke="#d6d3d1" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { feature: 'Tracking', mobile: 80, desktop: 120, max: 150 },
  { feature: 'Builder', mobile: 90, desktop: 98, max: 150 },
  { feature: 'Schedule', mobile: 86, desktop: 130, max: 150 },
  { feature: 'AI Asst', mobile: 99, desktop: 100, max: 150 },
  { feature: 'Billing', mobile: 85, desktop: 90, max: 150 },
  { feature: 'Metrics', mobile: 65, desktop: 85, max: 150 },
];

export const UsageRadar = () => {
  return (
    <div className="col-span-1 lg:col-span-4 overflow-hidden rounded-lg border border-stone-200 bg-white p-4">
      <div className="mb-4">
        <h3 className="font-bold text-stone-900">Usage by Feature</h3>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="feature" stroke="#a8a29e" fontSize={12} tickLine={false} />
            <Radar name="Desktop" dataKey="desktop" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
            <Radar name="Mobile" dataKey="mobile" stroke="#d6d3d1" fill="#d6d3d1" fillOpacity={0.2} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
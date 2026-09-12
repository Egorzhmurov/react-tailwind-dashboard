import { TopBar } from "./TopBar";
import { StatCards } from "./StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import { ActivityTable } from "./ActivityTable";

export const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col overflow-y-auto">
      <TopBar />
      <StatCards />
      
      {/* Сетка для графиков */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
        <ActivityGraph />
        <UsageRadar />
      </div>
      
      <div className="flex-1 mt-2">
        <ActivityTable />
      </div>
    </div>
  );
};
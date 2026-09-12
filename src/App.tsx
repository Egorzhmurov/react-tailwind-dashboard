import { Sidebar } from "./components/sidebar/Sidebar";
import { Dashboard } from "./components/dashbord/Dashboard";


function App() {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-stone-100 text-stone-950 min-h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
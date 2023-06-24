import "./App.css";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashBoardPage";
import InterviewSimulatorPage from "./pages/InterviewSimulatorPage";
function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      {/* <HomePage /> */}
      {/* <DashboardPage /> */}
      <InterviewSimulatorPage />
    </div>
  );
}

export default App;

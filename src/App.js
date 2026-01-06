import TopStatusBar from "./components/TopStatusBar/TopStatusBar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
      <div className="app-shell">
          <div className="app-topbar">
              <TopStatusBar />
          </div>

          <div className="app-body">
              <div className="app-sidebar">
                  <Sidebar />
              </div>

              <main className="app-content">
                  <Routes>
                      <Route path="/main" element={<div>Dashboard Physical</div>} />
                      <Route path="/analysis" element={<div>Analysis</div>} />
                      <Route path="/issuelog" element={<div>Issue Log</div>} />
                      <Route path="/setting" element={<div>Setting</div>} />
                  </Routes>
              </main>
          </div>
      </div>

  );
}

export default App;

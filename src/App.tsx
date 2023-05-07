import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`${
        dark ? "dark bg-[#51087E]" : "bg-[#d599fa]"
      } min-h-screen duration-300 transition-colors`}
    >
      <Dashboard dark={dark} setDark={() => setDark(!dark)} />
    </div>
  );
}

export default App;

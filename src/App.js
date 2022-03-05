import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { PageRoutes } from "./components/Routes";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900  dark:text-gray-200 min-h-screen">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <PageRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;

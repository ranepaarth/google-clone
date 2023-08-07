import React, { useState } from "react";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './components/Home'
import SearchPage from "./components/SearchPage";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg bg-gray-200 dark:bg-neutral-700 min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<SearchPage />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;

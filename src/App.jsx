import React, { useState } from "react";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './components/Home'
import SearchPage from "./components/SearchPage";

const App = () => {
  // const [darkTheme, setDarkTheme] = useState(true);
  return (
    // <div className={darkTheme ? "dark" : ""}>
    <div>
      <div className="bg bg-neutral-50 dark:bg-zinc-800 min-h-screen">
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

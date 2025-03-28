import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Tutorials from "./Pages/Tutorials";

const pages = {
  home: { component: <Home />, title: "Welcome to Tech Blog" },
  news: { component: <News />, title: "Latest Tech News" },
  tutorials: { component: <Tutorials />, title: "Learn Coding with Tutorials" },
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
     
      <Header 
        title={pages[currentPage]?.title || "Tech Blog"} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <Navigation setCurrentPage={setCurrentPage} />

      <div className="pageLayout">
        {pages[currentPage]?.component}
      </div>

      <Footer />
    </div>
  );
};

export default App;


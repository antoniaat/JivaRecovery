import React from "react";

// Core Components
import TopBar from "./components/Common/Header/Top-Bar/TopBar.js";
import Navbar from "./components/Common/Header/Navigation/Navbar.js";
import Footer from "./components/Common/Footer/Footer.js";

import AppRouter from "./AppRouter.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar></TopBar>
        <Navbar></Navbar>
      </header>

      <main className="App-main">
        <AppRouter></AppRouter>
      </main>

      <footer className="App-footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;

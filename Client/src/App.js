import React from "react";

import TopBar from "./components/common/header/topbar/TopBar.js";
import Navbar from "./components/common/header/navigation/Navbar.js";
import Footer from "./components/common/footer/Footer.js";

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

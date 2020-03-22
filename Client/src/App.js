import React from "react";

import TopBar from "./components/common/header/topbar/TopBar.js";
import Navbar from "./components/common/header/navigation/Navbar.js";
import Footer from "./components/common/footer/Footer.js";

import AppRouter from "./AppRouter.js";

function App() {
  return (
    <div className="App">
      <header>
        <TopBar />
        <Navbar />
      </header>

      <main>
        <AppRouter />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

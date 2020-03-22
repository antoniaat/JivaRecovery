import React from "react";

import TopBar from "./components/common/header/topbar/TopBar.js";
import Navbar from "./components/common/header/navigation/Navbar.js";
import Footer from "./components/common/footer/Footer.js";

import AppRouter from "./AppRouter.js";
import ContextWrapper from "./ContextWrapper";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <TopBar />
        <Navbar />

        <AppRouter />

        <Footer />
      </ContextWrapper>
    </div>
  );
}

export default App;

import React from 'react';

import TopBar from './components/common/header/topbar/top-bar';
import Navbar from './components/common/header/navigation/navbar';
import Footer from './components/common/footer/footer';

import AppRouter from './AppRouter.js';
import ContextWrapper from './ContextWrapper';

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

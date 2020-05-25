import React from "react";

import AppRouter from "./AppRouter.js";
import ContextWrapper from "./ContextWrapper";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <AppRouter />
      </ContextWrapper>
    </div>
  );
}

export default App;

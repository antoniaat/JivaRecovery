import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: "",
  setAuth: () => {},
});

const ContextWrapper = (props) => {
  const [auth, setAuth] = useState("");
  const value = React.useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default ContextWrapper;

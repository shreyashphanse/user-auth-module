import { createContext, PropsWithChildren, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const signIn = () => {
    setIsAuthenticated(true);
  };
  const signOut = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// a helper hook

export const useAuth = () => useContext(AuthContext);

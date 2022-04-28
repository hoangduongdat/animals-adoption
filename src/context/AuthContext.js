import { useEffect, createContext, useState } from "react";

export const authContext = createContext(null);

function AuthContext({ children }) {
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem("token") || null);



  return (
    <authContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </authContext.Provider>
  );
}
export default AuthContext;
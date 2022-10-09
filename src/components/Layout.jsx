import { useEffect } from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <main className="w-screen min-h-screen bg-base-100 text-base-content pt-3">
      <Nav />
      {children}
    </main>
  );
};

export default Layout;

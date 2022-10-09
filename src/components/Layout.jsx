import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <main className="w-full h-screen bg-transparent text-base-content pt-3 max-h-screen">
      <Nav />
      {children}
    </main>
  );
};

export default Layout;

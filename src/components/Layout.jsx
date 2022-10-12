import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <main className="relative w-full bg-transparent text-base-content pt-3">
      <Nav />
      <div className="min-h-[calc(100vh-410px)] bg-base-300">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;

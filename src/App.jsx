import { Routes, Route } from "react-router-dom";
import { UseEffectScroll } from "react-use-smooth-scroll";
import "react-use-smooth-scroll/dist/index.css";
import Layout from "./components/Layout";
import FourOFour from "./pages/404";
import Home from "./pages/Home";

function App() {
  return (
    <UseEffectScroll>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<FourOFour />} />
        </Routes>
      </Layout>
    </UseEffectScroll>
  );
}

export default App;

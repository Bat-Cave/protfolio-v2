import { LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { UseEffectScroll } from "react-use-smooth-scroll";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SiteTechnology from "./pages/SiteTechnology";
import FourOFour from "./pages/404";

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <UseEffectScroll>
        <HelmetProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<FourOFour />} />
              <Route
                path="/site-technology"
                element={<SiteTechnology />}
                errorElement={<FourOFour />}
              />
              <Route
                path="/favorites"
                element={<Favorites />}
                errorElement={<FourOFour />}
              />
            </Routes>
          </Layout>
        </HelmetProvider>
      </UseEffectScroll>
    </LazyMotion>
  );
}

export default App;

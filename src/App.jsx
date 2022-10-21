import { LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { UseEffectScroll } from "react-use-smooth-scroll";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WebDevHeroes from "./pages/WebDevHeroes";
import SiteTechnology from "./pages/SiteTechnology";
import FourOFour from "./pages/404";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import "react-lazy-load-image-component/src/effects/opacity.css";

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <UseEffectScroll>
        <HelmetProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<FourOFour />} />
              <Route
                path="/contact"
                element={<Contact />}
                errorElement={<FourOFour />}
              />
              <Route
                path="/experiences"
                element={<Experiences />}
                errorElement={<FourOFour />}
              />
              <Route
                path="/site-technology"
                element={<SiteTechnology />}
                errorElement={<FourOFour />}
              />
              <Route
                path="/heroes"
                element={<WebDevHeroes />}
                errorElement={<FourOFour />}
              />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </Layout>
        </HelmetProvider>
      </UseEffectScroll>
    </LazyMotion>
  );
}

export default App;

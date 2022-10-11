import { LazyMotion, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { UseEffectScroll } from "react-use-smooth-scroll";
import Layout from "./components/Layout";
import FourOFour from "./pages/404";
import Home from "./pages/Home";
import PortfolioContributions from "./pages/PortfolioContributions";

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <UseEffectScroll>
        <HelmetProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<FourOFour />} />
              <Route
                path="/portfolio-contributions"
                element={<PortfolioContributions />}
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

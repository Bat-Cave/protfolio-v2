import SectionWrapper from "../components/SectionWrapper";
import Hero from "../components/Home/Hero";
import Howdy from "../components/Home/Howdy";
import TechJourney from "../components/Home/TechJourney";
import NotAlone from "../components/Home/NotAlone";

const Home = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <Howdy />
      <TechJourney />
      <NotAlone />
    </SectionWrapper>
  );
};

export default Home;

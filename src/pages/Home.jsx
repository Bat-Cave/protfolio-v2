import SectionWrapper from "../components/SectionWrapper";
import Hero from "../components/Home/Hero";
import Howdy from "../components/Home/Howdy";
import TechJourney from "../components/Home/TechJourney";

const Home = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <Howdy />
      <TechJourney />
    </SectionWrapper>
  );
};

export default Home;

import SectionWrapper from "../components/SectionWrapper";
import Hero from "../components/Home/Hero";
import Howdy from "../components/Home/Howdy";

const Home = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <Howdy />
    </SectionWrapper>
  );
};

export default Home;

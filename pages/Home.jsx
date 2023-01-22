import SectionWrapper from "../components/SectionWrapper";
import Hero from "../components/Home/Hero";
import Howdy from "../components/Home/Howdy";
import TechJourney from "../components/Home/TechJourney";
import NotAlone from "../components/Home/NotAlone";
import GithubGraph from "../components/Home/GithubGraph";

const Page = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <Howdy />
      <TechJourney />
      {/* <GithubGraph /> */}
      <NotAlone />
    </SectionWrapper>
  );
};

export { Page };

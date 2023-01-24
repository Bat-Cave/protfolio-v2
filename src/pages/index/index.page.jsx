import SectionWrapper from "../../components/SectionWrapper";
import Hero from "../../components/Home/Hero";
import Howdy from "../../components/Home/Howdy";
import TechJourney from "../../components/Home/TechJourney";
import NotAlone from "../../components/Home/NotAlone";

const Page = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <Howdy />
      <TechJourney />
      <NotAlone />
    </SectionWrapper>
  );
};

export { Page };

export const documentProps = {
  title: "Rico Hancock | Howdy",
  description: "Front-end Web Developer with 3+ years of experience",
};

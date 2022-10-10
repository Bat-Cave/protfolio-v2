import SectionWrapper from "../components/SectionWrapper";

const PortfolioContributions = ({ children }) => {
  return (
    <SectionWrapper>
      <h1>
        This site was build with these{" "}
        <span className="gradient-text font-extrabold">AWESOME</span>{" "}
        technologies:
      </h1>
    </SectionWrapper>
  );
};

export default PortfolioContributions;

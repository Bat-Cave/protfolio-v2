import SectionWrapper from "../components/SectionWrapper";

const WebDevHeroes = () => {
  return (
    <SectionWrapper>
      <h1 className="text-center text-4xl mb-12">
        <span className="gradient-bottom-border">CSS Gurus,</span>{" "}
        <span className="gradient-bottom-border">Javascript Giants,</span> and{" "}
        <span className="gradient-bottom-border">
          Web Dev Content Creators.
        </span>
        <br />
        <br />
        These are some of my{" "}
        <span className="gradient-text font-extrabold">WebDevHeroes</span>:
      </h1>
    </SectionWrapper>
  );
};

export default WebDevHeroes;

import SectionWrapper from "../SectionWrapper";

const Projects = () => {
  return (
    <SectionWrapper>
      <p className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher text-center">
        What I'm Working On
      </p>
      <div className="card relative w-full shadow-md bg-neutral text-neutral-content text-lg p-12 max-w-2xl mx-auto">
        <div className="w-full flex flex-col items-center z-10">
          <p>
            I imagine that I'm not the only one who enjoys learning by doing, so
            I end up with many, many side projects. Most go nowhere, but some
            survive. The projects I have created range from a static website for
            a small business to simulating working on a team of developers for
            some developer friends.
          </p>
          <br />
          <a href="/projects" className="btn btn-secondary max-w-[300px]">
            Check out my projects!
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;

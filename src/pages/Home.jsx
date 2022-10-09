import Hero from "../components/Hero";
import hero from "../assets/hero.gif";
import SectionWrapper from "../components/SectionWrapper";

const Home = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <div className="bg-base-300 pb-96">
        <SectionWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            nulla, corrupti aperiam quaerat voluptatem perspiciatis nobis
            accusamus, magni debitis, quo temporibus soluta autem fugit quisquam
            quasi molestiae assumenda provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            nulla, corrupti aperiam quaerat voluptatem perspiciatis nobis
            accusamus, magni debitis, quo temporibus soluta autem fugit quisquam
            quasi molestiae assumenda provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            nulla, corrupti aperiam quaerat voluptatem perspiciatis nobis
            accusamus, magni debitis, quo temporibus soluta autem fugit quisquam
            quasi molestiae assumenda provident.
          </p>
        </SectionWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Home;

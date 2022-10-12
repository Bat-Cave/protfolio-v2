import { m } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from "../components/Hero";
import ricoAsCat from "../assets/rico-as-cat-4-cropped.webp";
import SectionWrapper from "../components/SectionWrapper";
// import { ReactComponent as GitHub } from "../assets/github.svg";
import { GitHub } from "iconoir-react";
import Card from "../components/Card";

//<a href="https://iconscout.com/3ds/moon" target="_blank">Moon 3D Illustration</a> by <a href="https://iconscout.com/contributors/iqonic-design">iqonic.design</a> on <a href="https://iconscout.com">IconScout</a>

const Home = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <div className="bg-[#21222C] pb-96">
        <SectionWrapper>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="container px-0 sm:px-5 py-24 mx-auto flex justify-center flex-wrap items-center"
          >
            <div
              className="group tooltip tooltip-secondary w-full lg:w-1/2 mb-10 lg:mb-0 rounded-lg max-h-[320px] max-w-[320px]"
              data-tip="↓ not actually me"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-[125px] h-full w-full"></div>
              <div className="relative mask mask-squircle h-full w-full">
                <LazyLoadImage
                  alt="feature"
                  className="object-cover object-center h-full w-full"
                  src={ricoAsCat}
                  effect="opacity"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-wrap lg:w-1/2 lg:text-left text-center ml-0 lg:ml-4">
              <h2 className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher">
                Howdy
              </h2>
              <Card>
                <h2 className="card-title mb-4">My name is Rico</h2>
                <p>
                  I am a front-end focused web developer with a passion for
                  creating.
                </p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://github.com/Bat-Cave"
                    className="btn btn-primary w-full sm:w-auto"
                    target="_blank"
                  >
                    <GitHub className="mr-2" width={24} height={24} /> My Github
                  </a>
                </div>
              </Card>
            </div>
          </m.div>
        </SectionWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Home;

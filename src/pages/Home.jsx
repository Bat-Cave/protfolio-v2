import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ricoAsCat from "../assets/rico-as-cat-4-cropped.webp";
import SectionWrapper from "../components/SectionWrapper";
import { GitHub } from "iconoir-react";

//<a href="https://iconscout.com/3ds/moon" target="_blank">Moon 3D Illustration</a> by <a href="https://iconscout.com/contributors/iqonic-design">iqonic.design</a> on <a href="https://iconscout.com">IconScout</a>

const Home = () => {
  return (
    <SectionWrapper fullWidth>
      <Hero />
      <div className="bg-[#21222C] pb-96">
        <SectionWrapper>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="container px-5 py-24 mx-auto flex justify-center flex-wrap"
          >
            <div
              className="group tooltip tooltip-secondary lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg"
              data-tip="↓ not actually me"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-[125px]"></div>
              <div className="relative mask mask-squircle">
                <img
                  alt="feature"
                  className="object-cover object-center h-full w-full"
                  src={ricoAsCat}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-wrap lg:w-1/2 lg:text-left text-center">
              <h2 className="text-9xl gradient-text font-bold font-serif py-4">
                Howdy
              </h2>
              <div className="card w-96 bg-neutral shadow-xl mt-8">
                <div className="card-body">
                  <h2 className="card-title">My name is Rico</h2>
                  <p>
                    I am a front-end focused web developer with a passion for
                    coding.
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://github.com/Bat-Cave"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      <GitHub className="mr-2" /> My Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </SectionWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Home;
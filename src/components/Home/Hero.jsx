import { m } from "framer-motion";
import Parallax from "../Parallax";
const Hero = () => {
  return (
    <div className="relative w-full h-screen group ">
      <div className="absolute bottom-0 top-unset lg:bottom-unset lg:top-0 w-full h-[calc(100vh+4.75rem)] translate-y-[0.1rem] lg:translate-y-[-4.75rem] shadow-bottom-inner-small lg:shadow-bottom-inner z-10 overflow-hidden flex pt-48 justify-start items-center flex-col">
        <Parallax>
          <m.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="mb-12 text-5xl md:text-7xl lg:text-9xl font-bold gradient-text uppercase text-center z-50 font-philosopher"
          >
            Always learning
          </m.h1>
        </Parallax>
        <Parallax>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.5 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="relative mt-4 flex w-full min-w-[150px] max-w-[30rem] md:min-w-[18rem] mx-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 mx-3"></div>
            <div className="mockup-code bg-base-300 text-secondary w-full min-w-[150px] mx-3">
              <pre data-prefix="$" className="hidden md:block">
                <code className="text-xs xs:text-lg">
                  because technology does not stop
                </code>
              </pre>
              <pre data-prefix="$" className="block md:hidden">
                <code className="text-xs xs:text-lg">because technology</code>
              </pre>
              <pre data-prefix="$" className="block md:hidden">
                <code className="text-xs xs:text-lg">does not stop</code>
              </pre>
            </div>
          </m.div>
        </Parallax>
      </div>
      <div
        id="naker-destination"
        className="absolute w-full h-[calc(100vh+4.75rem)] flex pt-36 lg:pt-0 lg:justify-center items-center flex-col z-0 translate-y-[-4.75rem] bg-[#343746] pb-52 px-7"
      ></div>
    </div>
  );
};

export default Hero;

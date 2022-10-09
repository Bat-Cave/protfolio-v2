import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="relative w-full h-screen group ">
      <div className="absolute w-full h-[calc(100vh+4.75rem)] translate-y-[-4.75rem] shadow-bottom-inner z-10"></div>
      <div
        id="naker-destination"
        className="absolute w-full h-[calc(100vh+4.75rem)] flex justify-center items-center flex-col z-0 translate-y-[-4.75rem] bg-[#343746] pb-52 px-7"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="text-9xl font-bold gradient-text uppercase font-serif text-center"
        >
          Always learning
        </motion.h1>
        <div className="relative mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="mockup-code bg-base-300 text-secondary">
            <pre data-prefix="$">
              <code>because technology does not stop</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

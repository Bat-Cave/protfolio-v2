import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const Hero = () => {
  return (
    <div className="relative w-full h-screen group ">
      <Helmet>
        <script
          data-who="💎 Made with naker.io 💎"
          src="https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js"
          data-option="{|environment|:{|gradient|:|radial|,|sensitivity|:0.06,|colorStart|:[33,34,44,0],|colorEnd|:[255,46,164,0]},|particle|:{|life|:5,|power|:0.003,|texture|:|https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png|,|number|:1604,|colorStart|:[116,129,92,0.13],|colorEnd|:[255,255,255,0.52],|sizeStart|:0.18,|sizeEnd|:0.36,|direction1|:{|x|:0,|y|:0,|z|:0},|direction2|:{|x|:0,|y|:0,|z|:0}},|waterMark|:false}"
          data-container="naker-destination"
        ></script>
      </Helmet>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.5 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="relative mt-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="mockup-code bg-base-300 text-secondary">
            <pre data-prefix="$">
              <code>because technology does not stop</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

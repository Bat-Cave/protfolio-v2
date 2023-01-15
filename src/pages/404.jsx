import { m } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SectionWrapper from "../components/SectionWrapper";
import launch from "../assets/launch.webp";
import { Code, HomeSimpleDoor, Star } from "iconoir-react";
import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";

const FourOFour = () => {
  return (
    <SectionWrapper fullWidth>
      <div className="relative w-full h-screen group">
        <Helmet>
          <script
            data-who="💎 Made with naker.io 💎"
            src="../scripts/nakerViewer.js"
            data-option="{|environment|:{|gradient|:|radial|,|sensitivity|:0.06,|colorStart|:[33,34,44,0],|colorEnd|:[255,46,164,0]},|particle|:{|life|:5,|power|:0.003,|texture|:|https://res.cloudinary.com/naker-io/image/upload/v1566560053/circle_05.png|,|number|:1604,|colorStart|:[116,129,92,0.13],|colorEnd|:[255,255,255,0.52],|sizeStart|:0.18,|sizeEnd|:0.36,|direction1|:{|x|:0,|y|:0,|z|:0},|direction2|:{|x|:0,|y|:0,|z|:0}},|waterMark|:false}"
            data-container="naker-destination"
          ></script>
        </Helmet>
        <div className="absolute bottom-0 top-unset lg:bottom-unset lg:top-0 w-full h-[calc(100vh+4.75rem)] translate-y-[0.1rem] lg:translate-y-[-4.75rem] shadow-bottom-inner-small lg:shadow-bottom-inner z-10 overflow-hidden flex pt-48 justify-start items-center flex-col">
          <p className="text-6xl gradient-text font-extrabold">404</p>
          <br />
          <h1 className="text-4xl">Page Not Found</h1>
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
              className="mb-12 text-5xl md:text-7xl lg:text-9xl font-bold gradient-text uppercase font-serif text-center z-50 font-philosopher"
            >
              <LazyLoadImage
                src={launch}
                alt="Rocket flying in space"
                width={400}
                height={400}
                className="w-full h-full"
                effect="opacity"
              />
            </m.h1>
          </Parallax>
        </div>
        <div
          id="naker-destination"
          className="absolute w-full h-[calc(100vh+4.75rem)] flex pt-36 lg:pt-0 lg:justify-center items-center flex-col z-0 translate-y-[-4.75rem] bg-[#343746] pb-52 px-7"
        ></div>
      </div>
      <div className="flex flex-col items-center pb-[200px]">
        <br />

        <h2 className="text-3xl">Here are some of the available pages:</h2>
        <br />
        <nav className="list-none mb-10">
          <ul className="menu menu-compact w-full p-2 rounded-box">
            <li>
              <a
                href="/"
                className="text-white hover:text-secondary hover:bg-neutral"
              >
                <HomeSimpleDoor width={24} height={24} /> Home
              </a>
            </li>
            <li>
              <Link
                to="/favorites"
                className="text-white hover:text-secondary hover:bg-neutral"
              >
                <Star width={24} height={24} /> Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/site-technology"
                className="text-white hover:text-secondary hover:bg-neutral"
              >
                <Code width={24} height={24} /> Site Technology
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </SectionWrapper>
  );
};

export default FourOFour;

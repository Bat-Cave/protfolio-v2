import Tilt from "react-parallax-tilt";
import SectionWrapper from "../components/SectionWrapper";
import vite from "../assets/vitejs.svg";
import react from "../assets/react-2.svg";
import tailwind from "../assets/tailwindcss.svg";
import framer from "../assets/framer-motion.svg";
import netlify from "../assets/netlify.svg";
import daisyui from "../assets/daisyui.webp";
import iconoir from "../assets/iconoir.webp";
import moon from "../assets/moon.webp";
import TechnologyTable from "../components/TechnologyTable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "../components/Card";

const SiteTechnology = () => {
  //todo: <a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a>

  const coreTechnologies = [
    {
      name: "Vite",
      logo: vite,
      url: "https://vitejs.dev/",
      description:
        "An incredibly fast tool for developing and bundling projects",
      version: "3.1.0",
    },
    {
      name: "React",
      logo: react,
      url: "https://reactjs.org/",
      description: "A JavaScript library for building user interfaces",
      version: "18.2.0",
    },
    {
      name: "Tailwindcss",
      logo: tailwind,
      url: "https://tailwindcss.com/",
      description: "A utility-first CSS framework",
      version: "3.1.8",
    },
    {
      name: "Framer Motion",
      logo: framer,
      url: "https://www.framer.com/motion/",
      description: "A production-ready motion library for React.",
      version: "7.5.3",
    },
    {
      name: "Netlify",
      logo: netlify,
      url: "https://www.netlify.com/",
      description:
        "A hosting platform for building, testing, and deploying websites.",
      version: "n/a",
    },
    {
      name: "DaisyUI",
      logo: daisyui,
      url: "https://daisyui.com/",
      description: "A Tailwind CSS component library",
      version: "2.31.0",
    },
    {
      name: "Iconoir",
      logo: iconoir,
      url: "https://iconoir.com/",
      description: "One of the biggest open source icons libraries.",
      version: "5.3.1",
    },
  ];

  const notablePackages = [
    {
      name: "Keen Slider",
      logo: undefined,
      url: "https://keen-slider.io/",
      description:
        "A performant carousel/slider with native touch/swipe behavior.",
      version: "6.8.2",
    },
    {
      name: "Naker Back",
      logo: undefined,
      url: "https://back.naker.io/",
      description: "A background effect generator",
      version: "n/a",
    },
    {
      name: "React Helmet Async",
      logo: undefined,
      url: "https://github.com/staylor/react-helmet-async",
      description:
        "An asyncronous react component to manage changes to the document head.",
      version: "1.3.0",
    },
    {
      name: "React Lazy Load Image",
      logo: undefined,
      url: "https://github.com/Aljullu/react-lazy-load-image-component",
      description: "A React component to lazy load images.",
      version: "1.5.5",
    },
    {
      name: "React Parallax Tilt",
      logo: undefined,
      url: "https://github.com/mkosir/react-parallax-tilt",
      description: "Easily apply tilt hover effect on React components",
      version: "1.7.68",
    },
    {
      name: "React Router Dom",
      logo: undefined,
      url: "https://reactrouter.com/",
      description: "A client side app router.",
      version: "6.4.2",
    },
    {
      name: "React Use Smooth Scroll",
      logo: undefined,
      url: "https://github.com/saidMounaim/react-use-smooth-scroll",
      description: "A React provider component to add a smooth scroll effect.",
      version: "1.0.0",
    },
  ];

  return (
    <SectionWrapper>
      <h1 className="text-center text-4xl mb-12">
        This site was build with these{" "}
        <span className="gradient-text font-extrabold">AWESOME</span>{" "}
        technologies:
      </h1>
      <TechnologyTable
        header="Core Technologies"
        technologies={coreTechnologies}
      />
      <br />
      <br />
      <br />
      <TechnologyTable
        header="Notable Packages"
        technologies={notablePackages}
      />
      <br />
      <br />
      <br />
      <h2 className="text-2xl mb-4 stat-value">Image Sources</h2>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-2 md:flex-row flex-col items-center justify-center">
          <div className="flex flex-col flex-wrap md:text-left items-start text-center w-full">
            <Tilt
              className="parallax-effect-image"
              perspective={100}
              tiltMaxAngleX={0.5}
              tiltMaxAngleY={0.5}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="top"
              glareBorderRadius="20px"
              gyroscope={true}
            >
              <Card bordered>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-secondary-focus w-full md:text-center text-left">
                  <a
                    href="https://iconscout.com/3ds/moon"
                    target="_blank"
                    className="w-full md:text-center text-left text-base-content"
                  >
                    Moon 3D Illustration
                  </a>
                </h1>
                <p className="mb-4 leading-relaxed text-base-content w-full md:text-center text-left">
                  by{" "}
                  <a
                    href="https://iconscout.com/contributors/iqonic-design"
                    target="_blank"
                    className="text-primary-focus"
                  >
                    iqonic.design
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://iconscout.com"
                    target="_blank"
                    className="text-primary-focus"
                  >
                    IconScout
                  </a>
                </p>
                <div className="my-8 max-w-[10rem] md:max-w-[20rem] mx-auto">
                  <LazyLoadImage
                    alt="Moon"
                    className="object-cover object-center h-full w-full"
                    src={moon}
                    effect="opacity"
                  />
                </div>
              </Card>
            </Tilt>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default SiteTechnology;

import { m } from "framer-motion";
import SectionWrapper from "../src/components/SectionWrapper";
import launch from "../assets/launch.webp";
import Parallax from "../src/components/Parallax";

const FourOFour = () => {
  return (
    <SectionWrapper fullWidth>
      <div className="relative w-full h-screen group">
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
              className="mb-12 text-5xl md:text-7xl lg:text-9xl font-bold gradient-text uppercase text-center z-50 font-philosopher"
            >
              <img
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
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.98"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffff"
                >
                  <path
                    d="M9 21H7a4 4 0 01-4-4v-6.292a4 4 0 011.927-3.421l5-3.03a4 4 0 014.146 0l5 3.03A4 4 0 0121 10.707V17a4 4 0 01-4 4h-2m-6 0v-4a3 3 0 013-3v0a3 3 0 013 3v4m-6 0h6"
                    stroke="#ffffff"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                Home
              </a>
            </li>
            <li>
              <a
                href="/favorites"
                className="text-white hover:text-secondary hover:bg-neutral"
              >
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.98"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffff"
                >
                  <path
                    d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z"
                    stroke="#ffffff"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                Favorites
              </a>
            </li>
            <li>
              <a
                href="/site-technology"
                className="text-white hover:text-secondary hover:bg-neutral"
              >
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.98"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ffffff"
                >
                  <path
                    d="M13.5 6L10 18.5M6.5 8.5L3 12l3.5 3.5M17.5 8.5L21 12l-3.5 3.5"
                    stroke="#ffffff"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                Site Technology
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </SectionWrapper>
  );
};

export default FourOFour;

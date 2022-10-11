import { m } from "framer-motion";
// import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
// import { ReactComponent as GitHub } from "../assets/github.svg";
import { LinkedIn, GitHub } from "iconoir-react";
import { ReactComponent as Codewars } from "../assets/codewars_icon.svg";
import { ReactComponent as CssBattle } from "../assets/cssbattle_icon.svg";

const Footer = () => {
  return (
    <footer className="text-secondary-content body-font bg-gradient-to-br from-secondary-focus via-secondary-focus to-primary-focus">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.3 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="container px-5 py-12 mx-auto"
      >
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-base-content tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <ul className="menu menu-compact w-full p-2 rounded-box">
                <li>
                  {/* <a className="text-secondary-content hover:text-secondary hover:bg-neutral">
                    First Link
                  </a> */}
                </li>
                <li>
                  {/* <a className="text-secondary-content hover:text-secondary hover:bg-neutral">
                    Second Link
                  </a> */}
                </li>
                <li>
                  {/* <a className="text-secondary-content hover:text-secondary hover:bg-neutral">
                    Third Link
                  </a> */}
                </li>
                <li>
                  {/* <a className="text-secondary-content hover:text-secondary hover:bg-neutral">
                    Fourth Link
                  </a> */}
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-base-content tracking-widest text-sm mb-3">
              Dev Socials
            </h2>
            <nav className="list-none mb-10">
              <ul className="menu menu-compact w-full p-2 rounded-box">
                <li>
                  <a
                    href="https://github.com/Bat-Cave"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <GitHub width={24} height={24} /> Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-l-hancock"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <LinkedIn width={24} height={24} /> Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codewars.com/users/Bat-Cave"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <Codewars width={24} height={24} />
                    Codewars
                  </a>
                </li>
                <li>
                  <a
                    href="https://cssbattle.dev/player/bat_cave"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <CssBattle width={24} height={24} /> CSSBattle
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-base-content tracking-widest text-sm mb-3">
              Socials
            </h2>
            <nav className="list-none mb-10">
              <ul className="menu menu-compact w-full p-2 rounded-box">
                <li>
                  <a
                    href="https://github.com/Bat-Cave"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <GitHub width={24} height={24} /> Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-l-hancock"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <LinkedIn width={24} height={24} /> Linkedin
                  </a>
                </li>
                <li>
                  {/* <a className="text-secondary-content hover:text-secondary hover:bg-neutral">
                    Third Link
                  </a> */}
                </li>
                <li>
                  {/* <a className="text-secondary-content hover:text-secondary hover:bg-neutral">
                    Fourth Link
                  </a> */}
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-base-content tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-secondary"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full  bg-secondary-focus bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </m.div>
    </footer>
  );
};

export default Footer;

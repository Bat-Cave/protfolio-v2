import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Code,
  Globe,
  HardDrive,
  HomeSimpleDoor,
  JournalPage,
  Menu,
  SendMail,
  Star,
} from "iconoir-react";
import useWindowSize from "../hooks/useWindowSize";
import useOnClickOutside from "../hooks/useOnClickOutside";
import moon from "../assets/moon.webp";
import { usePageContext } from "../../renderer/usePageContext";

const Nav = () => {
  const context = usePageContext();
  const dropdownRef = useRef();
  const { width } = useWindowSize();
  const onClickOutside = useOnClickOutside();
  const { scrollY } = useScroll();
  const isHome = context.urlPathname === "/";
  const isSmallScreen = width <= 1024;
  const transform = useTransform(
    scrollY,
    [0, 700],
    [
      isHome
        ? isSmallScreen
          ? "translateY(-50%, 600vh) scale(2.5)"
          : "translateY(400vw, 800%) scale(3)"
        : "translate(-50%, -50%) scale(1)",
      "translate(-50%, -50%) scale(1)",
    ]
  );

  const toggleMenu = () => {
    dropdownRef.current.classList.toggle("dropdown-open");
    document.activeElement.blur();
  };
  const closeMenu = () => {
    dropdownRef.current.classList.remove("dropdown-open");
    document.activeElement.blur();
  };

  onClickOutside(dropdownRef, closeMenu);

  return (
    <nav className="navbar bg-neutral rounded-2xl z-20 sticky top-3 mx-auto w-[calc(100vw-30px)] lg:w-[calc(100vw-4.5rem)] max-w-7xl shadow-md shadow-base-300">
      <div className="flex-1 hidden lg:flex">
        <a
          href="/"
          className="btn btn-ghost normal-case text-2xl font-extrabold gradient-text"
        >
          Rico Hancock
        </a>
      </div>
      <m.div
        src={moon}
        style={{ transform }}
        className="w-20 lg:w-20 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] fade-in"
      >
        <LazyLoadImage
          src={moon}
          alt="Moon"
          width={80}
          height={80}
          className="w-full h-full"
          effect="opacity"
        />
      </m.div>
      <div className="flex-none">
        <div
          ref={dropdownRef}
          onClick={toggleMenu}
          className="dropdown lg:dropdown-end"
        >
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            <Menu width={24} height={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu shadow-md dropdown-content p-2 bg-neutral rounded-box w-52 mt-4"
          >
            <li>
              <a href="/">
                <HomeSimpleDoor
                  width={24}
                  height={24}
                  className="text-secondary"
                />{" "}
                Home
              </a>
            </li>
            <li>
              <a href="/resume">
                <JournalPage width={24} height={24} className="text-primary" />{" "}
                Resume
              </a>
            </li>
            <li>
              <a href="/projects">
                <HardDrive width={24} height={24} className="text-warning" />{" "}
                Projects
              </a>
            </li>
            {/* <li>
              <Link to="/experiences">
                <Globe width={24} height={24} className="text-success" />{" "}
                Experiences
              </Link>
            </li> */}
            <li>
              <a href="/heroes">
                <Star width={24} height={24} className="text-accent" /> Web Dev
                Heroes
              </a>
            </li>
            <li>
              <a href="/site-technology">
                <Code width={24} height={24} className="text-info" /> Site
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

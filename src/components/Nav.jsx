import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
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
        <img
          src={moon}
          alt="Moon"
          width={80}
          height={80}
          className="w-full h-full"
          effect="opacity"
        />
      </m.div>
      <div className="hidden lg:flex">
        <ul className="flex gap-3">
          <li>
            <a
              href="/resume"
              className="btn btn-xs h-10 flex gap-2 text-xs normal-case"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                strokeWidth="1.98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ff7ac6"
              >
                <path
                  d="M6 6h12M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
                  stroke="#ff7ac6"
                  strokeWidth="1.98"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6 18v-4h3v4H6z"
                  stroke="#ff7ac6"
                  strokeWidth="1.98"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://devbroshq.com/blog?author=user_2bdgRTgjSr6kjtVtHkrqwsCdFJx"
              className="btn btn-xs h-10 flex gap-2 text-xs normal-case"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#8be8fd"
              >
                <path
                  d="M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5"
                  stroke="#8be8fd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M13 7L15 9.5L13 12"
                  stroke="#8be8fd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5 7L3 9.5L5 12"
                  stroke="#8be8fd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 6L8 13"
                  stroke="#8be8fd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
              Blog
            </a>
          </li>
          <a
            href="/projects"
            className="btn btn-xs h-10 flex gap-2 text-xs normal-case"
          >
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.98"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#f1fa89"
            >
              <path
                d="M10 17.01l.01-.011M6 17.01l.01-.011"
                stroke="#f1fa89"
                strokeWidth="1.98"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 13v7.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V13M2 13h20M2 13l2.872-9.572A.6.6 0 015.446 3h13.108a.6.6 0 01.574.428L22 13"
                stroke="#f1fa89"
                strokeWidth="1.98"
              ></path>
            </svg>{" "}
            Projects
          </a>
        </ul>
      </div>

      {/* Mobile nav */}
      <div className="flex-none lg:hidden">
        <div
          ref={dropdownRef}
          onClick={toggleMenu}
          className="dropdown lg:dropdown-end"
        >
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.98"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#f8f8f2"
            >
              <path
                d="M3 5h18M3 12h18M3 19h18"
                stroke="#f8f8f2"
                strokeWidth="1.98"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu shadow-md dropdown-content p-2 bg-neutral rounded-box w-52 mt-4"
          >
            <li>
              <a href="/">
                <svg
                  width="20px"
                  height="20px"
                  strokeWidth="1.98"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#bf95f9"
                >
                  <path
                    d="M9 21H7a4 4 0 01-4-4v-6.292a4 4 0 011.927-3.421l5-3.03a4 4 0 014.146 0l5 3.03A4 4 0 0121 10.707V17a4 4 0 01-4 4h-2m-6 0v-4a3 3 0 013-3v0a3 3 0 013 3v4m-6 0h6"
                    stroke="#bf95f9"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                Home
              </a>
            </li>
            <li>
              <a href="/resume">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  strokeWidth="1.98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#ff7ac6"
                >
                  <path
                    d="M6 6h12M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
                    stroke="#ff7ac6"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6 18v-4h3v4H6z"
                    stroke="#ff7ac6"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                Resume
              </a>
            </li>
            <li>
              <a href="https://devbroshq.com/blog?author=user_2bdgRTgjSr6kjtVtHkrqwsCdFJx">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#8be8fd"
                >
                  <path
                    d="M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5"
                    stroke="#8be8fd"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13 7L15 9.5L13 12"
                    stroke="#8be8fd"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5 7L3 9.5L5 12"
                    stroke="#8be8fd"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 6L8 13"
                    stroke="#8be8fd"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>{" "}
                Blog
              </a>
            </li>
            <li>
              <a href="/projects">
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.98"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#f1fa89"
                >
                  <path
                    d="M10 17.01l.01-.011M6 17.01l.01-.011"
                    stroke="#f1fa89"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2 13v7.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V13M2 13h20M2 13l2.872-9.572A.6.6 0 015.446 3h13.108a.6.6 0 01.574.428L22 13"
                    stroke="#f1fa89"
                    strokeWidth="1.98"
                  ></path>
                </svg>{" "}
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

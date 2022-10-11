import { Link, useLocation } from "react-router-dom";
import { m, useScroll, useTransform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { ReactComponent as Menu } from "../assets/menu.svg";
import { Menu } from "iconoir-react";
import moon from "../assets/moon.webp";
import useWindowSize from "../hooks/useWindowSize";

const Nav = () => {
  const { width } = useWindowSize();
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
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

  console.log({ width });

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
        <div className="dropdown lg:dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            <Menu width={24} height={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-neutral rounded-box w-52 mt-4"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/portfolio-contributions">Contributions</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

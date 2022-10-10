import { Menu } from "iconoir-react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import moon from "../assets/moon.png";

const Nav = () => {
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const transform = useTransform(
    scrollY,
    [0, 700],
    [
      isHome
        ? "translateY(400%, 800%) scale(3)"
        : "translate(-50%, -50%) scale(1)",
      "translate(-50%, -50%) scale(1)",
    ]
  );

  return (
    <nav className="navbar bg-neutral rounded-2xl z-20 sticky top-3 mx-auto w-[calc(100vw-4.5rem)] max-w-7xl shadow-md shadow-base-300 space-be">
      <div className="flex-1">
        <a
          href="/"
          className="btn btn-ghost normal-case text-2xl font-extrabold gradient-text"
        >
          Rico Hancock
        </a>
      </div>
      <motion.img
        src={moon}
        style={{ transform }}
        className="w-20 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      />
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-neutral rounded-box w-52 mt-4"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import { ReactComponent as Python } from "../assets/python.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as React } from "../assets/react.svg";
import { ReactComponent as Node } from "../assets/node.svg";
import { ReactComponent as Postgresql } from "../assets/postgresql.svg";

const getLanguageBadge = (badge, size) => {
  const badges = {
    python: {
      large: (
        <span className="badge bg-green-600 border-green-800 text-black gap-2 h-9 mt-2">
          <Python width={24} height={24} /> Python
        </span>
      ),
      small: (
        <span className="badge bg-green-600 border-green-800 text-black gap-1">
          <Python width={16} height={16} /> Python
        </span>
      ),
    },
    javascript: {
      large: (
        <span className="badge bg-yellow-400 border-yellow-600 text-black gap-2 h-9 mt-2">
          <Javascript width={24} height={24} /> Javascript
        </span>
      ),
      small: (
        <span className="badge bg-yellow-400 border-yellow-600 text-black gap-1">
          <Javascript width={16} height={16} /> Javascript
        </span>
      ),
    },
    html: {
      large: (
        <span className="badge bg-orange-600 border-orange-800 text-black gap-2 h-9 mt-2">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M4 3l1.778 17.09L12 22l6.222-1.91L20 3H4z"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17 7H7.5l.5 4.5h8l-.5 5.5-3.5 1-3.5-1-.25-2.5"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          HTML5
        </span>
      ),
      small: (
        <span className="badge bg-orange-600 border-orange-800 text-black gap-1">
          <svg
            width="16px"
            height="16px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M4 3l1.778 17.09L12 22l6.222-1.91L20 3H4z"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17 7H7.5l.5 4.5h8l-.5 5.5-3.5 1-3.5-1-.25-2.5"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          HTML5
        </span>
      ),
    },
    css: {
      large: (
        <span className="badge bg-blue-600 border-blue-800 text-black gap-2 h-9 mt-2">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M4 3l1.778 17.09L12 22l6.222-1.91L20 3H4z"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7 7h9.5l-1 10-3.5 1-3.5-1-.25-2.5M16 11.5H7.5"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          CSS3
        </span>
      ),
      small: (
        <span className="badge bg-blue-600 border-blue-800 text-black gap-1">
          <svg
            width="16px"
            height="16px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M4 3l1.778 17.09L12 22l6.222-1.91L20 3H4z"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7 7h9.5l-1 10-3.5 1-3.5-1-.25-2.5M16 11.5H7.5"
              stroke="#000000"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          CSS3
        </span>
      ),
    },
    react: {
      large: (
        <span className="badge bg-sky-500 border-sky-600 text-black gap-2 h-9 mt-2">
          <React width={24} height={24} /> React
        </span>
      ),
      small: (
        <span className="badge bg-sky-500 border-sky-600 text-black gap-1">
          <React width={16} height={16} /> React
        </span>
      ),
    },
    node: {
      large: (
        <span className="badge bg-lime-500 border-lime-700 text-black gap-2 h-9 mt-2">
          <Node width={24} height={24} /> Node
        </span>
      ),
      small: (
        <span className="badge bg-lime-500 border-lime-700 text-black gap-1">
          <Node width={16} height={16} /> Node
        </span>
      ),
    },
    postgresql: {
      large: (
        <span className="badge bg-cyan-600 border-cyan-800 text-black gap-2 h-9 mt-2">
          <Postgresql width={24} height={24} /> Postgresql
        </span>
      ),
      small: (
        <span className="badge bg-cyan-600 border-cyan-800 text-black gap-1">
          <Postgresql width={16} height={16} /> Postgresql
        </span>
      ),
    },
  };

  if (!badge || !size) return null;

  return badges[badge][size];
};

export { getLanguageBadge };

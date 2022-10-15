import { Css3, Html5 } from "iconoir-react";
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
          <Html5 width={24} height={24} /> HTML5
        </span>
      ),
      small: (
        <span className="badge bg-orange-600 border-orange-800 text-black gap-1">
          <Html5 width={16} height={16} /> HTML5
        </span>
      ),
    },
    css: {
      large: (
        <span className="badge bg-blue-600 border-blue-800 text-black gap-2 h-9 mt-2">
          <Css3 width={24} height={24} /> CSS3
        </span>
      ),
      small: (
        <span className="badge bg-blue-600 border-blue-800 text-black gap-1">
          <Css3 width={16} height={16} /> CSS3
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

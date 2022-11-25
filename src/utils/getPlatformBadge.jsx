import { AppWindow, Twitter, YouTube } from "iconoir-react";
import { ReactComponent as Twitch } from "../assets/twitch.svg";
import { ReactComponent as Github } from "../assets/github.svg";

const getPlatformBadge = (badge, size, name) => {
  const badges = {
    youtube: {
      large: (
        <span className="flex gap-2 hover:bg-base-300 px-3 py-1 rounded-lg">
          <YouTube width={24} height={24} className="text-red-600" />{" "}
          <span className="hidden md:block">{name ? name : "YouTube"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <YouTube width={16} height={16} className="text-red-600" />{" "}
          <span className="hidden md:block">{name ? name : "YouTube"}</span>
        </span>
      ),
    },
    twitch: {
      large: (
        <span className="flex gap-2 hover:bg-base-300 px-3 py-1 rounded-lg">
          <Twitch width={30} height={30} className="text-violet-700" />{" "}
          <span className="hidden md:block">{name ? name : "Twitch"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <Twitch width={24} height={24} className="text-violet-700" />{" "}
          <span className="hidden md:block">{name ? name : "Twitch"}</span>
        </span>
      ),
    },
    github: {
      large: (
        <span className="flex gap-2 hover:bg-base-300 px-3 py-1 rounded-lg">
          <Github width={24} height={24} className="text-orange-600" />{" "}
          <span className="hidden md:block">{name ? name : "Github"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <Github width={16} height={16} className="text-orange-600" />{" "}
          <span className="hidden md:block">{name ? name : "Github"}</span>
        </span>
      ),
    },
    twitter: {
      large: (
        <span className="flex gap-2 hover:bg-base-300 px-3 py-1 rounded-lg">
          <Twitter width={24} height={24} className="text-sky-500" />{" "}
          <span className="hidden md:block">{name ? name : "Twitter"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <Twitter width={16} height={16} className="text-sky-500" />{" "}
          <span className="hidden md:block">{name ? name : "Twitter"}</span>
        </span>
      ),
    },
    website: {
      large: (
        <span className="flex gap-2 hover:bg-base-300 px-3 py-1 rounded-lg">
          <AppWindow width={24} height={24} className="text-sky-500" />{" "}
          <span className="hidden md:block">{name ? name : "Website"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <AppWindow width={16} height={16} className="text-sky-500" />{" "}
          <span className="hidden md:block">{name ? name : "Website"}</span>
        </span>
      ),
    },
  };

  if (!badge || !size) return null;

  return badges[badge][size];
};

export { getPlatformBadge };

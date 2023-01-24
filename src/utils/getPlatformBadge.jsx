import { ReactComponent as Twitch } from "../assets/twitch.svg";
import { ReactComponent as Github } from "../assets/github.svg";

const getPlatformBadge = (badge, size, name) => {
  const badges = {
    youtube: {
      large: (
        <span className="flex gap-2 hover:bg-base-300 px-3 py-1 rounded-lg">
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#dc2626"
          >
            <path
              d="M14 12l-3.5 2v-4l3.5 2z"
              fill="#dc2626"
              stroke="#dc2626"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z"
              stroke="#dc2626"
              strokeWidth="1.98"
            ></path>
          </svg>{" "}
          <span className="hidden md:block">{name ? name : "YouTube"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <svg
            width="16px"
            height="16px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#dc2626"
          >
            <path
              d="M14 12l-3.5 2v-4l3.5 2z"
              fill="#dc2626"
              stroke="#dc2626"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z"
              stroke="#dc2626"
              strokeWidth="1.98"
            ></path>
          </svg>{" "}
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
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#0ea5e9"
          >
            <path
              d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z"
              stroke="#0ea5e9"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          <span className="hidden md:block">{name ? name : "Twitter"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <svg
            width="16px"
            height="16px"
            strokeWidth="1.98"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#0ea5e9"
          >
            <path
              d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z"
              stroke="#0ea5e9"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          <span className="hidden md:block">{name ? name : "Twitter"}</span>
        </span>
      ),
    },
    website: {
      large: (
        <span className="flex gap-2 hover:bg-base-300 px-3 py-1 rounded-lg">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1.98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#0ea5e9"
          >
            <path
              d="M2 19V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2z"
              stroke="#0ea5e9"
              strokeWidth="1.98"
            ></path>
            <path
              d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"
              stroke="#0ea5e9"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          <span className="hidden md:block">{name ? name : "Website"}</span>
        </span>
      ),
      small: (
        <span className="flex gap-1 hover:bg-base-300 px-3 py-1 rounded-lg">
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            strokeWidth="1.98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#0ea5e9"
          >
            <path
              d="M2 19V5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2z"
              stroke="#0ea5e9"
              strokeWidth="1.98"
            ></path>
            <path
              d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"
              stroke="#0ea5e9"
              strokeWidth="1.98"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>{" "}
          <span className="hidden md:block">{name ? name : "Website"}</span>
        </span>
      ),
    },
  };

  if (!badge || !size) return null;

  return badges[badge][size];
};

export { getPlatformBadge };

import { m } from "framer-motion";
// import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
// import { ReactComponent as GitHub } from "../assets/github.svg";
import { ReactComponent as Codewars } from "../assets/codewars_icon.svg";
import { ReactComponent as CssBattle } from "../assets/cssbattle_icon.svg";
import { ReactComponent as Twitch } from "../assets/twitch.svg";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const Footer = () => {
  const [copyDiscordStatus, copyDiscord] = useCopyToClipboard(
    "Uncle Rico #2015",
    5000
  );

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
              Pages
            </h2>
            <nav className="list-none mb-10">
              <ul className="menu menu-compact w-full p-2 rounded-box">
                <li>
                  <a
                    href="/"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M9 21H7a4 4 0 01-4-4v-6.292a4 4 0 011.927-3.421l5-3.03a4 4 0 014.146 0l5 3.03A4 4 0 0121 10.707V17a4 4 0 01-4 4h-2m-6 0v-4a3 3 0 013-3v0a3 3 0 013 3v4m-6 0h6"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/resume"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      strokeWidth="1.98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M6 6h12M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v18.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M6 18v-4h3v4H6z"
                        stroke="#fff"
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
                    href="/projects"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M10 17.01l.01-.011M6 17.01l.01-.011"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M2 13v7.4a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V13M2 13h20M2 13l2.872-9.572A.6.6 0 015.446 3h13.108a.6.6 0 01.574.428L22 13"
                        stroke="#fff"
                        strokeWidth="1.98"
                      ></path>
                    </svg>
                    Projects
                  </a>
                </li>
                {/* <li>
                  <Link
                    href="/experiences"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <Globe width={24} height={24} /> Experiences
                  </Link>
                </li> */}
                <li>
                  <a
                    href="/heroes"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    Web Dev Heroes
                  </a>
                </li>
                <li>
                  <a
                    href="/site-technology"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M13.5 6L10 18.5M6.5 8.5L3 12l3.5 3.5M17.5 8.5L21 12l-3.5 3.5"
                        stroke="#fff"
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
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-l-hancock"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    Linkedin
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
                    href="https://www.facebook.com/richard.l.hancock/"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 21v-9c0-2.188.5-4 4-4M9 13h6"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/uncle.ri.co/"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      strokeWidth="1.98"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
                        stroke="#fff"
                        strokeWidth="1.98"
                      ></path>
                      <path
                        d="M17.5 6.51l.01-.011"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    Instagram
                  </a>
                </li>
                <li>
                  <span
                    onClick={copyDiscord}
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      strokeWidth="1.98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#fff"
                    >
                      <path
                        d="M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z"
                        stroke="#fff"
                        strokeWidth="1.98"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    {copyDiscordStatus === "copied"
                      ? "Copied!"
                      : "Uncle Rico #2015"}
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.twitch.tv/monkeydrumma"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <Twitch width={24} height={24} fill="currColor" /> Twitch
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </m.div>
    </footer>
  );
};

export default Footer;

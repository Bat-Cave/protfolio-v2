import { m } from "framer-motion";
// import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
// import { ReactComponent as GitHub } from "../assets/github.svg";
import {
  LinkedIn,
  GitHub,
  Code,
  Instagram,
  Discord,
  HomeSimpleDoor,
  Star,
  SendMail,
  Globe,
  HardDrive,
  Facebook,
  JournalPage,
} from "iconoir-react";
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
                    <HomeSimpleDoor width={24} height={24} /> Home
                  </a>
                </li>
                <li>
                  <a
                    href="/resume"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <JournalPage width={24} height={24} /> Resume
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <HardDrive width={24} height={24} />
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
                    <Star width={24} height={24} /> Web Dev Heroes
                  </a>
                </li>
                <li>
                  <a
                    href="/site-technology"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <Code width={24} height={24} /> Site Technology
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
                    href="https://www.facebook.com/richard.l.hancock/"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <Facebook width={24} height={24} /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/uncle.ri.co/"
                    target="_blank"
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <Instagram width={24} height={24} /> Instagram
                  </a>
                </li>
                <li>
                  <span
                    onClick={copyDiscord}
                    className="text-secondary-content hover:text-secondary hover:bg-neutral"
                  >
                    <Discord width={24} height={24} />{" "}
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

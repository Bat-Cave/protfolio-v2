import { LazyLoadImage } from "react-lazy-load-image-component";
import Parallax from "../components/Parallax";
import SectionWrapper from "../components/SectionWrapper";
import { getPlatformBadge } from "../utils/getPlatformBadge";

const WebDevHeroes = () => {
  const heroes = [
    {
      name: "Theo Browne",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/c/TheoBrowne1017",
          badge: getPlatformBadge("youtube", "large"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/t3dotgg",
          badge: getPlatformBadge("twitter", "large"),
        },
        {
          name: "Twitch",
          url: "https://www.twitch.tv/theo",
          badge: getPlatformBadge("twitch", "small"),
        },
        {
          name: "GitHub",
          url: "https://www.twitch.tv/theo",
          badge: getPlatformBadge("github", "large"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/6751787?v=4",
      summary: (
        <p>
          CEO of{" "}
          <a href="https://ping.gg/" target="_blank">
            Ping.gg
          </a>{" "}
          and Ex-Twitch Engineer,{" "}
          <span className="gradient-text font-extrabold">Theo Browne</span> is
          one of my favorite people to listen to.
        </p>
      ),
    },
    {
      name: "Kent C. Dodds",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/kentcdodds",
          badge: getPlatformBadge("github", "large"),
        },
        {
          name: "Website",
          url: "https://kentcdodds.com/",
          badge: getPlatformBadge("website", "large"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/kentcdodds",
          badge: getPlatformBadge("twitter", "large"),
        },
        {
          name: "Youtube",
          url: "https://youtube.com/c/KentCDodds-vids",
          badge: getPlatformBadge("youtube", "large"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/1500684?v=4",
      summary: (
        <p>
          CEO of{" "}
          <a href="https://ping.gg/" target="_blank">
            Ping.gg
          </a>{" "}
          and Ex-Twitch Engineer,{" "}
          <span className="gradient-text font-extrabold">Theo Browne</span> is
          one of my favorite people to listen to.
        </p>
      ),
    },
  ];

  //TODO: Add Jack Herrington (https://github.com/jherr), Kevin Powell (https://github.com/kevin-powell), Ben Awad (https://github.com/benawad), Jeff Delaney (https://github.com/codediodeio)

  return (
    <SectionWrapper>
      <p className="text-center text-4xl mb-12 max-w-3xl mx-auto">
        <span className="gradient-bottom-border">CSS Gurus,</span>{" "}
        <span className="gradient-bottom-border">Javascript Giants,</span> and{" "}
        <span className="gradient-bottom-border flex w-max mx-auto pt-2">
          Web Dev Content Creators.
        </span>
      </p>
      <h1 className="text-center text-4xl mb-12 max-w-3xl mx-auto uppercase">
        These are some of my{" "}
        <span className="gradient-text font-extrabold block text-6xl">
          Web Dev Heroes
        </span>
      </h1>
      <div className="mt-40">
        {heroes.map((h, i) => {
          const isEven = i % 2 === 0;

          return (
            <Parallax>
              <div
                className={
                  isEven
                    ? "flex rounded-2xl bg-base-100 p-10 shadow-lg justify-between"
                    : "flex flex-row-reverse rounded-2xl bg-base-100 p-10 shadow-lg justify-between"
                }
              >
                <div className="avatar px-9">
                  <div className="w-24 lg:w-[256px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <LazyLoadImage
                      src={h.imgUrl}
                      alt={h.name}
                      width={256}
                      height={256}
                      className="w-full h-full"
                      effect="opacity"
                    />
                  </div>
                </div>
                <div
                  className={
                    isEven
                      ? "flex flex-col pl-0"
                      : "flex flex-col pl-0 text-right"
                  }
                >
                  <p className="text-2xl font-philosopher">{h.name}</p>
                  <br />
                  <div
                    className={
                      isEven ? "flex gap-4" : "flex gap-4 flex-row-reverse"
                    }
                  >
                    {h.links.map((l, i) => {
                      return (
                        <div className="tooltip" data-tip={l.name}>
                          <a href={l.url} target="_blank">
                            {l.badge}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  <br />
                  {h.summary}
                </div>
              </div>
            </Parallax>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default WebDevHeroes;

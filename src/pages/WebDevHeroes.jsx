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
          name: "Youtube",
          url: "https://youtube.com/c/KentCDodds-vids",
          badge: getPlatformBadge("youtube", "large"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/kentcdodds",
          badge: getPlatformBadge("twitter", "large"),
        },
        {
          name: "Website",
          url: "https://kentcdodds.com/",
          badge: getPlatformBadge("website", "large"),
        },
        {
          name: "GitHub",
          url: "https://github.com/kentcdodds",
          badge: getPlatformBadge("github", "large"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/1500684?v=4",
      summary: (
        <p>
          <span className="gradient-text font-extrabold">Kent C. Dodds</span> is
          a full time educator whose goal is to{" "}
          <i>
            ‟make the world a better place by teaching people ... how to make
            quality software.”
          </i>{" "}
          I frequently visit his website to read his blog articles and listen to
          his{" "}
          <a
            href="https://kentcdodds.com/calls"
            target="_blank"
            className="link link-secondary"
          >
            <i>Call Kent</i>
          </a>{" "}
          podcast, although he has recently announced his new site,{" "}
          <a
            href="https://www.epicweb.dev/"
            target="_blank"
            className="link link-secondary"
          >
            Epic Web Dev
          </a>
          , where he plans to post everything he knows about web dev. I have
          also gone through his React course on{" "}
          <a
            href="https://epicreact.dev/"
            target="_blank"
            className="link link-secondary"
          >
            epicreact.dev
          </a>
          . Kent's way of teaching quickly revealed a path to me that lead out
          of the basic web dev tutorials into a world of potential.
        </p>
      ),
    },
    {
      name: "Jack Herrington",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/@jherr",
          badge: getPlatformBadge("youtube", "large"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/jherr",
          badge: getPlatformBadge("twitter", "large"),
        },
        {
          name: "Website",
          url: "https://www.jackherrington.com/",
          badge: getPlatformBadge("website", "large"),
        },
        {
          name: "GitHub",
          url: "https://github.com/jherr",
          badge: getPlatformBadge("github", "large"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/22392?v=4",
      summary: (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          officiis nostrum recusandae perferendis incidunt minima quasi,
          voluptatibus placeat dolorum quaerat quisquam earum dignissimos quod
          odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Commodi officiis nostrum recusandae perferendis incidunt minima
          quasi, voluptatibus placeat dolorum quaerat quisquam earum dignissimos
          quod odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam?
        </p>
      ),
    },
    {
      name: "Kevin Powell",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/kepowob",
          badge: getPlatformBadge("youtube", "large"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/KevinJPowell",
          badge: getPlatformBadge("twitter", "large"),
        },
        {
          name: "Website",
          url: "https://www.kevinpowell.co/",
          badge: getPlatformBadge("website", "large"),
        },
        {
          name: "GitHub",
          url: "https://github.com/kevin-powell",
          badge: getPlatformBadge("github", "large"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/25749407?v=4",
      summary: (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          officiis nostrum recusandae perferendis incidunt minima quasi,
          voluptatibus placeat dolorum quaerat quisquam earum dignissimos quod
          odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Commodi officiis nostrum recusandae perferendis incidunt minima
          quasi, voluptatibus placeat dolorum quaerat quisquam earum dignissimos
          quod odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam?
        </p>
      ),
    },
    {
      name: "Ben Awad",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/benawad97",
          badge: getPlatformBadge("youtube", "large"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/benawad/",
          badge: getPlatformBadge("twitter", "large"),
        },
        {
          name: "GitHub",
          url: "https://github.com/benawad",
          badge: getPlatformBadge("github", "large"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/7872329?v=4",
      summary: (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          officiis nostrum recusandae perferendis incidunt minima quasi,
          voluptatibus placeat dolorum quaerat quisquam earum dignissimos quod
          odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Commodi officiis nostrum recusandae perferendis incidunt minima
          quasi, voluptatibus placeat dolorum quaerat quisquam earum dignissimos
          quod odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam?
        </p>
      ),
    },
    {
      name: "Jeff Delaney",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/c/Fireship",
          badge: getPlatformBadge("youtube", "large"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/jeffdelaney23",
          badge: getPlatformBadge("twitter", "large"),
        },
        {
          name: "Website",
          url: "https://fireship.io/",
          badge: getPlatformBadge("website", "large"),
        },
        {
          name: "GitHub",
          url: "https://github.com/codediodeio",
          badge: getPlatformBadge("github", "large"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/10172199?v=4",
      summary: (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          officiis nostrum recusandae perferendis incidunt minima quasi,
          voluptatibus placeat dolorum quaerat quisquam earum dignissimos quod
          odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Commodi officiis nostrum recusandae perferendis incidunt minima
          quasi, voluptatibus placeat dolorum quaerat quisquam earum dignissimos
          quod odio dicta quis labore inventore aperiam? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Commodi officiis nostrum recusandae
          perferendis incidunt minima quasi, voluptatibus placeat dolorum
          quaerat quisquam earum dignissimos quod odio dicta quis labore
          inventore aperiam?
        </p>
      ),
    },
  ];

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
        <Parallax>
          {heroes.map((h, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                className={
                  isEven
                    ? "flex rounded-2xl bg-base-100 p-10 shadow-lg justify-between mb-8"
                    : "flex flex-row-reverse rounded-2xl bg-base-100 p-10 shadow-lg justify-between mb-8"
                }
              >
                <div className="avatar w-24 lg:w-[256px] h-24 lg:h-[256px]">
                  <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <LazyLoadImage
                      src={h.imgUrl}
                      alt={h.name}
                      className="w-full h-full"
                      effect="opacity"
                    />
                  </div>
                </div>
                <div
                  className={
                    isEven
                      ? "flex flex-col pl-0 w-[calc(100%-128px)] lg:w-[calc(100%-288px)]"
                      : "flex flex-col pl-0 items-end w-[calc(100%-128px)] lg:w-[calc(100%-288px)]"
                  }
                >
                  <p className="text-2xl font-philosopher gradient-bottom-border flex w-max">
                    {h.name}
                  </p>
                  <br />
                  <div
                    className={
                      isEven
                        ? "flex gap-4 flex-wrap"
                        : "flex gap-4 justify-end flex-wrap"
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
            );
          })}
        </Parallax>
      </div>
    </SectionWrapper>
  );
};

export default WebDevHeroes;

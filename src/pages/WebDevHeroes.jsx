import { LazyLoadImage } from "react-lazy-load-image-component";
import Parallax from "../src/components/Parallax";
import SectionWrapper from "../src/components/SectionWrapper";
import { getPlatformBadge } from "../src/utils/getPlatformBadge";

const WebDevHeroes = () => {
  const heroes = [
    {
      name: "Theo Browne",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/c/TheoBrowne1017",
          badge: getPlatformBadge("youtube", "large", "TheoBrowne1017"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/t3dotgg",
          badge: getPlatformBadge("twitter", "large", "@t3dotgg"),
        },
        {
          name: "Twitch",
          url: "https://www.twitch.tv/theo",
          badge: getPlatformBadge("twitch", "small", "Theo"),
        },
        {
          name: "GitHub",
          url: "https://github.com/t3dotgg",
          badge: getPlatformBadge("github", "large", "t3dotgg"),
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
          one of my favorite people to listen to. He is also the creator of the
          "T3 Stack", which consists of Next.js, tRPC, Tailwind CSS, TypeScript,
          Prisma, and NextAuth.js. He helped me move to a more senior-level
          mindset.
        </p>
      ),
    },
    {
      name: "Kent C. Dodds",
      links: [
        {
          name: "Youtube",
          url: "https://youtube.com/c/KentCDodds-vids",
          badge: getPlatformBadge("youtube", "large", "Kent C. Dodds"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/kentcdodds",
          badge: getPlatformBadge("twitter", "large", "@kentcdodds"),
        },
        {
          name: "Website",
          url: "https://kentcdodds.com/",
          badge: getPlatformBadge("website", "large", "kentcdodds.com"),
        },
        {
          name: "GitHub",
          url: "https://github.com/kentcdodds",
          badge: getPlatformBadge("github", "large", "kentcdodds"),
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
          badge: getPlatformBadge("youtube", "large", "Jack Herrington"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/jherr",
          badge: getPlatformBadge("twitter", "large", "@jherr"),
        },
        {
          name: "Website",
          url: "https://www.jackherrington.com/",
          badge: getPlatformBadge("website", "large", "jackherrington.com"),
        },
        {
          name: "GitHub",
          url: "https://github.com/jherr",
          badge: getPlatformBadge("github", "large", "jherr"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/22392?v=4",
      summary: (
        <p>
          I love the way{" "}
          <span className="gradient-text font-extrabold">Jack</span> teaches
          basic to advanced front end topics. In his videos, he dives deep into
          the pros, cons, and "gotchas" of new technologies and concepts.
        </p>
      ),
    },
    {
      name: "Kevin Powell",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/kepowob",
          badge: getPlatformBadge("youtube", "large", "Kevin Powell"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/KevinJPowell",
          badge: getPlatformBadge("twitter", "large", "@KevinJPowell"),
        },
        {
          name: "Website",
          url: "https://www.kevinpowell.co/",
          badge: getPlatformBadge("website", "large", "kevinpowell.co"),
        },
        {
          name: "GitHub",
          url: "https://github.com/kevin-powell",
          badge: getPlatformBadge("github", "large", "kevin-powell"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/25749407?v=4",
      summary: (
        <p>
          <span className="gradient-text font-extrabold">Kevin Powell</span> has
          an extensive knowdledge off CSS. He covers basic to advanced topics of
          all things CSS, as well as diving into new CSS features. When it comes
          to making robust styles, Kevin is the one to go to.
        </p>
      ),
    },
    {
      name: "Jeff Delaney",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/c/Fireship",
          badge: getPlatformBadge("youtube", "large", "Fireship"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/fireship_dev",
          badge: getPlatformBadge("twitter", "large", "@fireship_dev"),
        },
        {
          name: "Website",
          url: "https://fireship.io/",
          badge: getPlatformBadge("website", "large", "fireship.io"),
        },
        {
          name: "GitHub",
          url: "https://github.com/codediodeio",
          badge: getPlatformBadge("github", "large", "codediodeio"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/10172199?v=4",
      summary: (
        <p>
          <span className="gradient-text font-extrabold">Jeff Delaney</span>,
          the person behind the popular Fireship YouTube channel, is very
          entertaining to watch. He covers web dev technology from the past,
          present and future. He has a mini series called "
          <a
            href="https://www.youtube.com/playlist?list=PL0vfts4VzfNjnYhJMfTulea5McZbQLM7G"
            target="_blank"
            className="link link-secondary"
          >
            The Code Report
          </a>
          " in which he sprinkles sarcasm into his reports about tech related
          news. There are many web dev technologies that I didn't know about
          until watching his videos.
        </p>
      ),
    },
    {
      name: "Gary Simon",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/@DesignCourse",
          badge: getPlatformBadge("youtube", "large", "DesignCourse"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/designcoursecom",
          badge: getPlatformBadge("twitter", "large", "@designcoursecom"),
        },
        {
          name: "Website",
          url: "https://designcourse.com/",
          badge: getPlatformBadge("website", "large", "designcourse.com"),
        },
        {
          name: "GitHub",
          url: "https://github.com/designcourse",
          badge: getPlatformBadge("github", "large", "designcourse"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/15989197?v=4",
      summary: (
        <p>
          <span className="gradient-text font-extrabold">Gary Simon</span>{" "}
          extends the definition of "full-stack" by pairing frontend and backend
          with UI/UX and graphic design. When I first wanted to make a
          portfolio, Gary's videos helped me realize that the first step to
          building a website isn't in the code editor, rather in a notebook or
          design software.
        </p>
      ),
    },
    {
      name: "Sam Selikoff",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/@samselikoff",
          badge: getPlatformBadge("youtube", "large", "Sam Selikoff"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/samselikoff",
          badge: getPlatformBadge("twitter", "large", "@samselikoff"),
        },
        {
          name: "Website",
          url: "https://samselikoff.com/",
          badge: getPlatformBadge("website", "large", "samselikoff.com"),
        },
        {
          name: "GitHub",
          url: "https://github.com/samselikoff",
          badge: getPlatformBadge("github", "large", "samselikoff"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/2922250?v=4",
      summary: (
        <p>
          The first time I watched one of{" "}
          <span className="gradient-text font-extrabold">Sam Selikoff's</span>{" "}
          videos, I was blown away. I loved how he explained advanced front end
          topics, and I wasn't the only one who thought so. I went to the
          comments to compliment his teaching and found that many others had
          enjoyed his teaching. I specifically enjoy his videos covering
          advanced animations with{" "}
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            className="link link-secondary"
          >
            Framer Motion
          </a>
          .
        </p>
      ),
    },
    {
      name: "Daniel Shiffman",
      links: [
        {
          name: "Youtube",
          url: "https://www.youtube.com/@TheCodingTrain",
          badge: getPlatformBadge("youtube", "large", "The Coding Train"),
        },
        {
          name: "Twitter",
          url: "https://twitter.com/thecodingtrain",
          badge: getPlatformBadge("twitter", "large", "@thecodingtrain"),
        },
        {
          name: "Website",
          url: "https://thecodingtrain.com/",
          badge: getPlatformBadge("website", "large", "thecodingtrain.com"),
        },
        {
          name: "GitHub",
          url: "https://github.com/CodingTrain",
          badge: getPlatformBadge("github", "large", "Coding Train"),
        },
      ],
      imgUrl: "https://avatars.githubusercontent.com/u/191758?v=4",
      summary: (
        <p>
          <span className="gradient-text font-extrabold">Daniel Shiffman</span>{" "}
          is the first programming-focused content creator I came across. His
          videos are excellent at bridging the gap between math and coding. He
          periodically switches from a coding editor to a whiteboard to help
          break down complex problems and find a solution.
        </p>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <p className="text-center text-lg md:text-4xl mb-12 max-w-3xl mx-auto">
        <span className="gradient-bottom-border">CSS Gurus,</span>{" "}
        <span className="gradient-bottom-border">Javascript Giants,</span> and{" "}
        <span className="gradient-bottom-border flex w-max mx-auto pt-2">
          Web Dev Content Creators.
        </span>
      </p>
      <h1 className="text-center text-lg md:text-4xl md:mb-12 max-w-3xl mx-auto uppercase">
        These are some of my{" "}
        <span className="gradient-text font-extrabold block text-6xl">
          Web Dev Heroes
        </span>
      </h1>
      <div className="mt-20 md:mt-40">
        <Parallax>
          {heroes.map((h, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={`hero-${i}`}
                className={
                  isEven
                    ? "flex flex-col md:flex-row rounded-2xl bg-base-100 p-10 shadow-lg justify-between mb-8"
                    : "flex flex-col md:flex-row-reverse rounded-2xl bg-base-100 p-10 shadow-lg justify-between mb-8"
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
                      ? "flex flex-col pl-0 w-full pt-3 md:pt-0 md:w-[calc(100%-128px)] lg:w-[calc(100%-288px)]"
                      : "flex flex-col pl-0 md:items-end w-full pt-3 md:pt-0 md:w-[calc(100%-128px)] lg:w-[calc(100%-288px)]"
                  }
                >
                  <p className="text-2xl font-philosopher gradient-bottom-border flex w-max">
                    {h.name}
                  </p>
                  <div
                    className={
                      isEven
                        ? "flex gap-1 md:gap-4 flex-wrap my-2 md:mt-10"
                        : "flex gap-1 md:gap-4 md:justify-end flex-wrap my-2 md:mt-10"
                    }
                  >
                    {h.links.map((l, i) => {
                      return (
                        <div
                          key={`badge-${l.name}-${h.name}`}
                          className="tooltip"
                          data-tip={l.name}
                        >
                          <a href={l.url} target="_blank">
                            {l.badge}
                          </a>
                        </div>
                      );
                    })}
                  </div>
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

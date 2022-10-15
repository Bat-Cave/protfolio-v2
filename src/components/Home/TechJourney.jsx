import { Computer } from "iconoir-react";
import SectionWrapper from "../SectionWrapper";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { getLanguageBadge } from "../../utils/getLanguageBadge";

const TechJourney = () => {
  //todo: get exact dates for tech journey
  //todo: clean up copy

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const stacks = [
    {
      year: "Mid 2018",
      labels: [getLanguageBadge("python", "large")],
      title: `My first <code>Hello World</code> 🎉`,
      text: (
        <p>
          The first language I ever programmed in was{" "}
          {getLanguageBadge("python", "small")}. I saw an ad for a programming
          course online and decided to give it a try. Once I got a brief view of
          the power of programming, I was hooked. At the time, I was working in
          tech support for a security company and decided to test my newfound
          knowledge and build a small program (it even included a GUI!). I built
          an app to walk tech agents through troubleshooting security equipment
          with customers. No one ever used it, but I learned a lot in the
          process.
        </p>
      ),
    },
    {
      year: "Late 2018",
      labels: [
        getLanguageBadge("html", "large"),
        getLanguageBadge("css", "large"),
        getLanguageBadge("javascript", "large"),
      ],
      title: "Is it compatible? 🤔",
      text: (
        <p>
          Towards the end of 2018, the manager of tech support asked me if I
          could build him an app to check the compatibility between different
          alarm panels and security sensors to help prevent the wrong sensors
          being sent to customers. The catch? It needed to be done with{" "}
          {getLanguageBadge("html", "small")},{" "}
          {getLanguageBadge("css", "small")}, and{" "}
          {getLanguageBadge("javascript", "small")}. I returned to the course I
          had previously started as it also taught the basics of web
          development. After about a month of coding, googling, and energy
          drinks, the <i>Compatability Guide</i> was hosted on the department's{" "}
          <i>Wordpress</i> knowledgebase.
        </p>
      ),
    },
    {
      year: "Early 2019",
      labels: [
        getLanguageBadge("html", "large"),
        getLanguageBadge("css", "large"),
        getLanguageBadge("javascript", "large"),
      ],
      title: "Troubleshooting Wizard 🧙‍♂️",
      text: (
        <p>
          In early 2019, our company was getting ready to open an additional
          support center. Managers and directors were looking for a good way to
          train new tech support agents quickly and consistently. By this time,
          I was knee deep in coding, and one day I had the idea to make a wizard
          to help agents troubleshoot every type of equipment we had. I made a
          prototype, showed it to my manager, who showed it to his boss, until
          it reached the call center director. Soon after, I was given the green
          light to start developing what is now know as the{" "}
          <i>Troubleshooting Wizard</i>. It averaged about 6,0000 page views a
          month up until February of 2022. The prototype can be found{" "}
          <a
            href="https://replit.com/@Bat_Cave/Troubleshooting-App"
            target="_blank"
            className="link link-secondary-content"
          >
            here.
          </a>
        </p>
      ),
    },
    {
      year: "Late 2019",
      labels: [
        getLanguageBadge("html", "large"),
        getLanguageBadge("css", "large"),
        getLanguageBadge("javascript", "large"),
        getLanguageBadge("react", "large"),
        getLanguageBadge("node", "large"),
        getLanguageBadge("postgresql", "large"),
      ],
      title: "Learning to hike Mt. React ⛰️",
      text: (
        <p>
          In December of 2019, I decided to leave my job to attend{" "}
          <a
            href="https://devmountain.com/"
            target="_blank"
            className="link link-secondary-content"
          >
            Dev Mountain
          </a>
          , a full-time coding bootcamp with courses in Web Development, iOS App
          Development, UX Design, and more. I attended to increase my knowledge
          of web development. It was 13 weeks of fast-paced, high-intensity
          coding with the latest standards at the front of each lesson. We
          started with {getLanguageBadge("html", "small")} and ended with{" "}
          {getLanguageBadge("react", "small")}. By the end of the bootcamp, I
          had built a full-stack application with a clean UI, Authentication,
          and Data Visualization. The app was called <i>Nutrification</i> and
          allowed keep track of the micro and macro nutrients you ate using an
          API to grab food information.
        </p>
      ),
    },
  ];

  return (
    <SectionWrapper>
      <h3 className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher text-center">
        My Tech Journey{" "}
        <Computer className="inline text-4xl lg:text-7xl text-primary-focus ml-4" />
      </h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={ref} className="flex justify-center relative mt-[-25vh]">
        <div className="w-1/3">
          {stacks.map((s, i) => {
            return (
              <div
                key={`year-${s.year}-${i}`}
                className="h-[100vh] w-full flex flex-col items-center justify-center text-4xl"
              >
                <p>{s.year}</p>
                <div className="flex gap-1 flex-wrap justify-center max-w-[250px]">
                  {s.labels.map((l, ind) => (
                    <span key={`label-${i}-${ind}`}>{l}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="sticky w-2/3 h-[100vh] flex justify-center items-center top-0 overflow-x-hidden ">
          <div className="stack w-full">
            {stacks.map((s, i) => {
              const stacksMinusOne = stacks.length - 1;
              const stackQuad = stacksMinusOne * 4;
              const indexQuad = i * 4;

              let progressArray = [0];
              for (let p = 0; p < stackQuad; p += 1) {
                progressArray.push((p + 1) / stackQuad);
              }

              let rotateKeyframes = [0];
              for (let r = 0; r < stackQuad; r += 1) {
                if (r > indexQuad + 1) {
                  rotateKeyframes.push(90);
                } else {
                  rotateKeyframes.push(0);
                }
              }

              let opacityKeyframes = [1];
              for (let o = 0; o < stackQuad; o += 1) {
                if (o > indexQuad + 1) {
                  opacityKeyframes.push(0);
                } else {
                  opacityKeyframes.push(1);
                }
              }

              let currStackScale = 1 - i * 0.05;
              let scaleKeyframes = [currStackScale];
              for (let s = 0; s < stackQuad; s += 1) {
                if (s > indexQuad - 3) {
                  scaleKeyframes.push(1);
                } else {
                  scaleKeyframes.push(currStackScale);
                }
              }

              let currStackTranslate = `${i * 2}rem`;
              let translateKeyframes = [currStackTranslate];
              for (let s = 0; s < stackQuad; s += 1) {
                if (s > indexQuad + 1) {
                  translateKeyframes.push(`-8rem`);
                } else {
                  translateKeyframes.push(currStackTranslate);
                }
              }

              const rotateX = useTransform(
                scrollYProgress,
                progressArray,
                rotateKeyframes
              );

              const opacity = useTransform(
                scrollYProgress,
                progressArray,
                opacityKeyframes
              );

              const scale = useTransform(
                scrollYProgress,
                progressArray,
                scaleKeyframes
              );

              const translateY = useTransform(
                scrollYProgress,
                progressArray,
                translateKeyframes
              );

              return (
                <m.div
                  key={`stack-year-${s.year}-${i}`}
                  style={{
                    // rotateX,
                    opacity,
                    scale,
                    translateY,
                    zIndex: stacks.length - i,
                  }}
                  className="card w-full shadow-md bg-secondary text-secondary-content text-sm md:text-base origin-top min-h-[30vh]"
                >
                  <div className="card-body p-3 py-6 md:p-6">
                    <div className="flex justify-between">
                      <h2
                        className="card-title"
                        dangerouslySetInnerHTML={{ __html: s.title }}
                      ></h2>
                      <i>{s.year}</i>
                    </div>
                    <div className="divider my-0"></div>
                    {s.text}
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechJourney;

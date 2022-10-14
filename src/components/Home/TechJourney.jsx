import { Computer } from "iconoir-react";
import SectionWrapper from "../SectionWrapper";
import { ReactComponent as Python } from "../../assets/python.svg";
import { m, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const TechJourney = () => {
  //todo: get exact dates for tech journey
  //todo: clean up copy

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const marginRight = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, -2500]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  useEffect(() => {
    console.log(marginRight);
  }, [marginRight]);

  return (
    <SectionWrapper>
      <h3 className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher flex items-center">
        My Tech Journey{" "}
        <Computer className="text-4xl lg:text-7xl text-primary-focus ml-4 -mb-7" />
      </h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center relative">
        <div className="w-1/3">
          <div
            ref={ref}
            className="h-[50vh] w-full flex flex-col items-center pt-8 text-4xl"
          >
            <p>2018</p>
            <div className="badge badge-info gap-2 h-9 text-neutral mt-2">
              <Python width={24} height={24} /> Python
            </div>
          </div>
          <div className="h-[50vh] w-full flex justify-center pt-8 text-4xl">
            2019
          </div>
          <div className="h-[50vh] w-full flex justify-center pt-8 text-4xl">
            2020
          </div>
          <div className="h-[50vh] w-full flex justify-center pt-8 text-4xl">
            2021
          </div>
          <div className="h-[50vh] w-full flex justify-center pt-8 text-4xl">
            2022
          </div>
        </div>
        <div className="sticky w-2/3 h-[50vh] flex justify-center items-start top-1/2">
          <div className="stack w-full">
            <m.div
              style={{ marginRight, opacity }}
              className="card w-full shadow-md bg-primary text-primary-content"
            >
              <div className="card-body">
                <h2 className="card-title">
                  My first <code>Hello World</code>
                </h2>
                <p>
                  I saw an ad for a programming course online that covered
                  python. I decided to give it a try. Once I got a brief view of
                  the power of programming, I was hooked. At the time, I was
                  working in tech support for a security company and decided to
                  test my newfound knowledge and build a small program. I build
                  an app to walk users through troubleshooting security
                  equipment. No one ever used it, but I learned a lot in the
                  process.
                </p>
                <p>{scrollYProgress.current}</p>
              </div>
            </m.div>
            <div className="card shadow bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 2</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Notification 3</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechJourney;

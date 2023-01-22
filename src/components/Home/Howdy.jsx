import { useState } from "react";
import { m } from "framer-motion";
import { JournalPage, PeaceHand } from "iconoir-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useKeenSlider } from "keen-slider/react";
import Card from "../Card";
import SectionWrapper from "../SectionWrapper";
import "keen-slider/keen-slider.min.css";

import ricoAsCat1 from "../../assets/rico-as-cat-1.webp";
import ricoAsCat2 from "../../assets/rico-as-cat-2.webp";
import ricoAsCat3 from "../../assets/rico-as-cat-3.webp";
import ricoAsCat4 from "../../assets/rico-as-cat-4.webp";

const Howdy = () => {
  const [details, setDetails] = useState(null);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      detailsChanged(s) {
        setDetails(s.track.details);
      },
      initial: 2,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  function scaleStyle(idx) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  const images = [
    { src: ricoAsCat4, alt: "cat with drawn on glasses and hat 1" },
    { src: ricoAsCat1, alt: "cat with drawn on glasses and hat 1" },
    { src: ricoAsCat2, alt: "cat with drawn on glasses and hat 1" },
    { src: ricoAsCat3, alt: "cat with drawn on glasses and hat 1" },
  ];

  return (
    <SectionWrapper>
      <div className="bg-base-300">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="container px-0 sm:px-5 py-24 mx-auto flex justify-center flex-wrap items-center"
        >
          <div
            className="group tooltip tooltip-secondary w-full lg:w-1/2 mb-10 lg:mb-0 rounded-lg max-h-[320px] max-w-[320px]"
            data-tip="↓ not actually me"
          >
            <div ref={sliderRef} className="keen-slider zoom-out">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide zoom-out__slide p-4 relative"
                >
                  <div
                    style={scaleStyle(idx)}
                    className="absolute top-4 left-4 inset-0 bg-gradient-to-r from-primary to-secondary blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-[125px] h-[calc(320px-2rem)] w-[calc(320px-2rem)] max-h-[320px] max-w-[320px]"
                  ></div>
                  <div
                    style={scaleStyle(idx)}
                    className="relative mask mask-squircle h-full w-full max-h-[320px] max-w-[320px]"
                  >
                    <LazyLoadImage
                      alt={image.alt}
                      className="object-cover object-center h-full w-full"
                      src={image.src}
                      effect="opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center flex-wrap lg:w-1/2 lg:text-left text-center ml-0 lg:ml-4">
            <h2 className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher flex items-center">
              Howdy{" "}
              <PeaceHand className="text-4xl lg:text-7xl text-primary-focus" />
            </h2>
            <Card>
              <h2 className="card-title mb-4">My name is Rico</h2>
              <p>
                I am a front-end focused web developer with a passion for
                creating.
              </p>
              <div className="card-actions justify-end mt-4">
                <a href="/resume" className="btn btn-info w-full sm:w-auto">
                  <JournalPage className="mr-2" width={24} height={24} /> My
                  Resume
                </a>
              </div>
            </Card>
          </div>
        </m.div>
      </div>
    </SectionWrapper>
  );
};

export default Howdy;

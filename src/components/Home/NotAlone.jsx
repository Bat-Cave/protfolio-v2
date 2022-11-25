import { Group } from "iconoir-react";
import SectionWrapper from "../SectionWrapper";

const NotAlone = () => {
  return (
    <SectionWrapper>
      <p className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher text-center">
        And I Wasn't Alone{" "}
        <Group className="inline text-4xl lg:text-7xl text-primary-focus ml-4" />
      </p>
      <br />
      <br />
      <br />
      <p className="card w-full shadow-md bg-neutral text-neutral-content text-sm md:text-base p-12">
        From my first program to now, I've had help along the way. We're blessed
        to live in a time when there is so much information at our fingertips.
        I've grown as a developer with the help of many websites and content
        creators.
      </p>
      //todo add profile bubbles of website and content creators
    </SectionWrapper>
  );
};

export default NotAlone;

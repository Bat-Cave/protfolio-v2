import { Computer } from "iconoir-react";
import SectionWrapper from "../SectionWrapper";

const TechJourney = () => {
  //todo: get exact dates for tech journey
  //todo: clean up copy

  return (
    <SectionWrapper>
      <h3 className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher flex items-center">
        My Tech Journey{" "}
        <Computer className="text-4xl lg:text-7xl text-primary-focus ml-4 -mb-7" />
      </h3>
      <div className="flex justify-center">
        <ul className="steps steps-vertical">
          <li className="step step-primary h-[100px]">
            2018: My first time writing code
          </li>
          <li className="step step-primary h-[100px]">Choose plan</li>
          <li className="step h-[100px]">Purchase</li>
          <li className="step h-[100px]">Receive Product</li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default TechJourney;

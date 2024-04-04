import SectionWrapper from "../../components/SectionWrapper";

//todo: go through coding folder and fild the projects you've made
//todo: add necessary projects to github for easier referencing

const projects = [
  { name: "Dev Bros HQ", url: "https://devbroshq.com" },
  { name: "Monkeyspout", url: "https://www.monkeyspout.com" },
  {
    name: "The Mindful Body Massage",
    url: "https://www.themindfulbodymassage.com",
  },
];

const Page = () => {
  return (
    <SectionWrapper>
      <h1 className="text-center text-4xl mb-12">
        <span className="gradient-text font-extrabold">Coming Soon</span>{" "}
      </h1>
      <p className="text-center">This page is in progress... 👷</p>
    </SectionWrapper>
  );
};

export { Page };

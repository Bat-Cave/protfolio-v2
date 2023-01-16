import GitHubCalendar from "react-github-calendar";
import SectionWrapper from "../SectionWrapper";

const GithubGraph = () => {
  return (
    <SectionWrapper>
      <div className="bg-success-content flex justify-center">
        <GitHubCalendar username="bat-cave" />
      </div>
    </SectionWrapper>
  );
};

export default GithubGraph;

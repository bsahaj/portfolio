import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { JOBS, Job } from "./constants";

const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      <Reveal>
        <h1 className="text-7xl text-neutral-400">Experience</h1>
      </Reveal>

      <div className="mt-12 w-2/3">
        {JOBS.map((job: Job, index) => (
          <div className="mt-4" key={index}>
            <Card
              company={job.company}
              title={job.title}
              duties={job.duties}
              dates={job.dates}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

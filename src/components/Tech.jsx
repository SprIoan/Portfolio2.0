import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import "./Tech.css";

const Tech = () => {
  return (
    <div
      className="flex flex-row flex-wrap 
    justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28 mt-10" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p
            className="text-center mt-2 text-base 
          font-sm capitalize tracking-wide p-3 glass"
          >
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

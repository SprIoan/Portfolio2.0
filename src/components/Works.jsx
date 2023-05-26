import { motion } from "framer-motion";

import { styles } from "../style";
import { github, eye } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Card.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  preview_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id={`noise${index}`}>
            <feTurbulence
              baseFrequency="0.7,0.8"
              seed={0}
              type="fractalNoise"
              result="static"
            >
              <animate
                attributeName="seed"
                values="0;100"
                dur="800ms"
                repeatCount={1}
                begin={`card${index}.mouseenter`}
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="static">
              <animate
                attributeName="scale"
                values="0;40;0"
                dur="800ms"
                repeatCount={1}
                begin={`card${index}.mouseenter`}
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>

      <div className="card" id={`card${index}`}>
        <img src={image} alt="Project Image" />
        <div className="icons git">
          <a href={source_code_link} target="_blank">
            <img src={github} />
          </a>
        </div>
        <div className="icons eye">
          <a href={preview_link} target="_blank">
            <img src={eye} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="flex justify-center items-center">
        <div className="office-card">
          <div className="card-content">
            <h3 className="card-title">I know exactly what I'm doing</h3>
            <h4 className="card-subtitle">
              <span className="card-subtitle-word">
                But in a much more real sense, I have no idea what I'm doing.
              </span>
            </h4>
          </div>
        </div>
        <div className="office-card">
          <div className="card-content">
            <h3 className="card-title">I’m not superstitious</h3>
            <h4 className="card-subtitle">
              <span className="card-subtitle-word">
                But I am a little stitious.
              </span>
            </h4>
          </div>
        </div>
        <div className="office-card">
          <div className="card-content">
            <h3 className="card-title">Am I a hero?</h3>
            <h4 className="card-subtitle">
              <span className="card-subtitle-word">
                I really can't say, but yes.
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center	items-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");

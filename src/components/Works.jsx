import { motion } from "framer-motion";

import { styles } from "../style";
import { github, eye } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Card.css";

const ProjectCard = ({
  index,
  key,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div key={key} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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
        <img src={image} alt="Neon sign in woods" />
        <div className="icons git">
          <a href={source_code_link} target="_blank">
            <img src={github} />
          </a>
        </div>
        <div className="icons eye">
          <a href="" target="_blank">
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

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]
          max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

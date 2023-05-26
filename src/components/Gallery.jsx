import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import {
  slide,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
} from "../assets";

import "./Gallery.css";

const Gallery = () => {
  const [mouseDownAt, setMouseDownAt] = useState(500);
  const [lastPercentage, setLastPercentage] = useState(-85);
  const [mouseDown, setMouseDown] = useState(false);

  const handleMove = (event) => {
    if (event.type === "mousedown") {
      setMouseDownAt(event.clientX);
      setMouseDown(true);
    }
    if (event.type === "mouseup") {
      setMouseDown(false);
    }
  };

  useEffect(() => {
    const track = document.getElementById("image-track");

    const handleMouseMove = (event) => {
      if (mouseDown) {
        const mouseDelta = parseFloat(event.clientX) - parseFloat(mouseDownAt),
          maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = lastPercentage + percentage,
          nextPercentage = Math.max(
            Math.min(nextPercentageUnconstrained, 0),
            -100
          );
        setLastPercentage(nextPercentage);

        track.animate(
          {
            transform: `translate(${-600 - 7 * nextPercentage}%, -50%)`,
          },
          { duration: 2200, fill: "forwards" }
        );

        for (const image of track.getElementsByClassName("image")) {
          image.animate(
            {
              objectPosition: `${100 + nextPercentage}% center`,
            },
            { duration: 1800, fill: "forwards" }
          );
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseDown, mouseDownAt]);

  return (
    <div className="gallery">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Collection</p>
        <h2 className={styles.sectionHeadText}>Gallery</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]
          max-w-3xl leading-[30px]"
        >
          Beatiful Places i have visited throughout my career.
          <span className="relative ml-2">
            Slide to discover
            <img
              src={slide}
              className="bg-[#050816] p-1 w-10 h-10 absolute top-[-5px] right-[-55px] "
            />
          </span>
        </motion.p>
      </div>
      <div className="back" onMouseDown={handleMove} onMouseUp={handleMove}>
        <div id="image-track">
          <img className="image" src={pic1} draggable="false" />
          <img className="image" src={pic2} draggable="false" />
          <img className="image" src={pic3} draggable="false" />
          <img className="image" src={pic4} draggable="false" />
          <img className="image" src={pic5} draggable="false" />
          <img className="image" src={pic6} draggable="false" />
          <img className="image" src={pic7} draggable="false" />
          <img className="image" src={pic8} draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Gallery, "gallery");

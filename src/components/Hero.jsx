import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  
  const colors = ['#7058A7', '#F9EBFF', '#00C9A3', '#C5FCEE', '#FFFADE', '#30899E', '#E8D5B5' ]

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;
    
    document.querySelector("#nametag").onmouseover = event => {  
      let iteration = 0;       
      
      clearInterval(interval);
      
      interval = setInterval(() => {

        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);

        }
        
        iteration += 1 / 3;
      }, 30);
      document.querySelector('#nametag').style.color = colors[Math.floor(Math.random() * 7)];

    }
  }, [])
  
  return (
    <section className="relative w-full
    h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0
      top-[100px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-10">
          <h1 id="nametag" data-value="Hi, I'm Spiros" className={`${styles.heroHeadText} text-hero cursor-default glow`}>Hi, I'm Spiros</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 glow cursor-default`}>
            A Software Engineer with  <br className="sm:block hidden" /> interest in developing web <br  className="sm:block hidden" /> applications, user interfaces <br  className="sm:block hidden"/> and 3D visuals.
          </p>
        </div>
      </div>  
       <ComputersCanvas />

       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

            
          </div>
        </a>
       </div>
    </section>
  )
}

export default Hero
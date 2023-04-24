import React from "react";
import { motion } from "framer-motion";
import { FaPython } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { TbBrandCpp } from 'react-icons/tb'
import { GiStack } from 'react-icons/gi';
import { SiThealgorithms } from 'react-icons/si';


const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },

    five: {
      opacity: 0,
      x: "-100%",
    },

    six: {
      opacity: 0,
      y: "100%",
    },
  };

  return (
    <div id="skills">
      <h2>Technical Skills</h2>
      <section>
        <motion.div
          className="skill1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
         <GiStack />
          <span>FULL STACK</span> 
        </motion.div>
        <motion.div
          className="skill2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <FaPython/>
          <span>PYTHON</span>
        </motion.div>
        <motion.div
          className="skill3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <GrMysql />
          <span>MYSQL</span>
        </motion.div>
        <motion.div
          className="skill4"
          whileInView={animations.whileInView}
          initial={animations.four}
          
        >
          <SiThealgorithms />
          <span>DATA STRUCTURE AND ALGORITHMS</span>
        </motion.div>
        <motion.div
          className="skill5"
          whileInView={animations.whileInView}
          initial={animations.five}
        >
          <TbBrandCpp />
          <span>C++</span>
        </motion.div>
        <motion.div
          className="skill6"
          whileInView={animations.whileInView}
          initial={animations.six}
        >
          <DiJava />
          <span>JAVA</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;

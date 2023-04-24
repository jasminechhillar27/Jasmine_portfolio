import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  
  const animationProjectsCount = () => {
    animate(0, 25, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Jasmine Chhillar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Student", "An Engineer", "A Developer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:jasminechhillar999@gmail.com">Email</a>
            <a href="#project">
              Projects <BsArrowUpRight />
            </a>
          </div>


          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    25
                  </motion.span>
                )}
              </p>
              <span>Projects Completed</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>jasminechhillar999@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Jasmine" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

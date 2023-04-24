import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {SiGeeksforgeeks, SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2023/04/21/09/03/09-03-46-977_1280.jpg"       
          alt="Jasmine"
        />

        <h2>Jasmine Chhillar</h2>
        <p>Me & My SMILE, both are too Special for ME.....</p>
      </div>

      <aside>
        <h2>My Accounts</h2>

        <article>
          <a href="https://www.linkedin.com/in/jasmine-chhillar-718aa51bb/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://auth.geeksforgeeks.org/user/jasminechhillar999/" target={"blank"}>
            <SiGeeksforgeeks />
          </a>
          <a href="https://github.com/jasminechhillar27/" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://leetcode.com/jasmine_27/" target={"blank"}>
            <SiLeetcode />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

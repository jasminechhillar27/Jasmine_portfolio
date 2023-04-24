import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  
  return (
    <div id="certificates">
      <h2>Certificates</h2>

      <section>
       
        <TestimonialCard
          title={"Poornima Hackathon"}
          description={"Organized by PIET AICTE IDEA LAB & PIET, Jaipur."}
          date={"March 03, 2023"}
        />
      
        <TestimonialCard
          title={"Core Java Internship"}
          description={
            "Done it from Aaron Softech Pvt. Ltd. Company and made a project on 'Attendance Management System'. "
          }
          date={"June 27 to August 8, 2023"}
        />
        
        <TestimonialCard
          title={"Microsoft Certified II"}
          description={"Has successfully cleared the exam on the Topic: 'Azure Fundamental'. "}
          date={"February 22, 2023"}
        />
       
        <TestimonialCard
          title={"Advent of Cyber 2022"}
          description={"Completed the Rooms on the basic Cyber Security knowledge and experiences on TryHackMe platform."}
          date={"December 25, 2022"}
        />
        
        <TestimonialCard
          title={"Microsoft Certified I"}
          description={"Has successfully cleared the exam on the Topic: 'Azure AI Fundamental'. "}
          date={"March 10, 2022"}
        />
        
        <TestimonialCard
          title={"Technovation"}
          description={"Presented a paper on 'Face Recognization using Deep Learning' organized by IEEE."}
          date={"January 22, 2022"}
        />
       
        <TestimonialCard
          title={"Crash Course on Python"}
          description={"Has successfully completed the crash course on Python on Coursera."}
          date={"October 01, 2021"}
        />
       
        <TestimonialCard
          title={"Internship-Aashman Foundation"}
          description={"I was assosiated with Aashman Foundation on Online Event Management Group."}
          date={"August 21 to November 21, 2021"}
        />
       
        <TestimonialCard
          title={"Mission Talent Trail"}
          description={"Organized an Online Event in the Covid pendamic sitation with more 150+ users on Microsoft Team."}
          date={"May 30, 2021"}
        />
        
        
      </section>
    </div>
  );
};

const TestimonialCard = ({ title, description, date }) => (
  <article>
    <h4><i>{title}</i></h4>
    <p>{description}</p>
    <h5><i>{date}</i></h5>
  </article>
);

export default Certificates;

import React from "react";
import "./Aboutpage.css";
import profile_img from "/official-image.jpeg";
import Typewriter from "typewriter-effect";

const Aboutpage = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" style={{ borderRadius: "50%" }} />
      <h1>I'm Jamiu Olawumi based in Lagos, Nigeria</h1>
      <div className="about-text">
        I'm a
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Web Developer", "Freelancer"],
            autoStart: true,
            loop: true,
          }}
        />
        with 2 years of experience in the Bulb Africa
      </div>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1c27lQLv6pn9pv1JKA1riWjI4xCNv3m9o/view?usp=drivesdk"
            target="blank"
            className="resume"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;

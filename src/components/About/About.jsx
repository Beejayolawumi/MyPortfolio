import "./About.css";
import theme_pattern from "/imageFolder/theme_pattern.svg";
import profile_img from "/official-image.jpeg";
import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" style={{ borderRadius: "50%" }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <Typewriter
              options={{
                strings: [
                  " I am an experienced Frontend Developer with over two years of professional creativity and technical expertise in the field. Throughout my career, I have  the priviledge of collaborating with prestigious organizations, contirbuted to their growth and success.  ",
                ],

                autoStart: true,
                loop: true,
              }}
            />

            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Redux Toolkit</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

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
                  " Hi, I am a dedicated and passionate Frontend Developer with a knack for creating visually stunning and user-friendly web applications. With a strong foundation in web technologies and a commitment to continuous learning, I strive to deliver high-quality solutions that enhance user experience and drive business success.  ",
                ],

                autoStart: true,
                loop: true,
              }}
            />

            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project. I am deeply committed to creating seamless
              and engaging user experiences through meticulous attention to
              detail, innovative problem-solving, and continuous learning. From
              the early stages of project planning to the final deployment, I
              immerse myself in every aspect of the development process. I take
              pride in writing clean, efficient, and maintainable code, and I am
              always looking for ways to improve the performance and usability
              of the applications I work on.
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

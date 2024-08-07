import mail_icon from "/imageFolder/mail_icon.svg";
import call_icon from "/imageFolder/call_icon.svg";
import location_icon from "/imageFolder/location_icon.svg";
import "../Contact/Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1a7580f3-2d51-4bb8-b64a-bf5778a3642c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(" your Email was Successfully sent ", res);
      event.target.reset();
    }
  };
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>

          <p>
            I am excited about the opportunity to work on challenging projects
            that push the boundaries of web development. Let's connect and
            create something amazing together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>beejayolawumi2020@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+2347037985159</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="8"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

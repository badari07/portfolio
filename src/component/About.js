import React from "react";
import image from "../images/portrait.jpg";
import Icons from "./Icons";

const About = () => (
  <>
    <main id="about">
      <h1 className="lg-heading">
        About
        <span className="text-secondary"> Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      <div className="about-info">
        <img src={image} alt="John Doe" className="bio-image" />

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            A self-motivated professional with knowledge and proficiency in
            JavaScript, React, modern JS libraries, CSS, semantic HTML, ES 6 and
            mobile responsive web development, as well as strong skills and
            ability in writing clean and efficient code, seeks the position of
            Front-End Web Developer.
          </p>
        </div>

        <div className="job job-1">
          <h3>Dev-Connector</h3>
          <h6>Full Stack Developer</h6>
          <p>
            The app which help the developer’s to connect the other developer to
            interact with each other. It’s developed useing MERNstack
          </p>
        </div>

        <div className="job job-2">
          <h3>Expensify-Application</h3>
          <h6>Front End Developer</h6>
          <p>
            It is simple web app and it will be very usefull for any users who
            wants to note his expenses and track his expenses. The user have to
            login with Google and input there expenses
          </p>
        </div>

        <div className="job job-3">
          <h3>Webworks</h3>
          <h6>Site performance and SEO</h6>
          <p>
            Performed technical analysis to improve SEO and boost performance.
            Implemented Server Side Rendering for marketing website to improve
            user experience and SEO rank. Created Static site to generate SEO
            pages using Gatsby framework.
          </p>
        </div>
      </div>
      <Icons />
    </main>

    <footer id="main-footer">Copyright &copy; 2020</footer>
  </>
);

export default About;

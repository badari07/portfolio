import React from "react";
import p1 from "../images/project1.jpg";
import p2 from "../images/project2.jpg";
import p3 from "../images/project3.jpg";
import p4 from "../images/project4.jpg";
import p5 from "../images/project5.jpg";
import Icons from "./Icons";

const Work = () => (
  <>
    <main id="work">
      <h1 className="lg-heading">
        My <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">Check out some of my projects...</h2>
      <div className="projects">
        <div className="item">
          <a href="https://clientpanel-firebase.firebaseapp.com">
            <img src={p1} alt="Project" />
          </a>
          <a
            href="https://clientpanel-firebase.firebaseapp.com"
            className="btn-light"
          >
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a
            href="https://github.com/badari07/clientpanel-react"
            className="btn-dark"
          >
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="https://agile-everglades-34962.herokuapp.com/">
            <img src={p2} alt="Project" />
          </a>
          <a
            href="https://agile-everglades-34962.herokuapp.com/"
            className="btn-light"
          >
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a
            href="https://github.com/badari07/dev_connector"
            className="btn-dark"
          >
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="https://badari07.github.io/foodweb/">
            <img src={p3} alt="Project" />
          </a>
          <a href="https://badari07.github.io/foodweb/" className="btn-light">
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a href="https://github.com/badari07/foodweb" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="https://react-expensify-apps.herokuapp.com/">
            <img src={p4} alt="Project" />
          </a>
          <a
            href="https://react-expensify-apps.herokuapp.com/"
            className="btn-light"
          >
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a
            href="https://github.com/badari07/react_expensify_app"
            className="btn-dark"
          >
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="https://jam-inro-todo.netlify.app/">
            <img src={p5} alt="Project" />
          </a>
          <a href="https://jam-inro-todo.netlify.app/" className="btn-light">
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a
            href="https://github.com/badari07/jam-intro-todo"
            className="btn-dark"
          >
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </div>
      <Icons />
    </main>

    <footer id="main-footer">Copyright &copy; 2020</footer>
  </>
);

export default Work;

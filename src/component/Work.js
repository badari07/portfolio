import React from "react";
import p1 from "../images/project1.jpg";
import p2 from "../images/project2.jpg";
import p3 from "../images/project3.jpg";
import p4 from "../images/project4.jpg";
import p5 from "../images/project5.jpg";

const Work = () => (
  <>
    <main id="work">
      <h1 className="lg-heading">
        My <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">Check out some of my projects...</h2>
      <div className="projects">
        <div className="item">
          <a href="#!">
            <img src={p1} alt="Project" />
          </a>
          <a href="#" className="btn-light">
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a href="#" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={p2} alt="Project" />
          </a>
          <a href="#" className="btn-light">
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a href="#" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={p3} alt="Project" />
          </a>
          <a href="#" className="btn-light">
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a href="#" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={p4} alt="Project" />
          </a>
          <a href="#" className="btn-light">
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a href="#" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img src={p5} alt="Project" />
          </a>
          <a href="#" className="btn-light">
            {" "}
            <i className="fas fa-eye"></i> Project{" "}
          </a>
          <a href="#" className="btn-dark">
            <i className="fab fa-github"></i> Github
          </a>
        </div>
      </div>
    </main>

    <footer id="main-footer">Copyright &copy; 2020</footer>
  </>
);

export default Work;

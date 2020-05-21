import React from "react";
import Icons from "./Icons";
const Contact = () => (
  <>
    <main id="contact">
      <h1 className="lg-heading">
        Contact <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">This is how you can reach me...</h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">Email: </span> badari0793@gmail.com
        </div>
        <div>
          <span className="text-secondary">Phone: </span> (+91) 7411137175
        </div>
        <div>
          <span className="text-secondary">Address: </span> Bangalore, 560097
        </div>
      </div>
      <Icons />
    </main>

    <footer id="main-footer">Copyright &copy; 2020</footer>
  </>
);

export default Contact;

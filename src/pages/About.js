import React from "react";

const About = () => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img
        className="card-img-top"
        src="https://ecotechnica.com.ua/images/-foto6/029-2.jpg"
        alt=""
      />
      <div class="card-body">
        <h5 className="card-title">Электросамокат</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default About;

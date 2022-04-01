import React from "react";

export default function Skills() {
  return (
    <section id="skills-sect">
      <h3>Skills</h3>
      <div className="skills">
        <div className="skill-row">
          <div className="skill-container">
            <img className="icon" src="/images/html-icon.png"></img>
            <p>HTML</p>
          </div>
          <div className="skill-container">
            <img className="icon" src="/images/css-icon.png"></img>
            <p>CSS</p>
          </div>
          <div className="skill-container">
            <img className="icon" src="/images/js-icon.png"></img>
            <p>Javascript</p>
          </div>
          <div className="skill-container">
            <img className="icon" src="/images/node-icon.png"></img>
            <p>Node JS</p>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill-container">
            <img className="icon" src="/images/react-icon.png"></img>
            <p>React</p>
          </div>
          <div className="skill-container">
            <img className="icon" src="/images/redux-icon.png"></img>
            <p>Redux</p>
          </div>
          <div className="skill-container">
            <img className="icon" src="/images/postgresql-icon.png"></img>
            <p>PostgreSQL</p>
          </div>
          <div className="skill-container">
            <img className="icon" src="/images/python-icon.png"></img>
            <p>Python</p>
          </div>
        </div>
      </div>
    </section>
  );
}

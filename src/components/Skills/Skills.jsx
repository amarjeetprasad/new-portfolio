import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skill_container" id="skill">
      <div className="skill_header">
        <h3>My Skills</h3>
      </div>
      <div className="skill_body">
        <div className="first">
          <h3>My creative skills and expriences.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            doloremque quae quos libero quibusdam consequuntur qui repellendus
            id sapiente, expedita, ut aliquid voluptatum necessitatibus amet
            neque ipsa distinctio delectus vitae.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Iure doloremque quae quos libero
            quibusdam consequuntur qui repellendus id sapiente, expedita, ut
            aliquid voluptatum necessitatibus amet neque ipsa distinctio
            delectus vitae.
          </p>
          <a href="">Read more</a>
        </div>
        <div className="second">
          <div className="chart_bars">
            <div className="cont">
              <div className="per">95%</div>
              <div className="bar"></div>
              <div className="text">C/C++</div>
            </div>
            <div className="cont">
              <div className="per">90%</div>
              <div className="bar"></div>
              <div className="text">html</div>
            </div>
            <div className="cont">
              <div className="per">80%</div>
              <div className="bar"></div>
              <div className="text">JS</div>
            </div>
            <div className="cont">
              <div className="per">80%</div>
              <div className="bar"></div>
              <div className="text">Python</div>
            </div>
            <div className="cont">
              <div className="per">80%</div>
              <div className="bar"></div>
              <div className="text">DS</div>
            </div>
            <div className="cont">
              <div className="per">70%</div>
              <div className="bar"></div>
              <div className="text">Algo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;

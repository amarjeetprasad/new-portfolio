import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about_container" id="about">
      <div className="about_header">
        <h3>About Me</h3>
      </div>
      <div className="about_body">
        <img
          src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
          alt="me"
        />
        <div className="second">
          <h3>I'm Amarjeet Prasad</h3>
          <h3>
            A{" "}
            <span data-text="FullStackWebDeveloper...">
              FullStackWebDeveloper...
            </span>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim a
            soluta, debitis numquam commodi magni ut animi provident, doloribus
            culpa, voluptatibus facere distinctio sint quidem! Natus
            exercitationem sapiente sint quas. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Assumenda rem explicabo culpa nam
            dicta ipsam earum repudiandae? Recusandae velit fugit expedita totam
            tenetur obcaecati a enim natus? Nesciunt, laborum veritatis?
          </p>
          <a href="">Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "./Contact.css";
import { BsFillPersonFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
function Contact() {
  return (
    <div className="contact_container" id="contact">
      <div className="contact_header">
        <h3>Contact Me</h3>
      </div>
      <div className="contact_body">
        <div className="left">
          <h3>Get in touch</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            eaque? Cumque impedit expedita non doloremque debitis, vitae nisi ex
            minus quibusdam harum ut adipisci id ipsam quos provident amet eos.
          </p>
          <div className="mini_text">
            <BsFillPersonFill className="icon" />
            <h4>
              Name
              <br />
              <span> Amarjeet Prasad </span>
            </h4>
          </div>
          <div className="mini_text">
            <ImLocation className="icon" />
            <h4>
              Address
              <br />
              <span>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                molestiae?{" "}
              </span>
            </h4>
          </div>
          <div className="mini_text">
            <FaPhoneAlt className="icon" />
            <h4>
              Mobile
              <br />
              <span>+90-7856130002</span>
            </h4>
          </div>
          <div className="mini_text">
            <GrMail className="icon" />
            <h4>
              Email
              <br />
              <span> amarjeetprasad221999@gmail.com</span>
            </h4>
          </div>
        </div>
        <div className="right">
          <form
            action="mailto:amarjeetprasad221999@gmail.com"
            method="POST"
            enctype="text/plain"
            name="EmailForm"
          >
            <h3>Message me</h3>
            <input type="text" name="name" id="" placeholder="Name..." />
            <input type="text" name="email" id="" placeholder="Email..." />
            <input type="text" name="subject" id="" placeholder="Subject..." />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;

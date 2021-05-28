import react, { useState, useEffect } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
function Header() {
  const [Style, setStyle] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setStyle({ backgroundColor: "#c70039", boxShadow: "0 2px 5px #fff" });
        setColor({ color: "#fff" });
      } else {
        setStyle({ backgroundColor: "transparent" });
        setColor({ color: "#c70039" });
      }
    };
  }, []);

  const [navDisplay, setNavDisplay] = useState(false);
  const [Right, setRight] = useState({ right: "-100%" });

  function ClickHandler() {
    if (navDisplay) {
      setNavDisplay(false);
      setRight({ right: "-100%" });
    } else {
      setNavDisplay(true);
      setRight({ right: "0px" });
    }
  }

  return (
    <div className="header-container" style={Style}>
      <div className="header_title">
        Amar_<span style={color}>Por</span>
      </div>
      {!navDisplay ? (
        <FaBars class="nav_icon_btn" onClick={ClickHandler} />
      ) : (
        <FaTimes class="nav_icon_btn" onClick={ClickHandler} />
      )}
      <ul className="navs" style={Right}>
        <li onClick={ClickHandler}>
          <a href="#home">Home</a>
        </li>
        <li onClick={ClickHandler}>
          <a href="#about">About</a>
        </li>
        <li onClick={ClickHandler}>
          <a href="#services">Services</a>
        </li>
        <li onClick={ClickHandler}>
          <a href="#skill">Skills</a>
        </li>
        <li onClick={ClickHandler}>
          <a href="#team">Teams</a>
        </li>
        <li onClick={ClickHandler}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;

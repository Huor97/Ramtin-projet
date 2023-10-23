import { useEffect, useState } from "react";
import Logo from "../images/Logo.png";
import ScrollDown from "../images/Scrolldown.png";
import Arrow from "../images/Arrow.png";
import About from "../images/REAL-about.png";
import Contacts from "../images/Contacts.png";

import "./AboutUs.css";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs({ normalization }) {
  const initialLeft = 40;
  const [vesible, setVesible] = useState(false);
  const [fixedConstact, setFixedContact] = useState(false);
  const [vesibleArrow, setVesibleArrow] = useState(false);
  const [fixedLogo, setFixedLogo] = useState(false);
  const [currentLeft, setCurrentLeft] = useState(initialLeft);

  useEffect(() => {
    const handleScroll = () => {
      console.log("contact icone ==> ", normalization);

      window.scrollY > 300 ? setFixedLogo(true) : setFixedLogo(false);
      window.scrollY > 300 ? setVesibleArrow(true) : setVesibleArrow(false);
      normalization > 0.282 ? setFixedContact(true) : setFixedContact(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [normalization]);

  useEffect(() => {
    const handleScroll = () => {
      if (fixedLogo) {
        if (currentLeft > 4) {
          setCurrentLeft((prevLeft) => prevLeft - 1);
        }
      } else if (currentLeft < initialLeft) {
        setCurrentLeft((prevLeft) => Math.min(prevLeft + 1, initialLeft));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedLogo, currentLeft, initialLeft]);

  useEffect(() => {
    const vesibledScroll = () => {
      window.scrollY > 200 ? setVesible(true) : setVesible(false);
    };

    window.addEventListener("scroll", vesibledScroll);

    return () => {
      window.removeEventListener("scroll", vesibledScroll);
    };
  }, []);

  return (
    <div className="container-aboutUs">
      <div className={`langue ${vesible && "hedden-langue"}`}>
        <button className="langue-change">
          {/*  */}
          عربی
        </button>
      </div>
      <div
        className={`${fixedLogo ? "fixed-logo" : "logo"} `}
        style={{
          left: `${currentLeft}vw`
        }}
      >
        <img src={Logo} alt="logo de site" />
      </div>
      {/* <h1 className={` ${fixedLogo ? "title-fixed-logo" : "title-aboutUs"}  `}>
        VERSAL LOGO
      </h1>
      <h2 className={` ${fixedLogo ? "subtitle-fixed-logo" : "subtitle"} `}>
        globallyexporting
      </h2> */}
      <div
        className={` ${vesibleArrow ? "arrow-hidden" : "container-scrolling"}`}
      >
        <div className={`container-arrow`}>
          <img src={Arrow} alt="arrow" />
        </div>
        <div className="container-scrolldown">
          <img src={ScrollDown} alt="scroll down" />
        </div>
      </div>

      <div className="about-us">
        <div className="about-us-description">
          <img src={About} alt="about" />
          {/* <h2>About Us:</h2>
          <p>
            asperiores ea sunt aut vel perferendis repellendus porro unde quod
            nam, ab repudiandae. Voluptate suscipit fugiat consequuntur ut
            quibusdam veniam ad, rem tempore labore ipsam aperiam fugit
            deserunt, ex, vitae dicta illo. Eos debitis itaque quae doloribus
            possimus eum fugit repellat molestiae, nostrum minus. Ea consequatur
            rem quam nostrum, quis id sunt doloremque ratione quidem rerum
            voluptas tenetur at iure eius delectus illo nam veritatis sint
            beatae laboriosam natus ipsam deleniti mollitia. Ratione saepe
            aliquid facilis magnam labore rem maiores ex error incidunt
            aspernatur qui, aut nemo voluptatem ducimus ipsum! Molestiae vel
            cumque doloremque, architecto velit nihil libero voluptate adipisci
            inventore ex eum sapiente autem voluptatibus beatae neque nisi porro
          </p> */}
        </div>
        <div
          className={`${fixedConstact ? "fixed-contact" : "about-us-contact"}`}
        >
          <img src={Contacts} alt="contacts" />
          {/* <h2>contact US:</h2>
          <strong>contact@versa.qa</strong>
          <strong>(+974)777 90 663</strong> */}
        </div>
      </div>
    </div>
  );
}

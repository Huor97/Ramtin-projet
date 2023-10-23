import React, { useEffect, useState } from "react";
import "./Contact.scss"; // Assurez-vous de créer ce fichier de style pour les styles CSS.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Form = ({ normalization }) => {
  const [visibled1, setVisibled1] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });

  console.log("normal ==> contact:", normalization);

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -400
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };

  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 400
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClickIcon = (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement au conteneur parent
    toggleForm();
  };

  const handleClickInsideForm = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de validation du formulaire ici
    // Réinitialiser le formulaire après la soumission
    setFormData({
      user_name: "",
      user_email: "",
      subject: "",
      message: ""
    });
    setIsExpanded(false);
  };

  useEffect(() => {
    const vesibledScroll = () => {
      // window.scrollY > 7500 ? setIsExpanded(true) : setIsExpanded(false);
      normalization > 0.7170770134063999
        ? setVisibled1(true)
        : setVisibled1(false);
    };

    window.addEventListener("scroll", vesibledScroll);

    return () => {
      window.removeEventListener("scroll", vesibledScroll);
    };
  }, [normalization]);

  useEffect(() => {
    slideInLeft("#contacte-title");
  }, []);
  useEffect(() => {
    slideInRight("#form-container");
  }, []);

  // useEffect(() => {
  //   const vesibledScroll = () => {
  //     window.scrollY > 7500 ? setVisibled1(true) : setVisibled1(false);
  //   };

  //   window.addEventListener("scroll", vesibledScroll);

  //   return () => {
  //     window.removeEventListener("scroll", vesibledScroll);
  //   };
  // }, []);

  return (
    <div className={`${visibled1 ? "fixed-contacte" : "contacte"} `}>
      <h1 className="contacte-us" id="contacte-title">
        Contact us
      </h1>
      <div
        id="form-container"
        className={`${isExpanded ? "expand" : ""}`}
        onClick={toggleForm}
      >
        {!isExpanded && (
          <FontAwesomeIcon
            icon={faPencil}
            className="icon"
            onClick={handleClickIcon}
          />
        )}
        <div
          id="form-content"
          className={isExpanded ? "expand" : ""}
          onClick={handleClickInsideForm}
        >
          {isExpanded && (
            <div id="form-head">
              <span
                id="form-close"
                className={`icon fa fa-close`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleForm();
                }}
              >
                X
              </span>
              <p>Good choice...</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              className="input name"
              type="text"
              name="user_name"
              placeholder="Your name please"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              className="input email"
              type="email"
              name="user_email"
              placeholder="A contact email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            {/* <select
              className="input select"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            > */}
            {/* ... options ... */}
            {/* </select> */}
            <textarea
              className="input message"
              name="message"
              placeholder="How can I help ?"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input
              className="input submit"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

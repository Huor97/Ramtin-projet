import AboutUs from "./components/AboutUs";
import Canva from "./components/Canva";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import News from "./components/News";
import Product from "./components/Product";
import Products from "./components/Products";
// import Products from "./components/Products";
import Services from "./components/Services";
import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      setScrollPosition(position);
      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // N'oubliez pas de supprimer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientValue = Math.min(scrollPosition / 10, 100); // Ajustez la division pour contrôler la vitesse du fondu

  const backgroundStyle = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) ${gradientValue}%, rgba(0, 0, 0, 0) 100%)`,
    height: "2000px" // Ajustez la hauteur selon votre contenu
  };

  function normalizeValue(value, min, max) {
    if (value < min) {
      return 0;
    } else if (value > max) {
      return 1;
    } else {
      return (value - min) / (max - min);
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const normalizedPercentage = normalizeValue(
        scrollPosition,
        0,
        documentHeight - windowHeight
      );

      setScrollY(normalizedPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("scrolly ==>", scrollY);

  return (
    <div className="App" style={backgroundStyle}>
      <Canva normalization={scrollY} />
      <section className="section-aboutUs">
        <Nav normalization={scrollY} />

        <AboutUs normalization={scrollY} />
      </section>
      <section className="section-services">
        <Services normalization={scrollY} />
      </section>

      <section className="section-product">
        <Product normalization={scrollY} />
      </section>
      <section className="section-products">
        <Products />
      </section>
      <section className="section-contact">
        <Contact normalization={scrollY} />
      </section>
      <section>
        <News normalization={scrollY} />
      </section>
    </div>
  );
}

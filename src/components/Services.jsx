import { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";
import FoodStuff from "../images/foodStuff.jpg";
import Detergents from "../images/detergents.jpg";
import Disposable from "../images/disposableDishes.jpg";
import Catering from "../images/catering.jpg";
import Logistics from "../images/logistics.jpg";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Jeu = ({
  image,
  titre,
  description,
  isActive,
  onClick,
  box,
  normalization
}) => {
  console.log("normalization services : ", normalization);

  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    const vesibledScroll = () => {
      normalization > 0.24 ? setStartAnimation(true) : setStartAnimation(false);
    };
    window.addEventListener("scroll", vesibledScroll);
    window.addEventListener("click", vesibledScroll);
    return () => {
      window.removeEventListener("scroll", vesibledScroll);
      window.removeEventListener("click", vesibledScroll);
    };
  }, [normalization]);

  const slideInLeft = (elem, delay, duration) => {
    if (startAnimation === 0.29) {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          x: 500
        },
        {
          opacity: 1,
          x: 0,
          delay: delay || 1,
          duration: duration || 0.6,
          scrollTrigger: {
            trigger: elem,
            start: "top center",
            end: "bottom center"
          }
        }
      );
    }
  };

  const slideInLeft1 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 1,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };

  const slideInLeft2 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.2,
        duration: duration || 2,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };

  const slideInLeft3 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.2,
        duration: duration || 3,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };

  const slideInLeft4 = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 200
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.1,
        duration: duration || 4,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };

  const slideOutLeft = (elem, delay, duration) => {
    gsap.to(elem, {
      opacity: 0,
      x: -200,
      delay: delay || 0.1,
      duration: duration || 0.6,
      onComplete: () => {
        gsap.set(elem, { x: 0 });
      },
      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center"
      }
    });
  };
  // ============== projet 1
  // useEffect(() => {
  //   slideInLeft("#box1");
  // }, []);

  // useEffect(() => {
  //   slideInLeft1("#box2");
  // }, []);

  // useEffect(() => {
  //   slideInLeft2("#box3");
  // }, []);

  // useEffect(() => {
  //   slideInLeft3("#box4");
  // }, []);

  // useEffect(() => {
  //   slideInLeft4("#box5");
  // }, []);

  // useEffect(() => {
  //   if (normalization >= 0.28) {
  //     slideOutLeft(`#box1`, 0.5, 0.5);
  //   }
  // }, [normalization]);

  // useEffect(() => {
  //   if (normalization >= 0.28) {
  //     slideOutLeft(`#box2`, 0.5, 0.5);
  //   }
  // }, [normalization]);

  // useEffect(() => {
  //   if (normalization >= 0.28) {
  //     slideOutLeft(`#box3`, 0.5, 0.5);
  //   }
  // }, [normalization]);
  // useEffect(() => {
  //   if (normalization >= 0.28) {
  //     slideOutLeft(`#box4`, 0.5, 0.5);
  //   }
  // }, [normalization]);

  // useEffect(() => {
  //   if (normalization >= 0.28) {
  //     slideOutLeft(`#box5`, 0.5, 0.5);
  //   }
  // }, [normalization]);
  return (
    <div
      id={box}
      className={`item ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
      // onWheel={handleScroll}
    >
      <div className="item-desc">
        <h3>{titre}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function Services({ normalization }) {
  const [vesible, setVesible] = useState(false);
  const [visibled, setVisibled] = useState(false);
  const [jeux, setJeux] = useState([
    {
      image: FoodStuff,
      titre: "Food Stuffs",
      description:
        "Discover a world of exceptional foodstuffs, where trust in sourcing and commitment to excellence are at the heart of every product we offer.",
      isActive: false
    },
    {
      image: Detergents,
      titre: "Detergents",
      description:
        "Trust in our specially formulated detergents to provide a deep, thorough clean, while being gentle on your clothes and the environment.",
      isActive: false
    },
    {
      image: Disposable,
      titre: "Disposable Dishes",
      description:
        "Our selection of disposable dishes and products offers a convenient and environmentally-conscious solution, allowing you to enjoy every meal with ease and peace of mind.",
      isActive: false
    },
    {
      image: Catering,
      titre: "Catering",
      description:
        "Trust us to turn your vision into reality with our personalized catering solutions, ensuring each dish reflects your unique taste and style.",
      isActive: false
    },
    {
      image: Logistics,
      titre: "Logistics",
      description:
        "From every corner of the globe to your doorstep, our logistics network ensures seamless and efficient delivery, connecting you with the world's markets.",
      isActive: false
    }
  ]);

  useEffect(() => {
    const vesibledScroll = () => {
      normalization > 0.28 ? setVesible(true) : setVesible(false);
      normalization > 0.28 ? setVisibled(true) : setVisibled(false);
      // window.onclick ? setActived(true) : setActived(false);
    };
    window.addEventListener("scroll", vesibledScroll);
    window.addEventListener("click", vesibledScroll);
    return () => {
      window.removeEventListener("scroll", vesibledScroll);
      window.removeEventListener("click", vesibledScroll);
    };
  }, [normalization]);

  const handleItemClick = (index) => {
    const updatedJeux = jeux.map((jeu, i) => ({
      ...jeu,
      isActive: i === index && !jeu.isActive
    }));
    setJeux(updatedJeux);
  };

  return (
    <section
      // className={`game-section ${vesible ? "fixed" : "container-services"}  ${
      //   visibled ? "visible" : " hedden"
      // }`}
      className={`game-section ${vesible ? "fixed" : "container-services"}  ${
        visibled ? "visible" : " hedden"
      }`}

      // className={`game-section `}
    >
      <div className="owl-carousel custom-carousel owl-theme">
        {jeux.map((jeu, index) => (
          <Jeu
            key={index}
            image={jeu.image}
            titre={jeu.titre}
            description={jeu.description}
            isActive={jeu.isActive}
            onClick={() => handleItemClick(index)}
            box={`box${index + 1}`}
            normalization={normalization}
          />
        ))}
      </div>
    </section>
  );
}

// export default function Services() {
//   const normalizedScroll =
//     window.scrollY /
//     (document.documentElement.scrollHeight - window.innerHeight);

//   const [vesible, setVesible] = useState(false);
//   const [actived, setActived] = useState(false);
//   console.log(normalizedScroll);

//   useEffect(() => {
//     const vesibledScroll = () => {
//       window.scrollY > 2700 ? setVesible(true) : setVesible(false);
//       window.onclick ? setActived(true) : setActived(false);
//     };

//     const slideInLeft = (elem, delay, duration) => {
//       gsap.fromTo(
//         elem,
//         {
//           opacity: 0,
//           x: -400
//         },
//         {
//           opacity: 1,
//           x: 0,
//           delay: delay || 0.4,
//           duration: duration || 0.6,
//           scrollTrigger: {
//             trigger: elem,
//             start: "top center",
//             // end: "bottom center"
//             toggleActions: "play none none none"
//           }
//         }
//       );
//     };
//     const slideInLeftBottom = (elem, delay, duration) => {
//       gsap.fromTo(
//         elem,
//         {
//           opacity: 0,
//           x: -400,
//           y: 400
//         },
//         {
//           opacity: 1,
//           x: 0,
//           y: 0,
//           delay: delay || 0.4,
//           duration: duration || 0.6,
//           scrollTrigger: {
//             trigger: elem,
//             start: "top center",
//             // end: "bottom center"
//             toggleActions: "play none none none"
//           }
//         }
//       );
//     };

//     const slideInRight = (elem, delay, duration) => {
//       gsap.fromTo(
//         elem,
//         {
//           opacity: 0,
//           x: 400
//         },
//         {
//           opacity: 1,
//           x: 0,
//           delay: delay || 0.4,
//           duration: duration || 0.6,
//           scrollTrigger: {
//             trigger: elem,
//             start: "top center",
//             end: "bottom center"
//           }
//         }
//       );
//     };

//     const slideInRightBottom = (elem, delay, duration) => {
//       gsap.fromTo(
//         elem,
//         {
//           opacity: 0,
//           x: 400,
//           y: 400
//         },
//         {
//           opacity: 1,
//           x: 0,
//           y: 0,
//           delay: delay || 0.4,
//           duration: duration || 0.6,
//           scrollTrigger: {
//             trigger: elem,
//             start: "top center",
//             end: "bottom center"
//           }
//         }
//       );
//     };

//     const slideInBottm = (elem, delay, duration) => {
//       gsap.fromTo(
//         elem,
//         {
//           opacity: 0,
//           y: 600
//         },
//         {
//           opacity: 1,
//           y: 0,
//           delay: delay || 0.3,
//           duration: duration || 0.6,
//           scrollTrigger: {
//             trigger: elem,
//             start: "top center",
//             end: "bottom center"
//           }
//         }
//       );
//     };
//     slideInLeft("#slide-foodStuff");
//     slideInRight("#slide-logostics");
//     slideInBottm("#slide-disposable");
//     slideInRightBottom("#slide-catering");
//     slideInLeftBottom("#slide-detergents");

//     window.addEventListener("scroll", vesibledScroll);
//     window.addEventListener("click", vesibledScroll);
//     return () => {
//       window.removeEventListener("scroll", vesibledScroll);
//       window.removeEventListener("click", vesibledScroll);
//     };
//   }, []);

//   return (
//  <div className={` ${vesible ? "container-services" : "service-hedden"} `}>
//     <div className={`${vesible ? "fixed" : "container-services"}`}>
//       <div className="services" id="slide-foodStuff">
//         <div className="service">
//           <img src="https://www.drodd.com/images14/white13.png" alt="natur" />
//         </div>

//         <div className="description active">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
//             soluta alias excepturi nisi sed eveniet inventore ullam atque
//             voluptatum saepe. Cupiditate magni veniam, quaerat facilis corrupti
//             nisi at eligendi unde?Ut fugit iure ipsa debitis, suscipit error
//             sunt corrupti magni necessitatibus facilis similique hic eaque nisi
//             cumque eum eos repudiandae fugiat voluptas libero at nesciunt ea
//             illo! Maxime, ut adipisci!
//           </p>
//         </div>

//         {/* <div className="subtitle">
//           <img src={FoodStuff} alt="foodstuff" />
//         </div> */}
//         <strong>Food Stuffs</strong>
//       </div>
//       <div className="services " id="slide-detergents">
//         <div className="service">
//           <img src="https://www.drodd.com/images14/white13.png" alt="natur" />
//         </div>
//         {/* <div className="subtitle ">
//           <img src={Detergents} alt="detergents" />
//         </div> */}
//         <strong>Detergents</strong>
//       </div>
//       <div className="services" id="slide-disposable">
//         <div className="service">
//           <img src="https://www.drodd.com/images14/white13.png" alt="natur" />
//         </div>
//         {/* <div className="subtitle">
//           <img src={Disposable} alt="disposable" />
//         </div> */}
//         <strong>Disposable</strong>
//       </div>
//       <div className="services " id="slide-catering">
//         <div className="service">
//           <img src="https://www.drodd.com/images14/white13.png" alt="natur" />
//         </div>
//         {/* <div className="subtitle">
//           <img src={Catering} alt="Catering" />
//         </div> */}
//         <strong>Catering</strong>
//       </div>
//       <div className="services" id="slide-logostics">
//         <div className="service">
//           <img src="https://www.drodd.com/images14/white13.png" alt="natur" />
//         </div>

//         {/* <div className="subtitle">
//           <img src={Logostics} alt="logostics" />
//         </div> */}
//         <strong>Logostics</strong>
//       </div>
//     </div>
//   );
// }

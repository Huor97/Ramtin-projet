import React, { useEffect, useState } from "react";
import "./Product.scss"; // Assurez-vous d'avoir le fichier de styles CSS importé
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SkewedPages = ({ normalization }) => {
  const [curPage, setCurPage] = useState(1);
  const [fixed, setFixed] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [scrollCount1, setScrollCount1] = useState(0);
  const numOfPages = 3; // Nombre total de pages
  const pgPrefix = "skw-page-";
  console.log("normalization product: 0.35228495938937277", normalization);
  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200
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
        x: 200
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

  const slideOutRight = (elem, delay, duration) => {
    gsap.to(elem, {
      opacity: 0,
      x: 200,
      delay: delay || 0.1, // Ajoutez un délai ici pour retarder la sortie
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

  const handleScroll = (e) => {
    // Empêcher le défilement de la page complète
    e.preventDefault();

    // Calculer la direction du défilement
    const delta = e.deltaY;
    // Incrémenter le compteur de scrolls
    if (delta > 0) {
      setScrollCount(scrollCount + 1);
      setScrollCount1(scrollCount1 + 1);
      if (scrollCount >= 4) {
        // slideOutLeft(`#left`, 1, 1); // Animation de sortie de la gauche
        setScrollCount(0);
      }

      if (scrollCount1 > 4) {
        // slideOutRight(`#right`, 1, 1);
        setScrollCount1(0);
      }
    }

    // Changer de page en fonction de la direction du défilement
    if (delta > 0 && curPage < numOfPages && scrollCount >= 3) {
      setCurPage(curPage + 1);
    } else if (delta < 0 && curPage > 1 && scrollCount >= 3) {
      setCurPage(curPage - 1);
    }
  };

  useEffect(() => {
    const fixededScroll = () => {
      normalization > 0.45 ? setFixed(true) : setFixed(false);
    };

    window.addEventListener("scroll", fixededScroll);

    return () => {
      window.removeEventListener("scroll", fixededScroll);
    };
  }, [normalization]);

  useEffect(() => {
    slideInLeft("#left");
    slideInRight("#right");
  }, []);

  return (
    <div
      className={`skw-pages ${fixed ? "fixed-product" : ""}`}
      onWheel={handleScroll}
    >
      {Array.from({ length: numOfPages }, (_, index) => {
        const pageClass = curPage === index + 1 ? "active" : "";
        return (
          <div
            className={`skw-page ${pgPrefix}${index + 1} ${pageClass}`}
            key={index + 1}
          >
            {/* Contenu de la page */}
            <div className="skw-page__half skw-page__half--left">
              <div id="left" className="skw-page__skewed">
                <div className="skw-page__content"></div>
              </div>
            </div>

            <div className="skw-page__half skw-page__half--right">
              <div id="right" className="skw-page__skewed">
                <div className="skw-page__content">
                  <h2 className="skw-page__heading">
                    Titre de la Page {index + 1}
                  </h2>
                  <p className="skw-page__description">
                    Contenu de la page {index + 1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkewedPages;

// import { useEffect, useState } from "react";
// import "./Product.css";
// import CoverVideo from "../images/coverr-foamy-waves-4873-1080p.mp4";
// import { gsap, ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

// export default function Product({ normalizationY }) {
//   const [visibled, setVisibled] = useState(false);

//   useEffect(() => {
//     const vesibledScroll = () => {
//       window.scrollY > 3600 ? setVisibled(true) : setVisibled(false);
//     };

//     window.addEventListener("scroll", vesibledScroll);

//     return () => {
//       window.removeEventListener("scroll", vesibledScroll);
//     };
//   }, []);

//   const slideInLeft = (elem, delay, duration) => {
//     gsap.fromTo(
//       elem,
//       {
//         opacity: 0,
//         x: -200
//       },
//       {
//         opacity: 1,
//         x: 0,
//         delay: delay || 0.1,
//         duration: duration || 0.6,
//         scrollTrigger: {
//           trigger: elem,
//           start: "top center",
//           end: "bottom center"
//         }
//       }
//     );
//   };

//   const slideInRight = (elem, delay, duration) => {
//     gsap.fromTo(
//       elem,
//       {
//         opacity: 0,
//         x: 200
//       },
//       {
//         opacity: 1,
//         x: 0,
//         delay: delay || 0.1,
//         duration: duration || 0.6,
//         scrollTrigger: {
//           trigger: elem,
//           start: "top center",
//           end: "bottom center"
//         }
//       }
//     );
//   };

//   const slideInBottms = (elem, delay, duration) => {
//     gsap.fromTo(
//       elem,
//       {
//         opacity: 0,
//         y: 300
//       },
//       {
//         opacity: 1,
//         y: 0,
//         delay: delay || 0.4,
//         duration: duration || 0.6,
//         scrollTrigger: {
//           trigger: elem,
//           start: "top center",
//           end: "bottom center"
//         }
//       }
//     );
//   };

//   useEffect(() => {
//     slideInLeft(".left");
//     slideInRight(".right");
//   }, []);

//   useEffect(() => {
//     slideInBottms("#video1");
//   }, []);

//   return (
//     <div className={` ${visibled ? "fixed-product" : "show"} `}>
//       <div className="left">
//         <div className="products-videos">
//           <div className="products-video">
//             <video autoPlay loop muted>
//               <source src={CoverVideo} type="video/mp4" />
//               Votre navigateur ne prend pas en charge la balise vidéo.
//             </video>
//           </div>
//           <div className="products-video" id="video1">
//             2
//           </div>
//           <div className="products-video">3</div>
//         </div>
//       </div>
//       <div className="right">
//         <div className="products-images">
//           <div className="products-image">
//             <h2>Product 01:</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Doloribus, ab dicta voluptates delectus quis ratione error illo a
//               alias officiis commodi, molestiae, quo repudiandae similique
//               blanditiis facilis aliquid. Earum in error eligendi quo, ratione
//               blanditiis, facere labore esse aliquam sunt pariatur, officia
//               ipsam reiciendis? Odit rerum, enim eius eaque corporis delectus
//               repellendus quam nam quas! Libero ad suscipit aliquid ducimus
//               tenetur provident, porro consectetur ratione quibusdam, aperiam
//               mollitia eveniet pariatur quasi facilis. Culpa molestiae
//               repellendus at velit asperiores accusamus, deserunt, obcaecati
//               quidem quam dicta iusto officia aperiam id hic corrupti voluptate
//               blanditiis laboriosam veritatis impedit! Minus sequi corporis
//               maiores quas?
//             </p>
//           </div>
//           <div className="products-image">2</div>
//           <div className="products-image">3</div>
//         </div>
//       </div>
//     </div>
//   );
// }

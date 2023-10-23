import { useEffect, useRef, useState } from "react";
import "./Products.scss";
import Produc from "./Produc";
import Date1 from "../images/products/Date.jpg";
import CoolIndustry from "../images/products/Cool Industry.jpg";
import Fish from "../images/products/Fish.jpg";
import Walnuts from "../images/products/Walnuts.jpg";
import Tuna from "../images/products/Tuna.jpg";
import CannedFood from "../images/products/Canned Food.jpg";
import Zatar from "../images/products/Zatar.jpg";
import Spices from "../images/products/Spices.jpg";
import Tea from "../images/products/Tea.jpg";
import ThaiFruits from "../images/products/Thai Fruits.jpg";
import Nuts from "../images/products/Nuts.jpg";
import Shrimps from "../images/products/Shrimps.jpg";
import Hazelnut from "../images/products/Hazelnut.jpg";
import Pistachio from "../images/products/Pistachio.jpg";
import PistachioPowder from "../images/products/Pistachio Powder.jpg";
import Honey from "../images/products/Honey.jpg";
import Safron from "../images/products/Safron.jpg";
import Pickles from "../images/products/Pickles.jpg";

export default function Products({ normalization }) {
  const [visibled, setVisibled] = useState(false);

  const jeux = [
    {
      image: Date1,
      titre: "Date"
    },
    {
      image: CoolIndustry,
      titre: "Cool Industry"
    },
    {
      image: Fish,
      titre: "Fish"
    },
    {
      image: Walnuts,
      titre: "Walnuts"
    },
    {
      image: Tuna,
      titre: "Tuna"
    },
    {
      image: CannedFood,
      titre: "Canned Food"
    },
    {
      image: Zatar,
      titre: "Zatar"
    },
    {
      image: Spices,
      titre: "Spices"
    },
    {
      image: Tea,
      titre: "Tea"
    },
    {
      image: ThaiFruits,
      titre: "Thai Fruits"
    },
    {
      image: Nuts,
      titre: "Nuts"
    },
    {
      image: Shrimps,
      titre: "Shrimps"
    },
    {
      image: Hazelnut,
      titre: "Hazelnut"
    },
    {
      image: Pistachio,
      titre: "Pistachio"
    },
    {
      image: PistachioPowder,
      titre: "Pistachio Powder"
    },
    {
      image: Honey,
      titre: "Honey"
    },
    {
      image: Safron,
      titre: "Safron"
    },
    {
      image: Pickles,
      titre: "Pickles"
    },
    {
      image: Date1
    },
    {
      image: Date1
    },
    {
      image: Date1
    }
  ];

  useEffect(() => {
    const vesibledScroll = () => {
      window.scrollY > 5500 ? setVisibled(true) : setVisibled(false);
    };

    window.addEventListener("scroll", vesibledScroll);

    return () => {
      window.removeEventListener("scroll", vesibledScroll);
    };
  }, []);

  return (
    <div className={`${visibled ? "fixed-products" : "container-products"}`}>
      <div className="title">
        <h2>Some of our other products</h2>
      </div>
      <div className="products">
        {jeux.map((jeu, index) => (
          <Produc
            key={index}
            image={jeu.image}
            titre={jeu.titre}
            description={jeu.description}
            isActive={jeu.isActive}
            // Ajoutez la propriété isLarge aux trois derniers éléments
            isLarge={index >= jeux.length - 3}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

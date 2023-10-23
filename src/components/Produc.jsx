import { useRef, useState } from "react";
import "./Produc.scss";

export default function Service({ image, titre, isLarge }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

  const cardRef = useRef();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - cardRect.left - cardRect.width / 2);
    setMouseY(e.clientY - cardRect.top - cardRect.height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);

    setMouseLeaveDelay(delay);
  };

  const cardStyle = {
    transform: `rotateY(${(mouseX / 150) * 20}deg) rotateX(${
      (mouseY / 150) * -20
    }deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${(mouseX / 150) * -10}px) translateY(${
      (mouseY / 150) * -10
    }px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div
      className={` card-wrap `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <div className=" card2" style={cardStyle}>
        <div
          className={` card-bg2 `}
          style={{ ...cardBgTransform, ...cardBgImage }}
        >
          <p className="title-produc"> {titre} </p>
        </div>
      </div>
    </div>
  );
}

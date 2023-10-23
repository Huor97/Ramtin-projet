import { useRef, useState } from "react";
import "./ProjectImages.scss";
import "./Services.css";

export default function Service({
  image,
  titre,
  description,
  isActive,
  onClick
}) {
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
      // className="card-wrap"
      className={` card-wrap `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <div className=" card" style={cardStyle}>
        <div
          className={` card-bg item ${isActive ? "active" : ""} `}
          onClick={onClick}
          style={{ ...cardBgTransform, ...cardBgImage }}
        ></div>

        <div className="card-info">
          <div className="card-header">
            {" "}
            <h3>{titre}</h3>
          </div>
          <div className="card-content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

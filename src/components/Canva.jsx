import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";
import { Loader, Stars } from "@react-three/drei";
import { useEffect, useState } from "react";
import "./Canva.css";

export default function Canva({ normalization }) {
  const [visibled, setVisibled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setVisibled(true) : setVisibled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`canva-container ${visibled ? "visible" : " hedden"}`}>
      <Canvas style={{ position: "fixed" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        <Planet position={[0, 0, 0]} normalization={normalization} />
        <Stars />
      </Canvas>
      <Loader />
    </div>
  );
}

import React from "react";
import "./cards.css";
export default function Cards({ name, img, types }) {
  return (
    <div className="cards">
      <div>
        <div className="colorCard">
          <img
            className="img"
            src={img}
            alt="Img missing"
            width={150}
            height={150}
          />
          <h1 className="h1Card">{name.toLowerCase()}</h1>
          <h3 className="h3Card">Tipo: {types}</h3>
        </div>
      </div>
    </div>
  );
}

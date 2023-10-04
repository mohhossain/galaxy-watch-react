import React from "react";
import { useNavigate } from "react-router-dom";

const textStyle = {
  color: "white",
  margin: "0",
  padding: "0.5rem",
  textWrap: "wrap",
  overflow: "hidden",
};

function PlanetCard() {
  const navigate = useNavigate();
  return (
    <div className="planet-card">
      <img
        height={300}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Earth_Eastern_Hemisphere.jpg/1024px-Earth_Eastern_Hemisphere.jpg"
        alt="Earth"
      />
      <h2 style={textStyle}>Earth</h2>

      <button
        onClick={() => {
          navigate("/planet/1");
        }}
      >
        View
      </button>
      <button>Edit</button>
      <button style={{ color: "red" }}>Delete</button>
    </div>
  );
}

export default PlanetCard;

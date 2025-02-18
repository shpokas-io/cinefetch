import React from "react";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div
    style={{
      backgroundColor: "var(--bg-color)",
      color: "var(--text-color)",
      border: "1px solid #ccc",
      borderRadius: "0.5rem",
      overflow: "hidden",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    }}
  >
    <img src={image} alt={title} style={{ width: "100%", height: "auto" }} />
    <div style={{ padding: "1rem" }}>
      <h3 style={{ margin: "0 0 0.5rem 0" }}>{title}</h3>
      <p style={{ margin: 0 }}>{description}</p>
    </div>
  </div>
);

export default Card;

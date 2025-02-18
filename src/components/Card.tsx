import React from "react";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => (
  <div className="bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 rounded-lg overflow-hidden shadow-md">
    <img src={image} alt={title} className="w-full h-auto" />
    <div className="p-4">
      <h3 className="mb-2">{title}</h3>
      <p className="m-0">{description}</p>
    </div>
  </div>
);

export default Card;

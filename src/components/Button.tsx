import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      padding: "0.75rem 1.5rem",
      backgroundColor: "var(--button-bg)",
      color: "var(--button-text)",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
    }}
    onMouseOver={(e) => {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
        "var(--button-hover)";
    }}
    onMouseOut={(e) => {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
        "var(--button-bg)";
    }}
  >
    {children}
  </button>
);

export default Button;

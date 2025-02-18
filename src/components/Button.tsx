import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="px-6 py-3 bg-[var(--button-bg)] text-[var(--button-text)] rounded-lg cursor-pointer hover:bg-[var(--button-hover)]"
  >
    {children}
  </button>
);

export default Button;

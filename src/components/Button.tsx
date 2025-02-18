import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    {...props}
    className={`px-6 py-3 bg-[var(--button-bg)] text-[var(--button-text)] rounded-lg cursor-pointer hover:bg-[var(--button-hover)] transition ${className}`}
  >
    {children}
  </button>
);

export default Button;

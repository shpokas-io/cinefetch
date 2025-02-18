import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      padding: "1rem",
      textAlign: "center",
      backgroundColor: "var(--bg-color)",
    }}
  >
    <div>&copy; {new Date().getFullYear()} CineFetch</div>
  </footer>
);

export default Footer;

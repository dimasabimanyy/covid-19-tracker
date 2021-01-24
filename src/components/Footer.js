import React from "react";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      &copy; {getYear()}{" "}
      <a
        href="https://github.com/dimasabimanyy"
        alt="Dimas Abimanyu"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dimas Abimanyu
      </a>
    </footer>
  );
};

export default Footer;

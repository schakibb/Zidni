import React from "react";

function Header({ name }) {
  return (
    <header className="mb-16 mt-10 flex items-center justify-center">
      <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";

const Card = ({ image, title, text, button }) => {
  return (
    <a
      href="/"
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
          {title}
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
          {text}
        </p>
        <div className="flex justify-center mt-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-teal-500 text-teal-500 text-sm uppercase tracking-wide rounded-lg transition hover:bg-teal-500 hover:text-white">
            {button}
            <i className="fa-solid fa-plane-departure"></i>
          </span>
        </div>
      </div>
    </a>
  );
};


const DarkModeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-full text-sm transition hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black"
      onClick={toggleTheme}
    >
      Toggle to {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

const Header = ({ theme, setTheme }) => (
  <header className="bg-white dark:bg-gray-900 shadow-md p-4 mb-6">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-800 dark:text-white">
        React Card Component with Tailwind and Dark Mode
      </h1>
      <DarkModeToggle theme={theme} setTheme={setTheme} />
    </div>
  </header>
);


export { Card, Header };

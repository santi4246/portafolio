// src/components/Header.tsx
import { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="bg-light dark:bg-dark py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-dark dark:text-light">Santiago Romero</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
      >
        {darkMode ? "☀️ Modo diurno" : "🌙 Modo nocturno"}
      </button>
    </header>
  );
}

export default Header;
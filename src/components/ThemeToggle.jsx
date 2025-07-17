import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "cmyk");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.add(theme); // Initial class
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "cmyk" ? "forest" : "cmyk";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);

    // ✅ Force DaisyUI refresh
    const root = document.documentElement;
    root.style.setProperty("--theme-toggle-refresh", Date.now());
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      {/* Sun Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* Toggle */}
      <input
        type="checkbox"
        className="toggle toggle-primary"
        onChange={toggleTheme}
        checked={theme === "forest"}
      />

      {/* Moon Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
};

export default ThemeToggler;

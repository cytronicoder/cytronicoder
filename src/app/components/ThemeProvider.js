"use client";

import { useState, useEffect } from "react";

export default function ThemeProvider() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                border: "none",
                background: "none",
                color: "inherit",
                fontSize: "1em",
                marginLeft: "10px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                display: "inline-block",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            aria-label="Toggle Theme"
        >
            {theme === "light" ? "☀️" : "🌙"}
        </button>
    );
}

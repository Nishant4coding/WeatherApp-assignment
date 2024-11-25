import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Header } from "./components/custom/Article";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Fetch articles on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/news");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Update the `theme` class on `body` when theme changes
  useEffect(() => {
    document.body.className =
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between "light" and "dark"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <div className={`mx-auto p-4`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              image={article.image}
              title={article.title}
              text={article.text}
              button={article.button}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

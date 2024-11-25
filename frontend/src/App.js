import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);

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

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">News Application</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-700 my-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

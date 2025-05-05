"use client";
import Article from "@/components/Article";
import { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map(({ code, name, description, category }) => (
        <Article
          key={code}
          name={name}
          code={code}
          category={category}
          description={description}
        />
      ))}
    </div>
  );
};

export default ArticleList;

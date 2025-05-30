"use client";
import { useEffect, useState } from "react";
import useStore from "@/store/store";
// Components
import Article from "@/components/Article";

interface Article {
  id: number;
  name: string;
  code: string;
  description: string;
  categoryId: number;
  category: {
    id: number;
    name: String;
  };
}

const ArticleList = ({ articles }: { articles: Article[] }) => {
  const { searchQuery, categoryFilter } = useStore();
  // const [filteredArticles, setFilteredArticles] = useState([]);

  const filteredArticles = articles
    .filter(
      (article: Article) =>
        (article.name?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (article.category?.name.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        article.code?.toString().includes(searchQuery)
    )
    .filter((article: Article) =>
      article.category.name.toLowerCase().includes(categoryFilter.toLowerCase())
    );

  return (
    <div className="grid gap-12 mt-12">
      {filteredArticles.map(
        ({ id, code, name, description, category }: Article) => (
          <Article
            key={id}
            name={name}
            code={code}
            category={category}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default ArticleList;

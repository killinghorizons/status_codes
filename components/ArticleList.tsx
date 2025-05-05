"use client";
import useSWR from "swr";
import Article from "@/components/Article";
import useStore from "@/store/store";
import { twMerge as tw } from "tailwind-merge";

interface Article {
  code: string;
  name: string;
  description: string;
  category: {
    name: string;
  };
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const ArticleList = () => {
  const { data: articles, error, isLoading } = useSWR("/api/articles", fetcher);
  const { searchQuery } = useStore();

  const filteredArticles =
    !error && !isLoading
      ? articles.filter(
          (article: Article) =>
            (article.name?.toLowerCase() || "").includes(
              searchQuery.toLowerCase()
            ) ||
            (article.category?.name.toLowerCase() || "").includes(
              searchQuery.toLowerCase()
            ) ||
            article.code?.toString().includes(searchQuery)
        )
      : [];

  return (
    <>
      {!error && isLoading && <div>Loading data...</div>}
      {!error && !isLoading && (
        <div
          className={tw(
            "h-screen overflow-y-scroll",
            "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          )}
        >
          {filteredArticles.map(
            ({ code, name, description, category }: Article) => (
              <Article
                key={code}
                name={name}
                code={code}
                category={category}
                description={description}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default ArticleList;

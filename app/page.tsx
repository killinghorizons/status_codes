import prisma from "@/lib/prisma";

import ArticleList from "@/components/ArticleList";
import SearchInput from "@/components/SearchInput";

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

const Home = async () => {
  const articles: Article[] = await prisma.article.findMany({
    include: { category: true },
  });

  return (
    <section className="py-10">
      <h1 className="text-3xl font-black tracking-tight mb-10 text-center">
        HTTP response status codes
      </h1>
      <SearchInput />
      <ArticleList articles={articles} />
    </section>
  );
};

export default Home;

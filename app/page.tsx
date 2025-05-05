import ArticleList from "@/components/ArticleList";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-black tracking-tight mb-10">
        HTTP response status codes
      </h1>
      <SearchInput />
      <ArticleList />
    </section>
  );
};

export default Home;

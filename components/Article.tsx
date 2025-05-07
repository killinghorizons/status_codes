import useStore from "@/store/store";

type Props = {
  name: string;
  code: string;
  description: string;
  category: {
    name: String;
  };
};

const Article = ({ name, code, description, category }: Props) => {
  const { categoryFilter, setCategoryFilter } = useStore();

  const handleClick = () => {
    // setCategoryFilter(category.name);
    setCategoryFilter(categoryFilter.length === 0 ? category.name : "");
  };

  return (
    <article className="bg-background-layer p-5 rounded-md inset-shadow-sm inset-shadow-background transform scale-100 hover:scale-105 transition ease-out ">
      <h3 className="mb-2 text-primary font-semibold text-xl duration-300">
        {code} - {name}
      </h3>
      <p
        className="whitespace-pre-wrap mb-4"
        style={{ whiteSpace: "pre-line" }}
      >
        {description.replace(/\n/g, "<br />")}
      </p>
      <p
        className="text-sm mb-4 text-right text-secondary cursor-pointer"
        onClick={handleClick}
      >
        #{category.name}
      </p>
    </article>
  );
};

export default Article;

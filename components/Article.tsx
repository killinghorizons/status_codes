type Props = {
  name: string;
  code: string;
  description: string;
  category: {
    name: String;
  };
};

const Article = ({ name, code, description, category }: Props) => {
  return (
    <article className="mb-10 py-2 border-b border-b-gray-600 px-2">
      <h3 className="mb-1 text-teal-300 font-semibold">
        {code}-{name}
      </h3>
      <p
        className="whitespace-pre-wrap mb-4"
        style={{ whiteSpace: "pre-line" }}
      >
        {description}
      </p>
      <p className="text-sm mb-2 text-right">#{category.name}</p>
    </article>
  );
};

export default Article;

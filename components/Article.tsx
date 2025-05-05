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
    <article className="mb-10 py-2 border-b border-b-gray-600">
      <h3 className="mb-1 text-teal-300 font-semibold">
        {code}-{name}
      </h3>
      <p className="text-sm mb-2">[*{category.name}]</p>
      <pre className="whitespace-pre-wrap" style={{ whiteSpace: "pre-line" }}>
        {description}
      </pre>
    </article>
  );
};

export default Article;

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
    <article>
      <h3 className="mb-2 text-primary font-semibold text-xl">
        {code} - {name}
      </h3>
      <p
        className="whitespace-pre-wrap mb-4"
        style={{ whiteSpace: "pre-line" }}
      >
        {description.replace(/\n/g, "<br />")}
      </p>
      <p className="text-sm mb-4 text-right text-secondary cursor-pointer">
        #{category.name}
      </p>
    </article>
  );
};

export default Article;

const HighlightsSection = ({ content }) => {
  return (
    <div className="grid gap-12 md:grid-cols-3">
      {content.map((item, index) => (
        <HighlightItem
          title={item.title}
          description={item.description}
          key={index}
        />
      ))}
    </div>
  );
};

const HighlightItem = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center h-full space-y-4 text-left md:items-center md:text-center">
      <h2>{title}</h2>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default HighlightsSection;

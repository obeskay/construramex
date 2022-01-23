const HighlightsSection = ({ content }) => {
  return (
    <div className="grid grid-cols-3 gap-12">
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
    <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
      <h2>{title}</h2>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default HighlightsSection;

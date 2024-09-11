const FeaturesSection = () => {
  const FeatureCard = ({ iconColor, title, description, iconPath }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <svg
            className={`w-12 h-12 ${iconColor}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={iconPath} />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };

  const features = [
    {
      iconColor: "text-blue-500",
      title: "Innovative Design",
      description:
        "Experience cutting-edge designs that combine style with functionality.",
      iconPath: "M10 15l-5-5h3V0h4v10h3l-5 5z",
    },
    {
      iconColor: "text-green-500",
      title: "High Performance",
      description:
        "Enjoy fast and reliable performance with the latest technology.",
      iconPath: "M10 15l-5-5h3V0h4v10h3l-5 5z",
    },
    {
      iconColor: "text-yellow-500",
      title: "Cutting-edge Features",
      description: "Stay ahead with the latest features and functionalities.",
      iconPath: "M10 15l-5-5h3V0h4v10h3l-5 5z",
    },
    {
      iconColor: "text-purple-500",
      title: "User-friendly Interface",
      description:
        "Navigate seamlessly with an intuitive and easy-to-use interface.",
      iconPath: "M10 15l-5-5h3V0h4v10h3l-5 5z",
    },
    {
      iconColor: "text-orange-500",
      title: "Affordable Prices",
      description:
        "Get the best value for your money with competitive pricing.",
      iconPath: "M10 15l-5-5h3V0h4v10h3l-5 5z",
    },
    {
      iconColor: "text-gray-500",
      title: "Exceptional Quality",
      description:
        "Built with the highest quality materials for durability and reliability.",
      iconPath: "M10 15l-5-5h3V0h4v10h3l-5 5z",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24 dark:bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-slate-100">
          Why Choose Our Gadgets?
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
              iconPath={feature.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

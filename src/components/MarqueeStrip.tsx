const MarqueeStrip = () => {
  const items = ["Meu APP", "Criado No", "Smiley Code"];

  // Duplicate items multiple times for seamless loop
  const repeatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div className="bg-primary py-2.5 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="mx-6 md:mx-8 text-xs md:text-sm font-semibold text-primary-foreground inline-flex items-center gap-6 md:gap-8"
          >
            {item}
            <span className="text-primary-foreground/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;

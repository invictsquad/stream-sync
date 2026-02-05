import { motion } from "framer-motion";
import { Building2, Cloud, Globe2, Music2, ShoppingCart, Smartphone, Tv2, Zap } from "lucide-react";

const PartnersSection = () => {
  // Using Lucide Icons to replace external SVGs and fix tracking warnings
  const partners = [
    { name: "Google", icon: Globe2 },
    { name: "Microsoft", icon: Building2 },
    { name: "Amazon", icon: ShoppingCart },
    { name: "Meta", icon: Globe2 },
    { name: "Apple", icon: Smartphone },
    { name: "Netflix", icon: Tv2 },
    { name: "Spotify", icon: Music2 },
    { name: "Tesla", icon: Zap },
  ];

  // Duplicate for seamless loop
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Empresas que confiam
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Nossos Parceiros de <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas líderes de mercado que escolheram nossa plataforma para
            impulsionar seus negócios
          </p>
        </motion.div>
      </div>

      {/* Partners Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-partners-marquee">
          {repeatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 mx-8 md:mx-12">
              <div className="glass-card px-8 py-6 flex items-center gap-4 hover-glow transition-all duration-300 hover:scale-105 cursor-pointer group min-w-[200px]">
                <partner.icon
                  className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
                <span className="text-lg font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-12"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
            <div className="text-muted-foreground text-sm mt-1">Empresas Parceiras</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
            <div className="text-muted-foreground text-sm mt-1">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">5 Anos</div>
            <div className="text-muted-foreground text-sm mt-1">De Parceria Média</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;

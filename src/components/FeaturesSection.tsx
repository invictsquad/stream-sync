import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Palette, Code, Smartphone, Cloud } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Performance otimizada para carregar em milissegundos.",
  },
  {
    icon: Shield,
    title: "Seguro",
    description: "Proteção de dados com criptografia de ponta.",
  },
  {
    icon: Palette,
    title: "Design Moderno",
    description: "Interfaces elegantes que encantam seus usuários.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Código limpo e manutenível para escalar seu projeto.",
  },
  {
    icon: Smartphone,
    title: "Responsivo",
    description: "Perfeito em qualquer dispositivo, de mobile a desktop.",
  },
  {
    icon: Cloud,
    title: "Na Nuvem",
    description: "Infraestrutura escalável e sempre disponível.",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card p-8 h-full hover:border-primary transition-all duration-300 hover-glow">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-subtle to-accent-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <feature.icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Tudo que você precisa para{" "}
            <span className="gradient-text">crescer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para
            transformar sua visão em um produto digital de sucesso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

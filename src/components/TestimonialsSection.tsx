import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, TechStart",
    content:
      "A Smiley Code transformou completamente nossa presença digital. O resultado superou todas as expectativas!",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Carlos Mendes",
    role: "Fundador, InnovateBR",
    content:
      "Profissionalismo e qualidade impecáveis. O time entrega resultados excepcionais em tempo recorde.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "Marina Costa",
    role: "Diretora, DigitalFlow",
    content:
      "Parceria incrível! A atenção aos detalhes e o suporte contínuo fazem toda a diferença.",
    rating: 5,
    avatar: "MC",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="glass-card p-8 h-full hover:border-primary transition-all duration-300 relative">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary-subtle flex items-center justify-center">
          <Quote className="w-5 h-5 text-primary" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        {/* Content */}
        <p className="text-foreground text-lg leading-relaxed mb-8">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">
              {testimonial.avatar}
            </span>
          </div>
          <div>
            <div className="font-semibold text-foreground">
              {testimonial.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            O que nossos clientes <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias de sucesso de empresas que transformaram seus negócios com
            nossas soluções digitais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

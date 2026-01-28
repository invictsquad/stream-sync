import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-subtle rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-accent-subtle rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 md:w-64 md:h-64 bg-primary-muted rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-card mb-6 md:mb-8 text-xs md:text-sm"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
              Nova versão disponível
            </span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 px-2"
          >
            Transforme suas ideias em{" "}
            <span className="gradient-text">realidade digital</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-4"
          >
            Criamos experiências digitais incríveis que impulsionam seu negócio.
            Design moderno, tecnologia de ponta e resultados extraordinários.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg hover-glow shadow-glow-lg group"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:bg-secondary hover:text-secondary-foreground text-foreground font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg group"
            >
              <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Ver Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 max-w-xl mx-auto px-4"
          >
            {[
              { value: "10K+", label: "Usuários" },
              { value: "99%", label: "Satisfação" },
              { value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements - Hidden on mobile */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 glass-card rounded-2xl hidden lg:flex items-center justify-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-3xl">🚀</span>
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 glass-card rounded-2xl hidden lg:flex items-center justify-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-2xl">⚡</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

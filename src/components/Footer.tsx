import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const footerLinks = {
  produto: ["Recursos", "Preços", "Integrações", "Roadmap"],
  empresa: ["Sobre", "Carreiras", "Blog", "Imprensa"],
  recursos: ["Documentação", "Tutoriais", "API", "Status"],
  legal: ["Privacidade", "Termos", "Cookies", "Licenças"],
};

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  S
                </span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Smiley<span className="gradient-text">Code</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando ideias em experiências digitais extraordinárias
              desde 2020.
            </p>
            <div className="flex gap-3">
              {[
                {
                  name: "LinkedIn",
                  icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
                  url: "#",
                },
                {
                  name: "Twitter",
                  icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg",
                  url: "#",
                },
                {
                  name: "Instagram",
                  icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",
                  url: "#",
                },
                {
                  name: "GitHub",
                  icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
                  url: "#",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors p-2"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-full h-full object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Smiley Code. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Feito com smiley code{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

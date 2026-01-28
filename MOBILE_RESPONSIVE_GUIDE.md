# Guia de Responsividade Mobile - Scaffold React

Este documento descreve as correções aplicadas aos componentes do scaffold para garantir responsividade mobile perfeita.

## Problemas Corrigidos

### 1. HeroSection - Viewport e Layout Mobile

**Problema**: Conteúdo saindo do limite da tela em mobile, texto ilegível.

**Solução**:

- ✅ Adicionado `px-4` na section principal
- ✅ Tamanhos de texto responsivos: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- ✅ Botões com `w-full sm:w-auto` para largura total em mobile
- ✅ Orbs de background com tamanhos menores em mobile: `w-64 h-64 md:w-96 md:h-96`
- ✅ Espaçamento responsivo em stats: `gap-4 md:gap-8`
- ✅ Badge com tamanhos responsivos: `text-xs md:text-sm`
- ✅ Padding responsivo em botões: `px-6 py-5 md:px-8 md:py-6`

**Classes Importantes**:

```tsx
// Section principal
className =
  "relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4";

// Heading
className =
  "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 px-2";

// Botões
className =
  "w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg hover-glow shadow-glow-lg group";
```

### 2. MarqueeStrip - Animação de Rolagem Infinita

**Problema**: Animação removida ou não funcionando.

**Solução**:

- ✅ Mantida classe `animate-marquee` (definida em `src/index.css`)
- ✅ Items duplicados 8x para loop suave e sem gaps
- ✅ Usado `inline-flex` para evitar quebra de linha
- ✅ Tamanhos responsivos: `text-xs md:text-sm`
- ✅ Espaçamento responsivo: `mx-6 md:mx-8`

**Código Correto**:

```tsx
const MarqueeStrip = () => {
  const items = ["Meu APP", "Criado No", "Smiley Code"];

  // Duplicar 8x para loop infinito suave
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
```

### 3. PartnersSection - Animação e Logos Duplicadas

**Problema**: Animação removida, logos duplicadas e iguais visíveis.

**Solução**:

- ✅ Mantida classe `animate-partners-marquee`
- ✅ Duplicação reduzida de 4x para 2x (evita logos repetidas visíveis)
- ✅ Adicionados gradientes de fade nas laterais
- ✅ Usado `flex-shrink-0` para evitar compressão dos cards

**Código Correto**:

```tsx
const PartnersSection = () => {
  const partners = [
    { name: "Google", logo: "..." },
    { name: "Microsoft", logo: "..." },
    // ... 8 partners únicos
  ];

  // Duplicar apenas 2x para evitar repetição visível
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-secondary/30 overflow-hidden">
      {/* ... */}
      <div className="relative">
        {/* Gradientes de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-partners-marquee">
          {repeatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 mx-8 md:mx-12">
              {/* Card do partner */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 4. ContactSection - Ícones de Redes Sociais

**Problema**: Ícones de redes sociais ausentes (apenas letras).

**Solução**:

- ✅ Adicionados ícones SVG reais (LinkedIn, Twitter, Instagram)
- ✅ Usado `aria-label` para acessibilidade
- ✅ Mantidos hover effects com Framer Motion

**Código Correto**:

```tsx
<motion.a
  href="#"
  whileHover={{ scale: 1.1, y: -2 }}
  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary-subtle transition-colors"
  aria-label="LinkedIn"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328..." />
  </svg>
</motion.a>
```

## Animações CSS (src/index.css)

**NUNCA REMOVER ESTAS ANIMAÇÕES:**

```css
/* Marquee animation */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

/* Partners marquee animation (slower) */
@keyframes partners-marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-partners-marquee {
  animation: partners-marquee 30s linear infinite;
}

.animate-partners-marquee:hover {
  animation-play-state: paused;
}
```

## Checklist de Responsividade

Ao criar ou editar componentes, sempre verificar:

- [ ] Padding horizontal adequado (`px-4`, `px-6`, etc.)
- [ ] Tamanhos de texto responsivos (`text-sm md:text-base lg:text-lg`)
- [ ] Botões com largura total em mobile (`w-full sm:w-auto`)
- [ ] Espaçamento responsivo (`gap-4 md:gap-8`)
- [ ] Imagens e elementos decorativos com tamanhos menores em mobile
- [ ] Animações mantidas e funcionando
- [ ] Ícones SVG reais (não apenas letras)
- [ ] `aria-label` em links e botões sem texto visível
- [ ] Overflow controlado (`overflow-hidden` onde necessário)
- [ ] Whitespace controlado (`whitespace-nowrap` em marquees)

## Breakpoints Tailwind

```
sm: 640px   // Small devices
md: 768px   // Medium devices (tablets)
lg: 1024px  // Large devices (desktops)
xl: 1280px  // Extra large devices
2xl: 1536px // 2X Extra large devices
```

## Testando Responsividade

1. Abrir DevTools (F12)
2. Ativar modo responsivo (Ctrl+Shift+M)
3. Testar em:
   - Mobile: 375px (iPhone SE)
   - Mobile: 390px (iPhone 12/13/14)
   - Tablet: 768px (iPad)
   - Desktop: 1280px
   - Desktop: 1920px

## Comandos Úteis

```bash
# Iniciar dev server
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Testes
npm test
```

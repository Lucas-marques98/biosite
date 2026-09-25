export const portfolioData = {
  personal: {
    name: "Lucas Marques",
    role: "Desenvolvedor & Criador de Soluções",
    badge: "Desenvolvedor & Criador de Soluções",
    heroHeadline: {
      prefix: "Ideias que",
      middle: "se tornam",
      highlight: "realidade.",
    },
    heroAlternativeHeadline: {
      prefix: "Transformo ideias",
      middle: "em produtos",
      highlight: "digitais reais.",
    },
    description:
      "Eu sou Lucas Marques, desenvolvedor e criador de soluções digitais. Transformo ideias em apps, sites e sistemas que geram resultados reais.",
    stats: [
      { number: "+10", label: "Projetos entregues" },
      { number: "+5", label: "Tecnologias dominadas" },
      { number: "100%", label: "Foco em resultados" },
    ],
  },

  navigation: [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ],

  services: {
    label: "O que eu faço",
    title: "Soluções digitais\npara o seu próximo nível",
    description:
      "Desenvolvimento, design e estratégia para transformar sua ideia em um produto real, funcional e escalável.",
    items: [
      {
        id: "mobile-apps",
        title: "Apps Mobile",
        description:
          "Desenvolvimento de aplicativos Android e iOS com foco em performance e experiência.",
        icon: "smartphone",
      },
      {
        id: "websites",
        title: "Sites e Landing Pages",
        description:
          "Sites modernos, rápidos e otimizados para apresentação, conversão e crescimento.",
        icon: "monitor",
      },
      {
        id: "systems",
        title: "Sistemas e Ferramentas",
        description:
          "Soluções personalizadas para organizar, automatizar e facilitar processos.",
        icon: "gears",
      },
      {
        id: "ai-consulting",
        title: "Consultoria em IA",
        description:
          "Integração de inteligência artificial para aumentar produtividade e resultados.",
        icon: "brain",
      },
    ],
  },

  projects: {
    label: "Projetos em destaque",
    title: "Projetos reais,\nresultados concretos",
    viewAllText: "Ver todos os projetos →",
    featured: {
      id: "dess-locafacil",
      badge: "APP MOBILE",
      title: "Dess Locafácil",
      description:
        "App completo para gestão de locadores de veículos. Controle de carros, contratos, vistorias, clientes e muito mais. Desenvolvido com React Native, Supabase e foco em performance.",
      techs: ["React Native", "Expo", "Supabase"],
      primaryCta: "Ver detalhes →",
      secondaryCta: "Baixar na Play Store",
      playStoreUrl: "https://play.google.com",
    },
    items: [
      {
        id: "barberflow",
        badge: "APP MOBILE",
        title: "BarberFlow",
        description:
          "Sistema de agendamento para barbearias com link público, moderno e prático.",
        techs: ["React Native", "Node.js", "PostgreSQL"],
      },
      {
        id: "sistema-multimidia",
        badge: "AUTOMAÇÃO / WEB",
        title: "Sistema Multimídia",
        description:
          "Automação de vídeos para YouTube, Instagram e Facebook com foco em processamento e escala.",
        techs: ["Python", "FFmpeg", "Cloud APIs"],
      },
      {
        id: "site-profissional",
        badge: "WEB / PORTFÓLIO",
        title: "Site Profissional",
        description:
          "Site moderno e otimizado para apresentar serviços e gerar mais oportunidades.",
        techs: ["React", "Vite", "Design System"],
      },
    ],
  },

  technologies: {
    label: "Tecnologias",
    title: "Ferramentas que\ntransformam ideias",
    description:
      "Trabalho com as melhores tecnologias do mercado para entregar soluções modernas e escaláveis.",
    list: [
      { name: "React", key: "react" },
      { name: "React Native", key: "reactnative" },
      { name: "Expo", key: "expo" },
      { name: "TypeScript", key: "typescript" },
      { name: "JavaScript", key: "javascript" },
      { name: "Supabase", key: "supabase" },
      { name: "Node.js", key: "nodejs" },
      { name: "Python", key: "python" },
      { name: "HTML5", key: "html5" },
      { name: "CSS3", key: "css3" },
      { name: "Figma", key: "figma" },
    ],
  },

  about: {
    label: "Sobre mim",
    titlePrefix: "Mais que código,",
    titleHighlight: "é propósito.",
    paragraphs: [
      "Meu nome é Lucas Marques, tenho 28 anos e sou desenvolvedor e criador de soluções digitais focado em transformar ideias em produtos de alto impacto.",
      "Com anos de experiência prática no desenvolvimento de aplicativos mobile, sistemas web completos e automações inteligentes com IA, meu foco é criar softwares robustos, modernos e orientados a resultados reais.",
      "Acredito que a combinação entre engenharia sólida, design refinado e visão estratégica de negócio é o que transforma tecnologia em valor concreto para empresas e pessoas.",
    ],
    cta: "Conheça mais sobre mim →",
    pillars: [
      "Foco em resultados e negócios",
      "Arquitetura escalável e código limpo",
      "Comunicação transparente e ágil",
      "Compromisso rigoroso com prazos",
      "Experiência do usuário (UX/UI) refinada",
      "Soluções modernas com IA e Mobile",
    ],
  },

  contact: {
    label: "Vamos conversar?",
    titlePrefix: "Tem um projeto em mente?",
    titleHighlight: "Vamos tirar do papel!",
    description:
      "Estou sempre aberto a novos desafios, parcerias e oportunidades. Me chame e vamos conversar sobre como posso te ajudar.",
    whatsappText: "Falar no WhatsApp",
    emailText: "Enviar um e-mail",
    whatsappUrl: "https://wa.me/5511952083177?text=Ol%C3%A1%20Lucas,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!",
    email: "lucas@example.com",
    features: [
      {
        title: "Resposta rápida",
        description: "Normalmente respondo em poucas horas.",
        icon: "chat",
      },
      {
        title: "Orçamento sem compromisso",
        description: "Vamos entender sua ideia e encontrar a melhor solução.",
        icon: "shield",
      },
      {
        title: "Foco em resultados",
        description: "Meu objetivo é ajudar seu projeto a crescer.",
        icon: "target",
      },
    ],
  },

  footer: {
    logoName: "Lucas Marques",
    subtitle: "Desenvolvedor & Criador de Soluções",
    copyright: "© 2026 Lucas Marques. Todos os direitos reservados.",
    socials: [
      { name: "GitHub", url: "https://github.com/Lucas-marques98", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/lucas-marques-5829b5335/", icon: "linkedin" },
      { name: "Instagram", url: "https://www.instagram.com/lucasmarques676/", icon: "instagram" },
    ],
  },
};

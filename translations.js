/* Simple i18n dictionary (PT/EN) */
window.translations = {
  pt: {
    lang: { pt: "PT", en: "EN" },
    nav: {
      home: "Home",
      projects: "Projetos",
      skills: "Skills",
      education: "Formação",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para oportunidades",
      title: "Automação • Desenvolvimento Web • Segurança",
      desc:
        "Desenvolvedor web focado em automação e desenvolvimento seguro, construindo aplicações web modernas com ênfase em produtividade e experiência do usuário. Como um samurai afiando sua espada, busco a maestria em cada linha de código.",
      ctaProjects: "Ver Projetos →",
      ctaContact: "Entrar em contato",
      code: `
          <div class="code-dim">// dev.profile.js</div>
          <br>
          <div><span class="code-key">const</span> <span class="code-gold">dev</span> = {</div>
          <div>&nbsp;&nbsp;<span class="code-key">nome</span>: <span class="code-str">"Eduardo Patrick"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">role</span>: <span class="code-str">"Full Stack Developer"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">foco</span>: <span class="code-str">"Web Development"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">principaisTecnologias</span>: [<span class="code-str">"JavaScript"</span>, <span class="code-str">"React"</span>, <span class="code-str">"Node.js"</span>, <span class="code-str">"Python"</span>],</div>
          <div>&nbsp;&nbsp;<span class="code-key">diferencial</span>: <span class="code-str">"Desenvolvimento de projetos reais com foco em solução de problemas"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">status</span>: <span class="code-gold">"Disponível para oportunidades"</span>,</div>
          <div>};</div>
      `.trim(),
      stats: {
        years: "Anos de estudo",
        tech: "Tecnologias",
        projects: "Projetos reais",
        curiosity: "Curiosidade",
      },
    },
    projects: {
      label: "01 — Projetos",
      title: "O que eu construí",
      subtitle:
        "Projetos desenvolvidos com foco em solução real de problemas, boas práticas de engenharia e entrega de valor ao usuário final.",
      problem: "O Problema",
      solution: "A Solução",
      roleLabel: "Meu papel",
      tech: "Tecnologias",
      p1: {
        number: "Projeto 01",
        title: "Brotar+ · App para Comerciantes",
        role: "TCC · Mobile · UX/UI",
        problem:
          "Comerciantes de um centro de distribuição de alimentos no estado do Pará enfrentam dificuldades na divulgação de seus produtos, o que limita o alcance de clientes e impacta diretamente nas vendas. A baixa presença digital e a dependência do fluxo local reduzem a competitividade desses profissionais.",
        solution:
          'Desenvolvimento do <strong>Brotar+</strong>, um protótipo de aplicativo mobile voltado à exposição de produtos e apoio às vendas. A solução permite que vendedores criem vitrines digitais, organizem seus produtos, atualizem preços e se conectem diretamente com clientes, ampliando sua visibilidade no ambiente digital.',
        myRole:
          "Pesquisa com usuários reais (18 participantes), aplicação de Design Thinking, construção de mapa de empatia, definição de requisitos (histórias de usuário), prototipação de interfaces no Figma e desenvolvimento do protótipo funcional da aplicação.",
        highlight:
          "<strong>📊 Resultados:</strong> Protótipo validado com usuários reais, considerado intuitivo e útil, com alta intenção de uso e potencial para ampliar vendas e alcance digital dos comerciantes.",
      },
      p2: {
        number: "Projeto 02",
        title: "Copiloto de WhatsApp para Pequenos Negócios",
        role: "Full Stack · SaaS · Automação com Voz · Projeto Independente",
        problem:
          "Pequenos negócios que utilizam o WhatsApp como principal canal de vendas enfrentam sobrecarga operacional: precisam responder mensagens manualmente, organizar pedidos, gerenciar agendamentos e lembrar tarefas, tudo ao mesmo tempo. Isso reduz a produtividade e causa perda de oportunidades.",
        solution:
          "Desenvolvimento de um copiloto inteligente para WhatsApp que automatiza o atendimento com foco em produtividade. O sistema lê mensagens em voz alta, permite respostas por comando de voz, cria lembretes automaticamente e organiza agendamentos e pedidos, reduzindo a necessidade de interação manual constante.",
        myRole:
          "Idealização do produto, planejamento, organização e desenvolvimento. Arquitetura do sistema, modelagem do banco de dados, construção da API, integração com WhatsApp e implementação dos módulos de voz (speech-to-text e text-to-speech), além do planejamento de escalabilidade da plataforma.",
        highlight:
          "<strong>⚡ Diferencial:</strong> Sistema orientado a voz que reduz interação manual, permitindo que o usuário opere o atendimento sem precisar tocar no celular constantemente.",
      },
      p3: {
        number: "Projeto 03",
        title: "Climatic Adventure: Jogo Educativo sobre Mudanças Climáticas",
        role: "Game Dev · Projeto Acadêmico · Hackathon NASA",
        problem:
          "A conscientização sobre mudanças climáticas ainda enfrenta desafios no ambiente educacional, especialmente na forma de engajar crianças e adolescentes. Métodos tradicionais nem sempre estimulam reflexão crítica ou interesse contínuo sobre o tema.",
        solution:
          "Desenvolvimento do jogo digital Climatic Adventure, uma experiência interativa baseada em decisões que impactam o mundo virtual. O jogador enfrenta situações do cotidiano relacionadas ao meio ambiente, aprendendo sobre o ODS 13 de forma lúdica, com feedback imediato e narrativa dinâmica.",
        myRole:
          "Desenvolvimento do jogo utilizando a engine Godot, definição das mecânicas de gameplay, implementação da lógica de decisões e construção da experiência do usuário. Participação na coleta e análise de dados para validação do impacto educacional do projeto.",
        highlight:
          "<strong>🌍 Impacto:</strong> 89,5% dos participantes relataram aprendizado sobre mudanças climáticas e 84,2% reconheceram o potencial do jogo para conscientização ambiental.",
      },
      p4: {
        number: "Projeto 04",
        title: "Automação de Afiliados com n8n",
        role: "Engenharia de Automação · Web Scraping · n8n",
        problem:
          "Encontrar e divulgar manualmente ofertas e produtos de afiliados consome muito tempo e não é escalável, resultando em perda de oportunidades de comissionamento diário.",
        solution:
          "Desenvolvimento de um pipeline de dados automatizado usando n8n que rastreia plataformas de afiliados, identifica as melhores ofertas com base em critérios de conversão e publica os links automaticamente em canais de divulgação (Telegram/WhatsApp).",
        myRole:
          "Criação do fluxo visual no n8n, integração via API com plataformas de produtos, manipulação de dados em JSON/JavaScript e configuração de webhooks para disparos automáticos nos canais de mensagem.",
        highlight:
          "<strong>⚙️ Eficiência:</strong> Fluxo 100% automatizado que trabalha 24/7, garantindo a curadoria e publicação das melhores ofertas sem necessidade de intervenção humana.",
      },
    },
    skills: {
      label: "02 — Competências",
      title: "Tecnologias & Skills",
      subtitle:
        "As habilidades que tenho lapidado ao longo da minha jornada como engenheiro de software.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        db: "Banco de Dados",
        automation: "Automação & IA",
        security: "Segurança",
        tools: "Ferramentas & Workflow",
      },
      items: {
        frontend: {
          1: "React.js",
          2: "DOM Manipulation",
          3: "CSS Avançado",
          4: "JavaScript",
          5: "UI/UX Responsivo",
        },
        backend: {
          1: "Node.js",
          2: "Websockets",
          3: "APIs REST",
        },
        db: {
          1: "PostgreSQL · Modelagem relacional",
          2: "SQL Server",
          3: "Supabase",
          4: "Estruturação de entidades e relacionamentos",
          5: "Persistência de dados para sistemas reais",
        },
        automation: {
          1: "Automação de tarefas",
          2: "Integração com IA",
          3: "Fluxos automatizados",
          4: "Lógica de processos",
          5: "Integração com APIs externas",
        },
        security: {
          1: "Testes de penetração",
          2: "Boas práticas de desenvolvimento seguro",
          3: "Proteção contra vulnerabilidades comuns",
          4: "Modelagem de ameaças",
          5: "Análise de vulnerabilidades",
          6: "Consciência sobre práticas de segurança",
        },
        tools: {
          1: "Git · GitHub · Versionamento",
          2: "NetBeans · IntelliJ · Android Studio · PyCharm · VSCode",
          3: "Figma · Trello · Jira · Notion",
          4: "Postman · Docker",
          5: "VirturalBox · Linux · Kali Linux · MetaSploit",
          6: "SQL Server Management Studio",
          7: "Integração com APIs externas",
          8: "Desenvolvimento incremental",
        },
      },
    },
    education: {
      label: "03 — Formação",
      title: "Educação & Certificações",
      degreeType: "🎓 Graduação",
      degreeName: "Engenharia de Software",
      degreeSchool: "Universidade do Estado do Pará — UEPA",
      degreeYear: "2022 – 2026",
      certsTitle: "Cursos & Certificados",
      areasTitle: "Disciplinas Dominadas",
      c1: {
        type: "🛡️ Cisco",
        title: "Introdução à Cibersegurança",
        school: "Networking Academy",
        year: "Conclusão: 10 Mai 2025",
      },
      c2: {
        type: "🌐 Cisco",
        title: "Noções Básicas de Rede",
        school: "Networking Academy",
        year: "Conclusão: 02 Out 2024",
      },
      c3: {
        type: "🔐 Cisco",
        title: "Segurança de Endpoint",
        school: "Networking Academy",
        year: "Conclusão: 14 Set 2024",
      },
      areas: {
        1: "<span>⚛️</span> React",
        2: "<span>🎨</span> Design UX/UI",
        3: "<span>🟩</span> Node.js",
        4: "<span>🤖</span> IA & Automação",
        5: "<span>🔐</span> Segurança",
      },
    },
    about: {
      label: "04 — Sobre",
      title: "Quem sou eu",
      p1: "Sou estudante de <span>Engenharia de Software</span> com foco em desenvolvimento web, construindo sistemas que vão além do código, eles são focados em resolver problemas reais e melhorar a rotina de quem usa.",
      p2: "Tenho experiência prática no desenvolvimento de aplicações completas, atuando desde a <span>modelagem de dados e arquitetura backend</span> até a criação de interfaces funcionais e objetivas. Já desenvolvi projetos envolvendo <span>automação de processos, sistemas orientados a eventos e interação por voz</span>.",
      p3: "Tenho interesse em <span>segurança de aplicações</span>, buscando reduzir falhas e aplicar boas práticas desde a construção do sistema. Também foco em soluções que aumentam produtividade, como automações e ferramentas que reduzem tarefas manuais no dia a dia.",
      p4: "Acredito que um bom sistema precisa ser <span>simples de usar, seguro, eficiente e sustentável a longo prazo</span>. Por isso, aplico boas práticas como organização modular, clareza de código, validação de dados e atenção à experiência do usuário desde o início.",
      p5: "Busco uma oportunidade para atuar no desenvolvimento de produtos reais, contribuindo com soluções práticas e evoluindo constantemente como desenvolvedor.",
      values: {
        product: {
          title: "Pensamento de produto",
          desc: "Não foco só no código, mas no problema. Estruturo soluções pensando em uso real, eficiência e impacto no dia a dia.",
        },
        automation: {
          title: "Automação",
          desc: "Interesse em sistemas que automatizam tarefas, processam eventos e reduzem trabalho manual.",
        },
        clean: {
          title: "Código limpo",
          desc: "Organização, legibilidade e manutenção são prioridade. Código bom é aquele que continua fácil de evoluir.",
        },
        security: {
          title: "Segurança",
          desc: "Preocupo-me em construir sistemas seguros, aplicando testes de penetção e boas práticas de desenvolvimento seguro.",
        },
        growth: {
          title: "Evolução constante",
          desc: "Busco evoluir na prática, construindo projetos reais e aprofundando conhecimentos técnicos continuamente.",
        },
      },
    },
    contact: {
      label: "05 — Contato",
      title: "Vamos conversar?",
      subtitle:
        "Estou aberto a oportunidades de emprego, freelance ou apenas uma boa troca de ideia sobre tecnologia.",
      email: "Email",
      copy: {
        label: "Email",
        success: "Copiado! ✓",
        error: "Erro ao copiar",
      },
    },
    footer: {
      text: 'Feito com cuidado · <span>Eduardo Patrick</span> · Engenharia de Software',
    },
  },
  en: {
    lang: { pt: "PT", en: "EN" },
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Open to opportunities",
      title: "Automation • Web Development • Security",
      desc:
        "Web developer focused on automation and secure development, building modern web applications with an emphasis on productivity and user experience. Like a samurai sharpening his sword, I seek mastery in every line of code.",
      ctaProjects: "View Projects →",
      ctaContact: "Get in touch",
      code: `
          <div class="code-dim">// dev.profile.js</div>
          <br>
          <div><span class="code-key">const</span> <span class="code-gold">dev</span> = {</div>
          <div>&nbsp;&nbsp;<span class="code-key">name</span>: <span class="code-str">"Eduardo Patrick"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">role</span>: <span class="code-str">"Full Stack Developer"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">focus</span>: <span class="code-str">"Web development"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">coreTech</span>: [<span class="code-str">"JavaScript"</span>, <span class="code-str">"React"</span>, <span class="code-str">"Node.js"</span>, <span class="code-str">"Python"</span>],</div>
          <div>&nbsp;&nbsp;<span class="code-key">edge</span>: <span class="code-str">"Building real projects with problem-solving focus"</span>,</div>
          <div>&nbsp;&nbsp;<span class="code-key">status</span>: <span class="code-gold">"Open to opportunities"</span>,</div>
          <div>};</div>
      `.trim(),
      stats: {
        years: "Years of study",
        tech: "Technologies",
        projects: "Real projects",
        curiosity: "Curiosity",
      },
    },
    projects: {
      label: "01 — Projects",
      title: "Solutions Built",
      subtitle:
        "Projects built with a real problem-solving mindset, strong engineering practices, and a focus on delivering value.",
      problem: "Problem",
      solution: "Solution",
      roleLabel: "My role",
      tech: "Tech",
      p1: {
        number: "Project 01",
        title: "Brotar+ · Digital Storefront Platform",
        role: "Capstone · Mobile · UX/UI",
        problem:
          "Vendors in a food distribution center in Pará face difficulties promoting their products, limiting customer reach and directly impacting sales. Low digital presence and reliance on local foot traffic reduce their competitiveness.",
        solution:
          'Built the <strong>Brotar+</strong> mobile app prototype focused on product showcase and sales support. Vendors can create digital storefronts, organize products, update prices, and connect directly with customers—expanding visibility online.',
        myRole:
          "User research (18 participants), Design Thinking, empathy mapping, requirements definition (user stories), UI prototyping in Figma, and building a functional prototype.",
        highlight:
          "<strong>📊 Results:</strong> Prototype validated with real users—considered intuitive and useful, with high intent to use and strong potential to expand sales and digital reach.",
      },
      p2: {
        number: "Project 02",
        title: "WhatsApp Copilot · Automation SaaS",
        role: "Full Stack · SaaS · Voice automation · Independent project",
        problem:
          "Small businesses using WhatsApp as their main sales channel face operational overload: manual replies, order organization, scheduling, and reminders—all at once. This reduces productivity and leads to missed opportunities.",
        solution:
          "Built an intelligent WhatsApp copilot that automates customer interactions with a productivity focus. It reads messages out loud, enables voice-command replies, creates reminders automatically, and organizes schedules and orders—reducing constant manual interaction.",
        myRole:
          "Product ideation, planning, and implementation: system architecture, database modeling, API building, WhatsApp integration, and voice modules (speech-to-text and text-to-speech), plus scalability planning.",
        highlight:
          "<strong>⚡ Differentiator:</strong> Voice-first workflow that reduces manual interaction, letting users operate without constantly touching the phone.",
      },
      p3: {
        number: "Project 03",
        title: "Climatic Adventure · Educational Game",
        role: "Game Dev · Academic project · NASA hackathon",
        problem:
          "Climate-change awareness still faces challenges in education, especially engaging children and teenagers. Traditional methods don’t always spark critical thinking or sustained interest.",
        solution:
          "Developed Climatic Adventure, an interactive decision-based game where choices impact the virtual world. Players face everyday environmental situations, learning about SDG 13 in a playful way with immediate feedback and dynamic storytelling.",
        myRole:
          "Developed the game in Godot, defined gameplay mechanics, implemented decision logic, and built the user experience. Participated in data collection and analysis to validate educational impact.",
        highlight:
          "<strong>🌍 Impact:</strong> 89.5% reported learning about climate change and 84.2% recognized the game’s potential for environmental awareness.",
      },
      p4: {
        number: "Project 04",
        title: "AffiliateFlow · Marketing Automation",
        role: "Automation Engineering · Web Scraping · n8n",
        problem:
          "Manually finding and promoting affiliate offers and products is time-consuming and unscalable, resulting in missed daily commission opportunities.",
        solution:
          "Developed an automated data pipeline using n8n that tracks affiliate platforms, identifies the best offers based on conversion criteria, and automatically publishes the links to broadcasting channels (Telegram/WhatsApp).",
        myRole:
          "Created the visual workflow in n8n, integrated product platforms via API, manipulated data using JSON/JavaScript, and configured webhooks for automated message dispatching.",
        highlight:
          "<strong>⚙️ Efficiency:</strong> A 100% automated flow that works 24/7, ensuring the curation and publication of the best offers without human intervention.",
      },
    },
    skills: {
      label: "02 — Skills",
      title: "Technologies & Skills",
      subtitle:
        "The skills I’ve been honing throughout my journey as a software engineer.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        db: "Databases",
        automation: "Automation & AI",
        security: "Security",
        tools: "Tools & Workflow",
      },
      items: {
        frontend: {
          1: "React.js",
          2: "DOM Manipulation",
          3: "Advanced CSS",
          4: "JavaScript",
          5: "Responsive UI/UX",
        },
        backend: {
          1: "Node.js",
          2: "Websockets",
          3: "REST APIs",
        },
        db: {
          1: "PostgreSQL · Relational modeling",
          2: "SQL Server",
          3: "Supabase",
          4: "Entity and relationship modeling",
          5: "Data persistence for real systems",
        },
        automation: {
          1: "Task automation",
          2: "AI integration",
          3: "Automated flows",
          4: "Process logic",
          5: "External API integration",
        },
        security: {
          1: "Penetration testing",
          2: "Secure development best practices",
          3: "Common vulnerability protection",
          4: "Threat modeling",
          5: "Vulnerability analysis",
          6: "Security practice awareness",
        },
        tools: {
          1: "Git · GitHub · Version control",
          2: "NetBeans · IntelliJ · Android Studio · PyCharm · VSCode",
          3: "Figma · Trello · Jira · Notion",
          4: "Postman · Docker",
          5: "VirtualBox · Linux · Kali Linux · Metasploit",
          6: "SQL Server Management Studio",
          7: "External API integrations",
          8: "Incremental development",
        },
      },
    },
    education: {
      label: "03 — Education",
      title: "Education & Certifications",
      degreeType: "🎓 Degree",
      degreeName: "Software Engineering",
      degreeSchool: "State University of Pará — UEPA",
      degreeYear: "2022 – 2026",
      certsTitle: "Courses & Certifications",
      areasTitle: "Mastered Disciplines",
      c1: {
        type: "🛡️ Cisco",
        title: "Introduction to Cybersecurity",
        school: "Networking Academy",
        year: "Completed: May 10, 2025",
      },
      c2: {
        type: "🌐 Cisco",
        title: "Networking Basics",
        school: "Networking Academy",
        year: "Completed: Oct 2, 2024",
      },
      c3: {
        type: "🔐 Cisco",
        title: "Endpoint Security",
        school: "Networking Academy",
        year: "Completed: Sep 14, 2024",
      },
      areas: {
        1: "<span>⚛️</span> React",
        2: "<span>🎨</span> UX/UI Design",
        3: "<span>🟩</span> Node.js",
        4: "<span>🤖</span> AI & Automation",
        5: "<span>🔐</span> Security",
      },
    },
    about: {
      label: "04 — About",
      title: "About me",
      p1: "I’m a <span>Software Engineering</span> student focused on web development, building systems that go beyond code—they solve real problems and improve users’ day-to-day.",
      p2: "I have hands-on experience delivering end-to-end applications, from <span>data modeling and backend architecture</span> to building objective, functional interfaces. I’ve built projects involving <span>process automation, event-driven systems, and voice interaction</span>.",
      p3: "I’m interested in <span>application security</span>, aiming to reduce flaws and apply best practices from the start. I also focus on productivity solutions—automations and tools that reduce manual work.",
      p4: "I believe good software should be <span>simple to use, secure, efficient, and sustainable long term</span>. That’s why I apply modular organization, clear code, data validation, and user experience from day one.",
      p5: "I’m looking for an opportunity to work on real products, contribute practical solutions, and keep evolving as a developer.",
      values: {
        product: {
          title: "Product mindset",
          desc: "I don’t focus only on code, but on the problem. I structure solutions for real usage, efficiency, and daily impact.",
        },
        automation: {
          title: "Automation",
          desc: "Interest in systems that automate tasks, process events, and reduce manual work.",
        },
        clean: {
          title: "Clean code",
          desc: "Organization, readability, and maintainability come first. Good code stays easy to evolve.",
        },
        security: {
          title: "Security",
          desc: "I care about building secure systems, applying penetration testing and secure development practices.",
        },
        growth: {
          title: "Continuous growth",
          desc: "I improve through practice—building real projects and deepening technical knowledge continuously.",
        },
      },
    },
    contact: {
      label: "05 — Contact",
      title: "Let’s talk?",
      subtitle:
        "I’m open to job opportunities, freelance work, or simply a good conversation about technology.",
      email: "Email",
      copy: {
        label: "Email",
        success: "Copied! ✓",
        error: "Copy failed",
      },
    },
    footer: {
      text: 'Crafted with care · <span>Eduardo Patrick</span> · Software Engineering',
    },
  },
};
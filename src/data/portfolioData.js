export const navigationLinks = [
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'competencias', label: 'Competencias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'certificacoes', label: 'Formacao' },
  { id: 'contato', label: 'Contato' },
];

export const profile = {
  name: 'Kaike Vitorino de Oliveira',
  role: 'Backend & IA aplicada',
  location: 'Brasilia, DF',
  summary:
    'Desenvolvedor Full Stack com foco principal em back-end, atuando em ambientes corporativos de alta criticidade, com destaque para integracoes robustas, observabilidade e arquitetura de sistemas.',
  intro:
    'Desenvolvo solucoes de alto impacto em Python, Go e Rust, com base em boas praticas de engenharia e operacao em producao. Minha principal diferenca é unir entrega de software robusto com visao de produto, confiabilidade e observabilidade.',
  ctas: {
    projects: '#projetos',
    github: 'https://github.com/Kaike-Vitorino',
    linkedin: 'https://www.linkedin.com/in/kaike-vitorino-de-oliveira',
    email: 'mailto:kaikevoliveira@gmail.com',
  },
  contact: {
    email: 'kaikevoliveira@gmail.com',
    phone: '(+55) 61 9 9938-3018',
    whatsapp: 'https://wa.me/5561999383018',
    linkedin: 'https://www.linkedin.com/in/kaike-vitorino-de-oliveira',
    github: 'https://github.com/Kaike-Vitorino',
  },
};

export const about = {
  headline: 'Engineering-first para produtos de impacto',
  body: [
    'Especialista em back-end com foco em sistemas corporativos, automacao operacional e integracao de plataformas complexas.',
    'Atuo no desenho e implantacao de solucoes em ambiente de producao, incluindo API design, dados transacionais, observabilidade e monitoramento de servicos.',
    'Tenho experiencia pratica com solucoes distribuidas e com IA aplicada, com destaque em raciocinio orientado a ferramentas, coordernacao de servicos internos e padronizacoes tecnicas.',
  ],
  focus: [
    {
      title: 'Backend & Arquitetura',
      description:
        'APIs, integracoes, modelos de dados e organizacao de servicos com foco em performance e confiabilidade.',
      metric: 'Python, Go, Rust, SQL, FastAPI, Flask, Django',
    },
    {
      title: 'Sistemas e Observabilidade',
      description: 'Monitoramento end-to-end com telemetria, logs estruturados, exporters e paineis em tempo real.',
      metric: 'Prometheus, Grafana, DB2, Docker, Kubernetes',
    },
    {
      title: 'IA aplicada',
      description:
        'Produtos de IA locais e orquestracao com controle de estado, automacao e integracao de agentes.',
      metric: 'LLMs, multi-provider runtime, automacao inteligente',
    },
  ],
};

export const experience = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Getronics - alocado no Banco do Brasil',
    period: 'Jan 2025 - Atual',
    summary:
      'Solucoes corporativas com foco em back-end, integracao de sistemas e estabilidade operacional no ambiente bancario.',
    achievements: [
      'Desenvolvimento de solucoes criticas em Python com integracao a DB2 e fluxos operacionais de alto volume.',
      'Implantacao de camadas de monitoramento com Prometheus e Grafana para analise proativa de incidentes.',
      'Padronizacao de logs, metricas e telemetria em ambientes Docker, Kubernetes e OpenShift.',
      'Construcao de rotinas de integracao, automacoes e apoio tecnico a desenvolvedores juniores.',
    ],
    tags: ['Python', 'DB2', 'Docker', 'Kubernetes', 'OpenShift', 'Prometheus', 'Grafana', 'Jenkins', 'GitLab CI', 'Argo CD'],
  },
  {
    role: 'Freelancer / Projetos proprios',
    company: 'Projetos pessoais e consultoria tecnica',
    period: 'Jul 2023 - Jan 2025',
    summary: 'Desenvolvimento de solucoes em back-end, integracao e exploracao de IA aplicada.',
    achievements: [
      'Entrega de APIs e automacoes em Python, Go e Rust com foco em modularizacao e manutenibilidade.',
      'Modelagem tecnica de aplicacoes com regras de negocio e fluxos de concorrencia.',
      'Exploracao de LLMs e ferramentas de orquestracao para produtos com valor tecnico real.',
    ],
    tags: ['Python', 'Go', 'Rust', 'Redis', 'Arquitetura modular', 'Observabilidade'],
  },
];

export const skills = [
  {
    category: 'Linguagens',
    items: ['Python', 'Go', 'Rust', 'SQL', 'JavaScript', 'Bash/PowerShell'],
  },
  {
    category: 'Back-end',
    items: ['FastAPI', 'Flask', 'Django', 'APIs REST', 'Automacao', 'Integracao corporativa'],
  },
  {
    category: 'Cloud / DevOps',
    items: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'GitLab CI', 'Argo CD', 'Git', 'Linux'],
  },
  {
    category: 'Dados',
    items: ['DB2', 'SQL', 'Modelagem relacional', 'Analise de dados'],
  },
  {
    category: 'Observabilidade',
    items: ['Prometheus', 'Grafana', 'Exporters customizados', 'Logs', 'Metricas', 'Telemetria'],
  },
  {
    category: 'Arquitetura',
    items: ['Microsservicos', 'Confiabilidade', 'Troubleshooting', 'Sistemas distribuidos'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'IA / Diferenciais',
    items: ['IA local-first', 'LLMs', 'Rust Desktop (Tauri)', 'Agentes', 'Tool-calling'],
  },
];

export const projects = [
  {
    title: 'MLX-Pilot',
    link: 'https://github.com/MLX-Pilot/MLX-Pilot',
    summary:
      'Plataforma local-first para orquestracao e execucao de LLMs com arquitetura modular, daemon HTTP em Rust e integracao de fornecedores como MLX, llama.cpp e Ollama.',
    stack: ['Rust', 'Tauri', 'Python', 'HTTP API', 'LLMs'],
    highlights: [
      'Arquitetura multi-provider para runtime de modelos.',
      'Catalogo de modelos e orquestracao de ferramentas.',
      'Politicas de seguranca e trilha de auditoria para execucao local.',
      'Produto com foco em IA aplicada e engenharia de sistemas robusta.',
    ],
    cover: 'mlx-pilot',
  },
  {
    title: 'IteraMindAI',
    link: 'https://github.com/Kaike-Vitorino/IteraMindAI',
    summary:
      'Sistema modular de IA com raciocinio iterativo para decomposicao de tarefas e orquestracao de agentes, com monitoramento em tempo real.',
    stack: ['Go', 'Python', 'Redis', 'Prometheus', 'Grafana', 'Observabilidade'],
    highlights: [
      'Arquitetura modular orientada a agentes e controle de estado.',
      'Decomposicao de tarefas e raciocinio iterativo.',
      'Observabilidade operacional para carga e desempenho.',
      'Integracao de runtimes e servicos para automacao inteligente.',
    ],
    cover: 'iteramind',
  },
  {
    title: 'Gerador de Ficha RPG Backend',
    link: 'https://github.com/Kaike-Vitorino/Gerador-De-Ficha-RPG-Backend',
    summary:
      'Back-end tecnico com foco em regra de negocio, estruturas de servico e consistencia de dominio para geracao de fichas com logica customizada.',
    stack: ['Python', 'Flask', 'Arquitetura de dominio', 'Modelagem'],
    highlights: [
      'Enfase em organizacao de regras e validacoes de dominio.',
      'Separacao clara entre validacao, servico e persistencia.',
      'Aplicado ao cenario interno com controle de regra e previsibilidade.',
    ],
    cover: 'rpg',
  },
  {
    title: 'MultiCore Scheduler',
    link: 'https://github.com/Kaike-Vitorino/MultiCore-Scheduler-SO4',
    summary:
      'Simulador de escalonamento multiprocessado para estudo de desempenho e concorrencia com foco em fairness, filas e desempenho de execucao.',
    stack: ['Rust', 'Concorrencia', 'Scheduler', 'Sistemas'],
    highlights: [
      'Modelagem de filas e politicas de escalonamento.',
      'Exploracao de paralelismo em multiplos nucleos.',
      'Projeto academico alinhado a fundamentos de engenharia de sistemas.',
      'Visao aplicada para cenarios de alta carga e escalabilidade.',
    ],
    cover: 'scheduler',
  },
];

export const education = [
  {
    degree: 'Bacharelado em Ciencia da Computacao',
    institution: 'Centro Universitario de Brasilia (CEUB)',
    period: 'Jan 2023 - Dez 2026 (prev.)',
  },
];

export const certifications = [
  'IBM - Full Stack Software Developer Assessment',
  'IBM - Introduction to Cloud Computing',
  'IBM - Introduction to Software Engineering',
  'IBM AI Engineering (em andamento)',
  'IBM Z Xplore - Concepts',
  'Fundacao Bradesco - Python Fundamentos',
  'Fundacao Bradesco - Python Avancado',
  'Software AG - NaturalONE',
  'Capacitacao Mainframe - COBOL, VSAM, DB2 e CICS',
];

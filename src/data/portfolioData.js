export const navigationLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'competencias', label: 'Competências' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'certificacoes', label: 'Certificações' },
  { id: 'contato', label: 'Contato' },
];

export const profile = {
  name: 'Kaike Vitorino de Oliveira',
  role: 'Backend Engineer • IA Aplicada • Sistemas Corporativos',
  location: 'Brasília, DF',
  summary:
    'Desenvolvedor Full Stack com foco principal em back-end, entregando serviços confiáveis para produção em ambientes corporativos com alta criticidade.',
  intro:
    'Atuo com Python, Go e Rust na construção de sistemas orientados a operação estável, observabilidade real e evolução de produto. Minha disciplina é unir engenharia sólida com visão de produto e impacto técnico mensurável.',
  ctas: {
    projects: '#projetos',
    github: 'https://github.com/Kaike-Vitorino',
    linkedin: 'https://www.linkedin.com/in/kaike-vitorino-de-oliveira',
    email: 'mailto:kaikevoliveira@gmail.com',
  },
  contact: {
    email: 'kaikevoliveira@gmail.com',
    phone: '(+55) 61 99383-018',
    whatsapp: 'https://wa.me/5561999383018',
    linkedin: 'https://www.linkedin.com/in/kaike-vitorino-de-oliveira',
    github: 'https://github.com/Kaike-Vitorino',
  },
};

export const about = {
  headline: 'Backend orientado a arquitetura, confiabilidade e produto.',
  body: [
    'Especialização em sistemas corporativos com integração de serviços, automação de fluxos e engenharia de ponta a ponta para produção.',
    'Atuação prática em observabilidade completa: métricas, logs estruturados, telemetria e monitoramento de serviços críticos.',
    'Interesse técnico forte em IA aplicada para produtos reais, com foco em ferramentas, agentes e arquiteturas locais com controle explícito de execução.',
  ],
  focus: [
    {
      title: 'Backend & Arquitetura',
      description:
        'APIs, modelagem de dados e estrutura de serviços com ênfase em segurança operacional, manutenção e evolução contínua.',
      metric: 'Python • Go • Rust • SQL • FastAPI • Flask • Django',
    },
    {
      title: 'Sistemas e Observabilidade',
      description:
        'Implementação de telemetria e padronização de monitoramento para reduzir tempo de resposta a incidentes.',
      metric: 'Prometheus • Grafana • Exporters customizados • Docker • Kubernetes',
    },
    {
      title: 'IA Aplicada',
      description:
        'Produtos locais e distribuídos com roteamento de runtime, estado controlado e orquestração de agentes.',
      metric: 'LLMs • Tool-calling • Rust Desktop (Tauri) • Redis',
    },
  ],
};

export const experience = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Getronics — alocado no Banco do Brasil',
    period: 'Jan 2025 - Atual',
    summary:
      'Atuação em soluções corporativas de alta criticidade, com foco em back-end, integração e estabilidade operacional.',
    achievements: [
      'Desenvolvimento de serviços em Python integrados a DB2, com foco em fluxos internos de produção.',
      'Implementação de estrutura de dados e monitoramento para análises operacionais de alto volume.',
      'Construção de exporters customizados e dashboards para Prometheus e Grafana.',
      'Padronização de logs, métricas e telemetria em ecossistema Docker, Kubernetes e OpenShift.',
      'Apoio técnico a desenvolvedores juniores e atuação ativa em troubleshooting de produção.',
    ],
    tags: ['Python', 'DB2', 'Docker', 'Kubernetes', 'OpenShift', 'Prometheus', 'Grafana', 'Jenkins', 'GitLab CI', 'Argo CD'],
  },
  {
    role: 'Freelancer / Projetos Próprios',
    company: 'Projetos pessoais e consultoria técnica',
    period: 'Jul 2023 - Jan 2025',
    summary:
      'Desenvolvimento de produtos próprios com foco em automação, arquiteturas modulares e integração de sistemas.',
    achievements: [
      'Entrega de APIs e serviços em Python, Go e Rust com foco em performance e manutenibilidade.',
      'Modelagem de aplicações com regras de negócio complexas e organização de domínio.',
      'Exploração de LLMs e automação com arquiteturas orientadas a agentes e observabilidade.',
    ],
    tags: ['Python', 'Go', 'Rust', 'Redis', 'Arquitetura modular', 'Observabilidade'],
  },
];

export const skills = [
  {
    category: 'Linguagens',
    items: ['Python', 'Go', 'Rust', 'SQL', 'JavaScript', 'Bash', 'PowerShell'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Flask', 'Django', 'APIs REST', 'Arquitetura de serviços', 'Integração corporativa'],
  },
  {
    category: 'Cloud / DevOps',
    items: ['Docker', 'Kubernetes', 'Red Hat OpenShift', 'Jenkins', 'GitLab CI', 'Argo CD', 'Git', 'Linux'],
  },
  {
    category: 'Dados',
    items: ['DB2', 'SQL', 'Modelagem relacional', 'Modelagem analítica', 'MongoDB'],
  },
  {
    category: 'Observabilidade',
    items: ['Prometheus', 'Grafana', 'Exporters', 'Logs estruturados', 'Métricas', 'Telemetria'],
  },
  {
    category: 'Arquitetura',
    items: ['Microserviços', 'Confiabilidade', 'Troubleshooting', 'Sistemas distribuídos'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'IA / Diferenciais',
    items: ['IA local-first', 'LLMs', 'Rust Desktop (Tauri)', 'Agentes', 'Tool-calling', 'Arquitetura de runtime'],
  },
];

export const projects = [
  {
    title: 'MLX-Pilot',
    link: 'https://github.com/MLX-Pilot/MLX-Pilot',
    summary:
      'Plataforma local-first para orquestração e execução de LLMs com daemon HTTP em Rust, catálogo de modelos e interface desktop via Tauri.',
    stack: ['Rust', 'Tauri', 'Python', 'HTTP API', 'LLMs'],
    highlights: [
      'Arquitetura multi-provider para MLX, llama.cpp e Ollama com roteamento controlado.',
      'Tool-calling e catálogo de modelos com trilha de auditoria e segurança operacional.',
      'Separação modular entre runtime, APIs e interface para evolução de produto.',
      'Projeto com forte foco em robustez e controle de execução local.',
    ],
    cover: 'mlxPilot',
    status: 'Ativo',
  },
  {
    title: 'IteraMindAI',
    link: 'https://github.com/Kaike-Vitorino/IteraMindAI',
    summary:
      'Sistema modular de IA com raciocínio iterativo para decomposição de tarefas, agentes e coordenação de runtime.',
    stack: ['Go', 'Python', 'Redis', 'Prometheus', 'Grafana'],
    highlights: [
      'Arquitetura orientada a agentes com controle de estado e memória operacional.',
      'Pipeline de raciocínio iterativo para dividir e resolver problemas complexos.',
      'Observabilidade integrada para monitorar desempenho e comportamento em produção.',
      'Alinhado a automação inteligente e engenharia de serviços distribuídos.',
    ],
    cover: 'iteraMind',
    status: 'Ativo',
  },
  {
    title: 'Gerador de Ficha RPG Backend',
    link: 'https://github.com/Kaike-Vitorino/Gerador-De-Ficha-RPG-Backend',
    summary:
      'Back-end técnico com foco em regras de negócio, validação de domínio e organização de fluxos de geração de ficha.',
    stack: ['Python', 'Flask', 'Arquitetura de domínio', 'Modelagem'],
    highlights: [
      'Modelagem orientada a domínio para reduzir acoplamento e aumentar previsibilidade.',
      'Camadas claras entre validação, regras, serviços e persistência.',
      'Implementação com forte atenção à consistência e evolução da lógica de negócio.',
    ],
    cover: 'rpg',
    status: 'Concluído',
  },
  {
    title: 'MultiCore Scheduler',
    link: 'https://github.com/Kaike-Vitorino/MultiCore-Scheduler-SO4',
    summary:
      'Simulador de escalonamento multiprocessado com foco em concorrência, fila de execução e decisões de política de scheduling.',
    stack: ['Rust', 'Concorrência', 'Scheduler', 'Sistemas'],
    highlights: [
      'Modelagem de filas e políticas de escalonamento com critérios de justiça.',
      'Simulação de paralelismo real em múltiplos núcleos.',
      'Demonstração prática de desempenho e comportamento sob carga.',
      'Base aplicada para decisões de arquitetura de sistemas de alta concorrência.',
    ],
    cover: 'scheduler',
    status: 'Concluído',
  },
];

export const education = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Centro Universitário de Brasília (CEUB)',
    period: 'Jan 2023 - Dez 2026 (previsão)',
  },
];

export const certifications = [
  'IBM — Full Stack Software Developer Assessment',
  'IBM — Introduction to Cloud Computing',
  'IBM — Introduction to Software Engineering',
  'IBM AI Engineering (em andamento)',
  'IBM Z Xplore — Concepts',
  'Fundação Bradesco — Python Fundamentos',
  'Fundação Bradesco — Python Avançado',
  'Software AG — NaturalONE',
  'Capacitação Mainframe — COBOL, VSAM, DB2 e CICS',
];

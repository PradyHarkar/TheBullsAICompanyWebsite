export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  gradient: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  source: string;
};

export const products: Product[] = [
  {
    slug: "data-fabric",
    name: "BullsAI Data Fabric",
    tagline: "Unified intelligence across every data source",
    description:
      "Connect, harmonise and govern your enterprise data at scale. BullsAI Data Fabric orchestrates Microsoft Fabric, Synapse, and Azure data services into a single semantic layer — with AI-powered lineage, quality, and discoverability built in.",
    icon: "Database",
    category: "Data Platform",
    features: [
      "Automated medallion architecture (Bronze → Silver → Gold)",
      "Real-time and batch pipeline orchestration",
      "AI-powered data quality and anomaly detection",
      "Enterprise-grade lineage and governance",
      "Native Microsoft Fabric and Synapse integration",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    slug: "sentinel",
    name: "BullsAI Sentinel",
    tagline: "Security intelligence that never sleeps",
    description:
      "Continuous AI-driven monitoring, threat detection, and compliance enforcement across your entire Azure estate. Sentinel operates overnight and flags risks before they become incidents.",
    icon: "Shield",
    category: "Security & Compliance",
    features: [
      "24/7 AI-powered threat detection",
      "Automated compliance reporting (ISO 27001, SOC 2, GDPR)",
      "Secret and credential leak detection in repos and wikis",
      "Cost and budget anomaly alerts",
      "Integrated incident response runbooks",
    ],
    gradient: "from-violet-600 to-purple-500",
  },
  {
    slug: "insights",
    name: "BullsAI Insights",
    tagline: "From raw data to board-ready decisions",
    description:
      "AI-augmented analytics and semantic modelling on top of your existing data warehouse. Ask questions in plain English and receive production-ready Power BI reports, KQL queries, and executive summaries.",
    icon: "BarChart3",
    category: "Analytics",
    features: [
      "Natural language to SQL and KQL",
      "Automated Power BI semantic model generation",
      "Predictive dashboards with confidence intervals",
      "Executive summary narration powered by Claude",
      "Scheduled insight delivery to Teams and email",
    ],
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    slug: "nexus",
    name: "BullsAI Nexus",
    tagline: "Enterprise API fabric with built-in AI",
    description:
      "Design, publish, and govern APIs at enterprise scale. Nexus layers AI-powered documentation, rate limiting, usage analytics, and versioning on top of Azure API Management — so your teams ship faster and break less.",
    icon: "Network",
    category: "Integration",
    features: [
      "AI-generated OpenAPI documentation",
      "Intelligent traffic shaping and throttling",
      "Real-time API health and SLA monitoring",
      "Developer portal with self-service onboarding",
      "Native Azure API Management integration",
    ],
    gradient: "from-orange-600 to-amber-500",
  },
  {
    slug: "canvas",
    name: "BullsAI Canvas",
    tagline: "Build AI agents without writing a single line",
    description:
      "A visual, no-code studio for designing, testing, and deploying multi-agent AI systems on Microsoft Azure. Drag, connect, and deploy — from prototype to production in hours.",
    icon: "Layers",
    category: "AI Platform",
    features: [
      "Visual agent workflow designer",
      "Pre-built connectors to Fabric, Synapse, and Azure AI",
      "One-click deployment to Azure Container Apps",
      "Built-in token and cost budgeting",
      "Version-controlled agent definitions",
    ],
    gradient: "from-pink-600 to-rose-500",
  },
  {
    slug: "flow",
    name: "BullsAI Flow",
    tagline: "Intelligent process automation at enterprise scale",
    description:
      "Replace brittle RPA bots with AI-native workflow automation. Flow understands context, adapts to exceptions, and integrates natively with your Microsoft 365 and Azure environment.",
    icon: "Zap",
    category: "Automation",
    features: [
      "Context-aware process automation",
      "Native Microsoft 365 and Teams integration",
      "Exception handling with AI triage",
      "Drag-and-drop workflow builder",
      "Full audit trail and compliance logging",
    ],
    gradient: "from-yellow-600 to-orange-500",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Anthropic Releases Claude 4 with Extended Reasoning Capabilities",
    summary:
      "The latest Claude model introduces extended thinking chains up to 200K tokens, setting a new benchmark for complex enterprise reasoning tasks including multi-step data analysis and code generation.",
    category: "Model Releases",
    date: "2026-06-20",
    readTime: "4 min",
    source: "Anthropic",
  },
  {
    id: "2",
    title: "Microsoft Fabric Becomes Generally Available Across All Azure Regions",
    summary:
      "Microsoft's unified data analytics platform reaches full global availability, bringing lakehouse, warehouse, real-time intelligence, and Power BI onto a single OneLake foundation.",
    category: "Microsoft",
    date: "2026-06-18",
    readTime: "3 min",
    source: "Microsoft Blog",
  },
  {
    id: "3",
    title: "OpenAI Partners with Accenture to Deploy GPT-5 in 500 Enterprises",
    summary:
      "A landmark $1.2B partnership will see GPT-5 embedded across Accenture's global consulting delivery, accelerating AI adoption for Fortune 500 clients in finance, healthcare, and manufacturing.",
    category: "Enterprise AI",
    date: "2026-06-15",
    readTime: "5 min",
    source: "Financial Times",
  },
  {
    id: "4",
    title: "The Rise of Agentic AI: How Multi-Agent Systems Are Replacing Single Models",
    summary:
      "Industry analysts report that enterprises are shifting from monolithic LLM deployments to orchestrated agent fleets, with companies like BullsAI and LangChain leading the architectural shift.",
    category: "Industry Trends",
    date: "2026-06-12",
    readTime: "6 min",
    source: "MIT Technology Review",
  },
  {
    id: "5",
    title: "EU AI Act Enforcement Begins: What Enterprises Need to Know",
    summary:
      "With the EU AI Act's high-risk AI provisions now enforceable, enterprises face mandatory risk assessments, human oversight requirements, and transparency obligations for AI systems in regulated sectors.",
    category: "Regulation",
    date: "2026-06-10",
    readTime: "7 min",
    source: "European Commission",
  },
  {
    id: "6",
    title: "Google DeepMind Achieves AGI Benchmark on Mathematical Reasoning",
    summary:
      "DeepMind's Gemini Ultra 2.0 scores 98.4% on the FrontierMath benchmark, the first AI system to surpass human expert performance on research-level mathematical problem sets.",
    category: "Research",
    date: "2026-06-08",
    readTime: "5 min",
    source: "DeepMind",
  },
];

export const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2.4 PB", label: "Data Processed Daily" },
  { value: "47", label: "Countries Deployed" },
];

export const testimonials = [
  {
    quote:
      "BullsAI Data Fabric cut our pipeline build time by 70%. What used to take weeks of engineering now deploys in hours with full governance.",
    name: "Sarah Chen",
    title: "CTO, Meridian Financial Group",
    avatar: "SC",
  },
  {
    quote:
      "Sentinel caught a credential leak in our dev repos before it hit production. The overnight watch literally saved us from a potential breach.",
    name: "James Okafor",
    title: "CISO, Apex Healthcare",
    avatar: "JO",
  },
  {
    quote:
      "BullsAI Canvas let our business analysts build and deploy AI agents without writing any code. The time-to-value was unlike anything we'd seen.",
    name: "Priya Nair",
    title: "Head of Digital Transformation, Veridian Logistics",
    avatar: "PN",
  },
];

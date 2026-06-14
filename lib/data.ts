export type ToolCategory = "AI Assistant" | "AI Writing" | "AI Image Generator" | "AI Video Generator" | "AI Coding" | "AI Marketing" | "AI Productivity" | "AI Education" | "AI Voice" | "AI Marketing Tools" | "AI Productivity Tools" | "AI Education Tools" | "AI Voice Tools" | "AI Assistant Tools";

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  price: string;
  pricingType: "Free" | "Freemium" | "Paid";
  link: string;
  rating: number;
  features: string[];
}

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI Assistant",
    description: "AI chatbot for writing, coding, and research.",
    price: "Free + $20/mo",
    pricingType: "Freemium",
    link: "https://chatgpt.com",
    rating: 5,
    features: ["Text generation", "Coding help", "Research", "Data analysis"]
  },
  {
    id: "claude",
    name: "Claude",
    category: "AI Assistant",
    description: "Helpful, harmless, and honest AI assistant by Anthropic.",
    price: "Free + $20/mo",
    pricingType: "Freemium",
    link: "https://claude.ai",
    rating: 4.8,
    features: ["Large context window", "Advanced reasoning", "Nuanced writing"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "AI Image Generator",
    description: "Produces incredibly stunning, highly detailed AI art and images.",
    price: "$10/mo",
    pricingType: "Paid",
    link: "https://midjourney.com",
    rating: 4.9,
    features: ["High realism", "Artistic styles", "Discord integration"]
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    category: "AI Image Generator",
    description: "Magic Design and image generation integrated directly into Canva.",
    price: "Free + Pro",
    pricingType: "Freemium",
    link: "https://canva.com",
    rating: 4.7,
    features: ["Text to image", "Magic Edit", "Template generation"]
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "AI Assistant",
    description: "Google's most capable AI model for text, code, and multimodal tasks.",
    price: "Free + Advanced",
    pricingType: "Freemium",
    link: "https://gemini.google.com",
    rating: 4.6,
    features: ["Google workspace integration", "Web access", "Multimodal"]
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "AI Coding",
    description: "The AI-first code editor built for pair programming.",
    price: "Free + $20/mo",
    pricingType: "Freemium",
    link: "https://cursor.com",
    rating: 4.9,
    features: ["Code generation", "Inline edits", "Chat within editor"]
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "AI Assistant",
    description: "AI search engine that provides cited answers to complex questions.",
    price: "Free + $20/mo",
    pricingType: "Freemium",
    link: "https://perplexity.ai",
    rating: 4.8,
    features: ["Live web search", "Precise citations", "Copilot queries"]
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "AI Education",
    description: "The AI community building the future. Models, datasets, and spaces.",
    price: "Free",
    pricingType: "Free",
    link: "https://huggingface.co",
    rating: 4.9,
    features: ["Open source models", "Datasets", "Hosting"]
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    category: "AI Image Generator",
    description: "Generate production-quality assets for your creative projects.",
    price: "Free tier + Paid",
    pricingType: "Freemium",
    link: "https://leonardo.ai",
    rating: 4.7,
    features: ["Model fine-tuning", "Canvas editor", "Fast generation"]
  },
  {
    id: "runway",
    name: "Runway",
    category: "AI Video Generator",
    description: "AI video creation platform for generating and editing videos using text and images.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://runwayml.com",
    rating: 4.8,
    features: ["Text to video", "Image to video", "Video editing", "AI effects"]
  },
  {
    id: "pika",
    name: "Pika",
    category: "AI Video Generator",
    description: "AI tool that creates and edits videos from text prompts and images.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://pika.art",
    rating: 4.7,
    features: ["Text to video", "Video animation", "AI effects", "Creative styles"]
  },
  {
    id: "synthesia",
    name: "Synthesia",
    category: "AI Video Generator",
    description: "Create AI avatar videos for training, marketing, and presentations.",
    price: "$22/mo",
    pricingType: "Paid",
    link: "https://synthesia.io",
    rating: 4.6,
    features: ["AI avatars", "Voice generation", "Multilingual videos"]
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "AI Video Generator",
    description: "AI video generator for avatars, marketing videos, and content creation.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://heygen.com",
    rating: 4.8,
    features: ["AI avatars", "Video translation", "Voice cloning"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "AI Coding",
    description: "AI pair programmer that helps developers write and understand code.",
    price: "$10/mo",
    pricingType: "Paid",
    link: "https://github.com/features/copilot",
    rating: 4.9,
    features: ["Code completion", "Code explanation", "Bug fixing", "Chat assistant"]
  },
  {
    id: "codeium",
    name: "Codeium",
    category: "AI Coding",
    description: "Free AI coding assistant for developers with autocomplete and chat.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://codeium.com",
    rating: 4.7,
    features: ["Autocomplete", "Code generation", "AI chat"]
  },
  {
    id: "tabnine",
    name: "Tabnine",
    category: "AI Coding",
    description: "AI coding assistant focused on secure enterprise development.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://tabnine.com",
    rating: 4.5,
    features: ["Code completion", "Private AI models", "Team coding"]
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    category: "AI Coding",
    description: "AI-powered coding environment for building apps quickly.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://replit.com",
    rating: 4.7,
    features: ["AI coding", "App generation", "Debugging", "Cloud IDE"]
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    category: "AI Coding",
    description: "AI tool that generates frontend UI components from text prompts.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://v0.dev",
    rating: 4.8,
    features: ["UI generation", "React components", "Frontend development"]
  },
  {
    id: "bolt",
    name: "Bolt.new",
    category: "AI Coding",
    description: "AI full-stack app builder that creates applications from prompts.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://bolt.new",
    rating: 4.8,
    features: ["Full-stack apps", "Code generation", "Instant preview"]
  },
  {
    id: "jasper-ai",
    name: "Jasper AI",
    category: "AI Marketing Tools",
    description: "AI marketing platform for creating content, campaigns, and brand messaging.",
    price: "$49/mo",
    pricingType: "Paid",
    link: "https://jasper.ai",
    rating: 4.7,
    features: ["Marketing copy", "Campaign creation", "Brand voice", "Content templates"]
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "AI Marketing Tools",
    description: "AI writing tool for marketing content, sales copy, and social media posts.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://copy.ai",
    rating: 4.6,
    features: ["Ad copy", "Email writing", "Social posts", "Sales content"]
  },
  {
    id: "surfer-seo",
    name: "Surfer SEO",
    category: "AI Marketing Tools",
    description: "AI SEO optimization tool for improving website content rankings.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://surferseo.com",
    rating: 4.7,
    features: ["SEO analysis", "Content optimization", "Keyword research"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "AI Productivity Tools",
    description: "AI assistant inside Notion for notes, writing, and productivity.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://notion.so/product/ai",
    rating: 4.8,
    features: ["AI notes", "Summarization", "Task management", "Writing help"]
  },
  {
    id: "grammarly-ai",
    name: "Grammarly AI",
    category: "AI Productivity Tools",
    description: "AI writing assistant for grammar, rewriting, and professional communication.",
    price: "Free + Premium",
    pricingType: "Freemium",
    link: "https://grammarly.com",
    rating: 4.7,
    features: ["Grammar correction", "AI writing", "Tone suggestions"]
  },
  {
    id: "zapier-ai",
    name: "Zapier AI",
    category: "AI Productivity Tools",
    description: "Automation platform using AI to connect and automate workflows.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://zapier.com",
    rating: 4.6,
    features: ["Workflow automation", "AI agents", "App integrations"]
  },
  {
    id: "coursera-ai",
    name: "Coursera AI",
    category: "AI Education Tools",
    description: "Online learning platform with AI courses and certifications.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://coursera.org",
    rating: 4.7,
    features: ["AI courses", "Certificates", "University programs"]
  },
  {
    id: "khanmigo",
    name: "Khanmigo",
    category: "AI Education Tools",
    description: "AI tutor created by Khan Academy for learning assistance.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://khanacademy.org/khanmigo",
    rating: 4.6,
    features: ["AI tutor", "Learning support", "Student guidance"]
  },
  {
    id: "quizlet-ai",
    name: "Quizlet AI",
    category: "AI Education Tools",
    description: "AI-powered learning and study assistant.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://quizlet.com",
    rating: 4.5,
    features: ["AI flashcards", "Study plans", "Practice tests"]
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "AI Voice Tools",
    description: "AI voice generation platform for realistic text-to-speech.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://elevenlabs.io",
    rating: 4.9,
    features: ["Voice cloning", "Text to speech", "AI narration"]
  },
  {
    id: "murf-ai",
    name: "Murf AI",
    category: "AI Voice Tools",
    description: "AI voice generator for videos, podcasts, and presentations.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://murf.ai",
    rating: 4.7,
    features: ["AI voices", "Voice editing", "Studio tools"]
  },
  {
    id: "speechify",
    name: "Speechify",
    category: "AI Voice Tools",
    description: "AI reading assistant that converts text into natural speech.",
    price: "Free + Premium",
    pricingType: "Freemium",
    link: "https://speechify.com",
    rating: 4.6,
    features: ["Text to speech", "Voice reading", "Accessibility"]
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    category: "AI Assistant Tools",
    description: "AI assistant integrated with Microsoft products and web search.",
    price: "Free + Pro",
    pricingType: "Freemium",
    link: "https://copilot.microsoft.com",
    rating: 4.7,
    features: ["AI chat", "Office integration", "Web answers"]
  },
  {
    id: "pi-ai",
    name: "Pi AI",
    category: "AI Assistant Tools",
    description: "Personal AI assistant designed for conversations and support.",
    price: "Free",
    pricingType: "Free",
    link: "https://pi.ai",
    rating: 4.5,
    features: ["Personal assistant", "Conversation", "Advice"]
  },
  {
    id: "character-ai",
    name: "Character AI",
    category: "AI Assistant Tools",
    description: "AI chatbot platform with customizable AI characters.",
    price: "Free + Premium",
    pricingType: "Freemium",
    link: "https://character.ai",
    rating: 4.6,
    features: ["AI characters", "Chatbots", "Roleplay"]
  }
];

export interface Prompt {
  id: string;
  title: string;
  category: string;
  content: string;
}

export const prompts: Prompt[] = [
  {
    id: "python-dev-interview",
    title: "Python Developer Interview",
    category: "ChatGPT Prompts",
    content: "Act as a senior Python developer. Ask me interview questions about Python architecture, common pitfalls, and asynchronous programming. Wait for my answers before asking the next question."
  },
  {
    id: "seo-blog-writer",
    title: "SEO Optimized Blog Post Writer",
    category: "Marketing Prompts",
    content: "Write a comprehensive, SEO-optimized blog post about [Topic]. Include an engaging intro, H2 and H3 headings, and naturally weave in the following keywords: [Keywords]. Conclude with a strong call to action."
  },
  {
    id: "code-reviewer",
    title: "Strict Code Reviewer",
    category: "Coding Prompts",
    content: "Act as a strict code reviewer. I will provide you with code snippets. You must find bugs, security vulnerabilities, and suggest performance optimizations and style improvements according to industry best practices."
  }
];

export interface Comparison {
  id: string;
  title: string;
  tools: string[];
  features: Array<{
    name: string;
    values: string[];
  }>;
}

export const comparisons: Comparison[] = [
  {
    id: "chatgpt-vs-claude-vs-gemini",
    title: "ChatGPT vs Claude vs Gemini",
    tools: ["ChatGPT", "Claude", "Gemini"],
    features: [
      { name: "Coding", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Writing", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Free Plan", values: ["Yes", "Yes", "Yes"] },
      { name: "Pricing", values: ["$20/mo", "$20/mo", "$20/mo"] },
      { name: "Best For", values: ["General Purpose", "Nuanced Writing", "Google Integrations"] }
    ]
  },
  {
    id: "midjourney-vs-leonardo",
    title: "Midjourney vs Leonardo AI",
    tools: ["Midjourney", "Leonardo AI"],
    features: [
      { name: "Realism", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Ease of Use", values: ["⭐⭐⭐ (Discord)", "⭐⭐⭐⭐⭐ (Web)"] },
      { name: "Free Plan", values: ["No", "Yes (Daily credits)"] },
      { name: "Custom Models", values: ["No", "Yes"] }
    ]
  }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const blogs: BlogPost[] = [
  {
    id: "top-20-ai-tools-for-students",
    title: "Top 20 AI Tools For Students",
    excerpt: "Discover the best AI applications to help you study faster, write better essays, and organize your academic life.",
    date: "2026-06-10",
    category: "Education"
  },
  {
    id: "best-ai-tools-for-developers",
    title: "Best AI Tools For Developers",
    excerpt: "From AI code editors to intelligent terminal assistants, here are the tools supercharging developer productivity.",
    date: "2026-06-05",
    category: "Coding"
  },
  {
    id: "ai-tools-save-10-hours",
    title: "AI Tools That Save 10 Hours Per Week",
    excerpt: "Automate boring tasks and reclaim your time with these everyday productivity AI assistants.",
    date: "2026-06-01",
    category: "Productivity"
  }
];

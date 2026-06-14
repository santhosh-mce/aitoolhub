export type ToolCategory = "AI Assistant" | "AI Writing" | "AI Image Generator" | "AI Video" | "AI Coding" | "AI Marketing" | "AI Productivity" | "AI Education" | "AI Voice";

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

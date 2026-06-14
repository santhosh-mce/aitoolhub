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
  },
  {
    id: "dall-e",
    name: "DALL-E",
    category: "AI Image Generator",
    description: "AI image generation tool by OpenAI for creating images from text prompts.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://openai.com/dall-e",
    rating: 4.7,
    features: ["Text to image", "Image editing", "Creative designs"]
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    category: "AI Image Generator",
    description: "Open source AI image generation model for creating custom images.",
    price: "Free",
    pricingType: "Free",
    link: "https://stability.ai",
    rating: 4.6,
    features: ["Open source", "Image generation", "Custom models"]
  },
  {
    id: "ideogram",
    name: "Ideogram AI",
    category: "AI Image Generator",
    description: "AI image generator focused on creative designs and text rendering.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://ideogram.ai",
    rating: 4.7,
    features: ["Text images", "Posters", "Creative artwork"]
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    category: "AI Image Generator",
    description: "Adobe AI tool for image generation and creative workflows.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://firefly.adobe.com",
    rating: 4.6,
    features: ["Generative fill", "Text effects", "Creative editing"]
  },
  {
    id: "descript",
    name: "Descript",
    category: "AI Video Generator",
    description: "AI video editor for podcasts, videos, and content creators.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://descript.com",
    rating: 4.7,
    features: ["Video editing", "Transcription", "AI voice"]
  },
  {
    id: "capcut-ai",
    name: "CapCut AI",
    category: "AI Video Generator",
    description: "AI powered video editor for social media creators.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://capcut.com",
    rating: 4.7,
    features: ["Auto captions", "AI effects", "Video templates"]
  },
  {
    id: "luma-ai",
    name: "Luma AI",
    category: "AI Video Generator",
    description: "AI video generation platform for realistic videos.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://lumalabs.ai",
    rating: 4.6,
    features: ["Text to video", "3D generation", "Video effects"]
  },
  {
    id: "windsurf",
    name: "Windsurf AI",
    category: "AI Coding",
    description: "AI coding editor that helps developers build software faster.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://windsurf.com",
    rating: 4.8,
    features: ["AI coding", "Code chat", "Project understanding"]
  },
  {
    id: "amazon-q",
    name: "Amazon Q Developer",
    category: "AI Coding",
    description: "AI assistant for software development by Amazon.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://aws.amazon.com/q/developer",
    rating: 4.5,
    features: ["Code generation", "AWS support", "Debugging"]
  },
  {
    id: "phind",
    name: "Phind",
    category: "AI Coding",
    description: "AI search assistant designed for developers.",
    price: "Free",
    pricingType: "Free",
    link: "https://phind.com",
    rating: 4.6,
    features: ["Coding answers", "Debug help", "Technical search"]
  },
  {
    id: "writesonic",
    name: "Writesonic",
    category: "AI Writing",
    description: "AI writing platform for blogs, marketing, and SEO content.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://writesonic.com",
    rating: 4.6,
    features: ["Blog writing", "SEO content", "AI articles"]
  },
  {
    id: "rytr",
    name: "Rytr",
    category: "AI Writing",
    description: "AI writing assistant for creating content quickly.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://rytr.me",
    rating: 4.5,
    features: ["Content writing", "Copywriting", "Templates"]
  },
  {
    id: "wordtune",
    name: "Wordtune",
    category: "AI Writing",
    description: "AI rewriting and writing improvement assistant.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://wordtune.com",
    rating: 4.5,
    features: ["Rewrite text", "Grammar", "Summaries"]
  },
  {
    id: "fathom",
    name: "Fathom AI",
    category: "AI Productivity Tools",
    description: "AI meeting assistant that records and summarizes meetings.",
    price: "Free",
    pricingType: "Free",
    link: "https://fathom.video",
    rating: 4.7,
    features: ["Meeting notes", "AI summaries", "Transcripts"]
  },
  {
    id: "otter-ai",
    name: "Otter AI",
    category: "AI Productivity Tools",
    description: "AI transcription tool for meetings and conversations.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://otter.ai",
    rating: 4.6,
    features: ["Transcription", "Meeting notes", "Voice capture"]
  },
  {
    id: "beautiful-ai",
    name: "Beautiful AI",
    category: "AI Productivity Tools",
    description: "AI presentation maker for creating professional slides.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://beautiful.ai",
    rating: 4.6,
    features: ["AI slides", "Templates", "Presentations"]
  },
  {
    id: "duolingo-max",
    name: "Duolingo Max",
    category: "AI Education Tools",
    description: "AI language learning assistant.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://duolingo.com",
    rating: 4.5,
    features: ["AI tutor", "Language practice", "Conversation"]
  },
  {
    id: "photomath",
    name: "Photomath",
    category: "AI Education Tools",
    description: "AI math solving assistant for students.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://photomath.com",
    rating: 4.7,
    features: ["Math solutions", "Step explanations", "Learning"]
  },
  {
    id: "speechgen",
    name: "SpeechGen",
    category: "AI Voice Tools",
    description: "AI text to speech generator with realistic voices.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://speechgen.io",
    rating: 4.5,
    features: ["Voice generation", "Multiple languages", "Audio export"]
  },
  {
    id: "openai",
    name: "OpenAI",
    category: "AI Assistant Tools",
    description: "AI research company providing ChatGPT, models, and AI APIs.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://openai.com",
    rating: 5,
    features: ["AI models", "API", "ChatGPT", "Image generation"]
  },
  {
    id: "meta-ai",
    name: "Meta AI",
    category: "AI Assistant Tools",
    description: "AI assistant by Meta integrated into social platforms.",
    price: "Free",
    pricingType: "Free",
    link: "https://meta.ai",
    rating: 4.5,
    features: ["AI chat", "Image creation", "Social integration"]
  },
  {
    id: "you-ai",
    name: "You.com AI",
    category: "AI Assistant Tools",
    description: "AI search engine with chatbot and productivity features.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://you.com",
    rating: 4.5,
    features: ["AI search", "Writing", "Research"]
  },
  {
    id: "copy-monkey",
    name: "CopyMonkey",
    category: "AI Marketing Tools",
    description: "AI tool for Amazon listing optimization and ecommerce copy.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://copymonkey.ai",
    rating: 4.4,
    features: ["Product listings", "SEO keywords", "Amazon optimization"]
  },
  {
    id: "adcreative",
    name: "AdCreative AI",
    category: "AI Marketing Tools",
    description: "AI platform for generating advertising creatives.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://adcreative.ai",
    rating: 4.6,
    features: ["Ad designs", "Marketing copy", "Analytics"]
  },
  {
    id: "brandmark",
    name: "Brandmark",
    category: "AI Marketing Tools",
    description: "AI logo and brand identity generator.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://brandmark.io",
    rating: 4.5,
    features: ["Logo design", "Brand kit", "Graphics"]
  },
  {
    id: "looka",
    name: "Looka",
    category: "AI Marketing Tools",
    description: "AI-powered logo and brand design platform.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://looka.com",
    rating: 4.6,
    features: ["Logo maker", "Brand assets", "Templates"]
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    category: "AI Image Generator",
    description: "AI background removal tool for images.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://remove.bg",
    rating: 4.7,
    features: ["Background removal", "Image editing", "API"]
  },
  {
    id: "clipdrop",
    name: "Clipdrop",
    category: "AI Image Generator",
    description: "AI image editing and generation tools.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://clipdrop.co",
    rating: 4.6,
    features: ["Cleanup", "Relight", "Image generation"]
  },
  {
    id: "playground-ai",
    name: "Playground AI",
    category: "AI Image Generator",
    description: "AI image creation and editing platform.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://playground.com",
    rating: 4.6,
    features: ["AI art", "Editing", "Design creation"]
  },
  {
    id: "kaiber",
    name: "Kaiber",
    category: "AI Video Generator",
    description: "AI video creation tool for artists and creators.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://kaiber.ai",
    rating: 4.5,
    features: ["Music videos", "Animation", "Video effects"]
  },
  {
    id: "invideo-ai",
    name: "InVideo AI",
    category: "AI Video Generator",
    description: "AI video maker for marketing and social content.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://invideo.io",
    rating: 4.6,
    features: ["Text to video", "Templates", "AI scripts"]
  },
  {
    id: "veed-ai",
    name: "VEED AI",
    category: "AI Video Generator",
    description: "Online AI video editor for creators.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://veed.io",
    rating: 4.6,
    features: ["Video editing", "Subtitles", "AI tools"]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "AI Writing",
    description: "AI writing assistant for improving communication.",
    price: "Free + Premium",
    pricingType: "Freemium",
    link: "https://grammarly.com",
    rating: 4.7,
    features: ["Grammar", "Rewrite", "Writing suggestions"]
  },
  {
    id: "quillbot",
    name: "QuillBot",
    category: "AI Writing",
    description: "AI paraphrasing and writing improvement tool.",
    price: "Free + Premium",
    pricingType: "Freemium",
    link: "https://quillbot.com",
    rating: 4.6,
    features: ["Paraphrasing", "Summaries", "Grammar"]
  },
  {
    id: "scalenut",
    name: "Scalenut",
    category: "AI Writing",
    description: "AI SEO content creation platform.",
    price: "Paid",
    pricingType: "Paid",
    link: "https://scalenut.com",
    rating: 4.5,
    features: ["SEO writing", "Keyword research", "Content planning"]
  },
  {
    id: "deepl",
    name: "DeepL",
    category: "AI Education Tools",
    description: "AI translation tool with high accuracy.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://deepl.com",
    rating: 4.8,
    features: ["Translation", "Writing", "Languages"]
  },
  {
    id: "gamma",
    name: "Gamma AI",
    category: "AI Productivity Tools",
    description: "AI tool for creating presentations and documents.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://gamma.app",
    rating: 4.7,
    features: ["AI presentations", "Documents", "Design"]
  },
  {
    id: "tome-ai",
    name: "Tome AI",
    category: "AI Productivity Tools",
    description: "AI storytelling and presentation creation tool.",
    price: "Free + Paid",
    pricingType: "Freemium",
    link: "https://tome.app",
    rating: 4.5,
    features: ["Slides", "Storytelling", "AI design"]
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
  },
  {
    id: "chatgpt-vs-perplexity",
    title: "ChatGPT vs Perplexity",
    tools: ["ChatGPT", "Perplexity"],
    features: [
      { name: "AI Chat", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Search Accuracy", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Coding", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Research", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Free Plan", values: ["Yes", "Yes"] },
      { name: "Best For", values: ["General AI Assistant", "AI Search & Research"] }
    ]
  },
  {
    id: "claude-vs-chatgpt",
    title: "Claude vs ChatGPT",
    tools: ["Claude", "ChatGPT"],
    features: [
      { name: "Writing", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Coding", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Long Documents", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Creativity", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Pricing", values: ["$20/mo", "$20/mo"] }
    ]
  },
  {
    id: "gemini-vs-chatgpt",
    title: "Gemini vs ChatGPT",
    tools: ["Gemini", "ChatGPT"],
    features: [
      { name: "Multimodal AI", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Coding", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Google Integration", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐"] },
      { name: "Writing", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Free Version", values: ["Yes", "Yes"] }
    ]
  },
  {
    id: "midjourney-vs-dalle",
    title: "Midjourney vs DALL-E",
    tools: ["Midjourney", "DALL-E"],
    features: [
      { name: "Image Quality", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Realistic Images", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Text Generation In Images", values: ["⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Ease Of Use", values: ["⭐⭐⭐", "⭐⭐⭐⭐⭐"] }
    ]
  },
  {
    id: "cursor-vs-github-copilot",
    title: "Cursor vs GitHub Copilot",
    tools: ["Cursor", "GitHub Copilot"],
    features: [
      { name: "Code Completion", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "AI Chat", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "IDE Integration", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Beginners", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Pricing", values: ["$20/mo", "$10/mo"] }
    ]
  },
  {
    id: "canva-ai-vs-midjourney",
    title: "Canva AI vs Midjourney",
    tools: ["Canva AI", "Midjourney"],
    features: [
      { name: "Design Templates", values: ["⭐⭐⭐⭐⭐", "⭐⭐"] },
      { name: "AI Art Quality", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Social Media Design", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐"] },
      { name: "Beginner Friendly", values: [ "⭐⭐⭐⭐⭐", "⭐⭐⭐"] }
    ]
  },
  {
    id: "elevenlabs-vs-murf",
    title: "ElevenLabs vs Murf AI",
    tools: ["ElevenLabs", "Murf AI"],
    features: [
      { name: "Voice Realism", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Voice Cloning", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"] },
      { name: "Podcast Creation", values: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] },
      { name: "Ease Of Use", values: ["⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"] }
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

const fs = require('fs');
let code = fs.readFileSync('lib/data.ts', 'utf8');

const replacement = `    ]
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
];`;

code = code.replace(/    \]\r?\n  \}\r?\n\];/s, replacement);
fs.writeFileSync('lib/data.ts', code);

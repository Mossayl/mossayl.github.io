const fs = require("fs/promises");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = "/Users/wangye/workspace/blog";
const OUT_ROOT = path.join(ROOT, "static/images/posts");

const sets = [
  {
    slug: "ai-become-yourself",
    kicker: "AI 分身 / SOUL.md / 自我认知",
    theme: { bg: "#f4f7f3", ink: "#14231e", accent: "#27694f", soft: "#dceadf", line: "#b9ccbf" },
    cards: [
      {
        file: "xhs-long-01-cover.png",
        type: "cover",
        label: "长文封面",
        title: ["让 AI 成为你的分身", "难的不是技术"],
        subtitle: "真正的分身，不是记住你的偏好，而是识别你自己都没意识到的模式",
        visual: "mirror",
      },
      {
        file: "xhs-long-02-framework.png",
        type: "framework",
        label: "三层解法",
        title: ["大家都在做同一件事", "让 AI 先认识你"],
        items: ["产品级 Memory", "CLAUDE.md / SOUL.md", "从行为中自动构建"],
        footer: "共同假设：你先知道自己是谁，然后告诉 AI",
      },
      {
        file: "xhs-long-03-questions.png",
        type: "questions",
        label: "自我认知",
        title: ["写 SOUL.md 前", "先问自己 3 个问题"],
        items: ["我在什么情况下会变慢？", "哪个习惯在帮我，哪个在骗我？", "我希望 AI 在什么时候打断我？"],
        footer: "写配置文件，本质上是一次把自己描述清楚的练习",
      },
      {
        file: "xhs-long-04-summary.png",
        type: "quote",
        label: "核心判断",
        title: ["不是你告诉 AI 你是谁", "而是 AI 从行为里看见你"],
        quote: "真正的分身不是记忆，是模式识别。",
        footer: "起点不是配置文件，而是愿意诚实地看自己一眼",
      },
    ],
  },
  {
    slug: "ai-delight-buddy-pet",
    kicker: "Buddy 宠物 / AI 产品的好玩",
    theme: { bg: "#f8f3ee", ink: "#271b15", accent: "#b3572d", soft: "#eed8c9", line: "#d7bba8" },
    cards: [
      {
        file: "xhs-long-01-cover.png",
        type: "cover",
        label: "长文封面",
        title: ["源代码泄漏后", "大家先玩一只宠物"],
        subtitle: "Claude Code 的 Buddy 说明：好玩是 AI 产品的必选项，不是边角料",
        visual: "pet",
      },
      {
        file: "xhs-long-02-buddy.png",
        type: "framework",
        label: "Buddy 系统",
        title: ["不是彩蛋", "是认真的产品工程"],
        items: ["18 物种 × 5 稀有度", "userId 哈希确定生成", "骨骼算法 + Claude 灵魂", "性格维度与社交货币"],
        footer: "Anthropic 在用做产品的严肃态度做“好玩”",
      },
      {
        file: "xhs-long-03-delight.png",
        type: "framework",
        label: "情感化设计",
        title: ["为什么好玩会赢", "因为它击中三层感受"],
        items: ["本能层：第一眼可爱", "行为层：陪你一起工作", "反思层：变成身份和谈资"],
        footer: "功能差异要深度使用才能感知，情感冲击一秒钟就够了",
      },
      {
        file: "xhs-long-04-summary.png",
        type: "quote",
        label: "产品建议",
        title: ["下次做产品规划", "留一行给好玩"],
        quote: "用户记住的不是你的功能，是你给他们的感受。",
        footer: "在 AI 能力趋同时，审美和人格会变成产品力",
      },
    ],
  },
  {
    slug: "ai-persona-lens-v2",
    kicker: "人格透镜 / 借用另一种认知视角",
    theme: { bg: "#f5f2f8", ink: "#24182e", accent: "#72539a", soft: "#e2d8ee", line: "#c5b5d5" },
    cards: [
      {
        file: "xhs-long-01-cover.png",
        type: "cover",
        label: "长文封面",
        title: ["让 AI 成为另一个自己", "人格透镜"],
        subtitle: "不是成为别人，而是借用另一种提问方式，更深地回到自己",
        visual: "lens",
      },
      {
        file: "xhs-long-02-problem.png",
        type: "quote",
        label: "问题",
        title: ["人格测试为什么没用", "因为描述不产生体验"],
        quote: "真正有价值的，是在真实决策时被不同视角打断。",
        footer: "标签没有摩擦力，体验才会改变行为",
      },
      {
        file: "xhs-long-03-lenses.png",
        type: "framework",
        label: "人格透镜",
        title: ["每种人格", "是一套信息处理优先级"],
        items: ["INTP：这个假设被验证过吗？", "ESTP：现在能做的最小行动是什么？", "INFP：这个功能对用户意味着什么？", "ENTJ-A：你到底在等什么？"],
        footer: "不是给答案，而是给你平时不会问自己的问题",
      },
      {
        file: "xhs-long-04-summary.png",
        type: "quote",
        label: "核心判断",
        title: ["AI 让借用别人的眼睛", "第一次变得安全"],
        quote: "不是逃离自己，是用绕路的方式，更深地回到自己。",
        footer: "危险是变成占星术；价值是在真实任务中改变提问方式",
      },
    ],
  },
];

function visualHtml(kind, theme) {
  if (kind === "mirror") {
    return `<div class="visual mirror"><div class="person">你</div><div class="glass"></div><div class="person ai">AI</div></div>`;
  }
  if (kind === "pet") {
    return `<div class="visual pet"><div class="ears"></div><div class="face"><span></span><span></span><b></b></div><div class="body">BUDDY</div></div>`;
  }
  if (kind === "lens") {
    return `<div class="visual lens"><div class="circle a">ENTJ</div><div class="circle b">INFP</div><div class="circle c">INFJ</div><div class="focus">问题</div></div>`;
  }
  return "";
}

function baseCss(t) {
  return `
    * { box-sizing: border-box; }
    body { margin:0; width:1080px; height:1440px; font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Microsoft YaHei",sans-serif; color:${t.ink}; background:${t.bg}; }
    .card { position:relative; width:1080px; height:1440px; overflow:hidden; padding:78px 76px 66px; background:
      linear-gradient(90deg, ${t.line}30 1px, transparent 1px) 0 0 / 72px 72px,
      linear-gradient(0deg, ${t.line}24 1px, transparent 1px) 0 0 / 72px 72px,
      ${t.bg}; }
    .frame { position:absolute; inset:42px; border:2px solid ${t.ink}; opacity:.14; }
    .top { position:relative; display:flex; justify-content:space-between; align-items:center; font-weight:800; color:${t.accent}; letter-spacing:2px; font-size:26px; }
    .pill { border:2px solid ${t.accent}; border-radius:999px; padding:10px 18px; font-size:23px; letter-spacing:1px; }
    .title { position:relative; margin-top:112px; font-weight:900; line-height:1.08; letter-spacing:0; }
    .title .line { font-size:78px; white-space:nowrap; }
    .cover .title .line { font-size:80px; }
    .bar { width:128px; height:12px; background:${t.accent}; margin:42px 0 34px; }
    .subtitle { position:relative; max-width:800px; font-size:34px; line-height:1.52; font-weight:600; opacity:.82; }
    .footer { position:absolute; left:76px; right:76px; bottom:56px; display:flex; align-items:center; justify-content:space-between; color:${t.accent}; font-size:21px; font-weight:800; letter-spacing:1px; }
    .dotline { flex:1; height:2px; margin:0 24px; background:repeating-linear-gradient(90deg, ${t.accent} 0 10px, transparent 10px 18px); opacity:.5; }
    .visual { position:absolute; left:76px; right:76px; bottom:150px; height:360px; }
    .mirror { display:flex; align-items:center; justify-content:center; gap:58px; }
    .mirror .person { width:210px; height:260px; border:5px solid ${t.accent}; border-radius:110px 110px 36px 36px; background:${t.soft}; display:flex; align-items:center; justify-content:center; font-size:52px; font-weight:900; }
    .mirror .ai { background:${t.accent}; color:${t.bg}; }
    .mirror .glass { width:210px; height:310px; border:8px solid ${t.accent}; border-radius:50%; background:linear-gradient(135deg, transparent 0 46%, ${t.accent} 46% 49%, transparent 49%); opacity:.78; }
    .pet { width:360px; left:50%; transform:translateX(-50%); }
    .pet .ears { position:absolute; left:62px; top:0; width:236px; height:100px; background:${t.accent}; clip-path:polygon(0 100%, 20% 0, 42% 100%, 58% 100%, 80% 0, 100% 100%); }
    .pet .face { position:absolute; left:34px; top:74px; width:292px; height:220px; border:6px solid ${t.accent}; border-radius:42px; background:${t.soft}; display:flex; gap:70px; align-items:center; justify-content:center; }
    .pet .face span { width:26px; height:26px; border-radius:50%; background:${t.ink}; }
    .pet .face b { position:absolute; left:132px; bottom:54px; width:28px; height:16px; border-radius:0 0 20px 20px; background:${t.accent}; }
    .pet .body { position:absolute; left:70px; top:306px; width:220px; height:70px; border:5px solid ${t.accent}; background:${t.accent}; color:${t.bg}; display:flex; align-items:center; justify-content:center; font-size:30px; font-weight:900; letter-spacing:2px; }
    .lens { display:flex; align-items:center; justify-content:center; }
    .lens .circle { position:absolute; width:260px; height:260px; border:6px solid ${t.accent}; border-radius:50%; background:${t.soft}; display:flex; align-items:center; justify-content:center; font-size:40px; font-weight:900; }
    .lens .a { left:128px; top:36px; } .lens .b { right:128px; top:36px; } .lens .c { left:50%; transform:translateX(-50%); bottom:10px; }
    .lens .focus { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:164px; height:164px; border-radius:50%; background:${t.accent}; color:${t.bg}; display:flex; align-items:center; justify-content:center; font-size:44px; font-weight:900; z-index:2; }
    .items { margin-top:78px; display:flex; flex-direction:column; gap:26px; }
    .item { border:4px solid ${t.accent}; background:${t.soft}; min-height:104px; display:flex; align-items:center; padding:0 34px; font-size:37px; line-height:1.25; font-weight:850; }
    .item .num { width:58px; height:58px; border-radius:50%; background:${t.accent}; color:${t.bg}; display:inline-flex; align-items:center; justify-content:center; margin-right:24px; font-size:28px; flex:0 0 auto; }
    .note { margin-top:42px; border-left:10px solid ${t.accent}; padding:18px 0 18px 28px; font-size:31px; line-height:1.45; font-weight:700; opacity:.84; }
    .quoteBox { margin-top:88px; border:5px solid ${t.accent}; background:${t.soft}; padding:54px 56px; min-height:360px; display:flex; align-items:center; }
    .quoteText { font-size:56px; line-height:1.22; font-weight:900; }
  `;
}

function cardHtml(set, card) {
  const t = set.theme;
  const title = card.title.map((line) => `<div class="line">${line}</div>`).join("");
  let body = "";
  if (card.type === "cover") {
    body = `<div class="title">${title}</div><div class="bar"></div><div class="subtitle">${card.subtitle}</div>${visualHtml(card.visual, t)}`;
  } else if (card.type === "framework" || card.type === "questions") {
    body = `<div class="title">${title}</div><div class="items">${card.items.map((item, i) => `<div class="item"><span class="num">${i + 1}</span>${item}</div>`).join("")}</div><div class="note">${card.footer}</div>`;
  } else {
    body = `<div class="title">${title}</div><div class="quoteBox"><div class="quoteText">${card.quote}</div></div><div class="note">${card.footer}</div>`;
  }
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><style>${baseCss(t)}</style></head><body><div class="card ${card.type}"><div class="frame"></div><div class="top"><div>${set.kicker}</div><div class="pill">${card.label}</div></div>${body}<div class="footer"><span>Eileen Notes</span><div class="dotline"></div><span>小红书长文配图</span></div></div></body></html>`;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1440 }, deviceScaleFactor: 1 });
  for (const set of sets) {
    const outDir = path.join(OUT_ROOT, set.slug);
    await fs.mkdir(outDir, { recursive: true });
    for (const card of set.cards) {
      await page.setContent(cardHtml(set, card), { waitUntil: "networkidle" });
      await page.screenshot({ path: path.join(outDir, card.file), type: "png" });
    }
  }
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

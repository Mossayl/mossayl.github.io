const fs = require("fs/promises");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = "/Users/wangye/workspace/blog";
const OUT_ROOT = path.join(ROOT, "static/images/posts");

const cards = [
  {
    slug: "ai-agent-war-big-tech-trap",
    file: "xhs-note-01-cover.png",
    kicker: "AI AGENT",
    title: ["大厂做不好 Agent", "不是因为没人懂模型"],
    subtitle: "真正的负债，是组织把产品、数据、模型拆开了",
    label: "01 / 组织陷阱",
    theme: "green",
    motif: "flywheel",
  },
  {
    slug: "ai-agent-war-big-tech-trap",
    file: "xhs-note-02-cover.png",
    kicker: "AI STARTUP",
    title: ["AI 应用创业", "先算清 token 账本"],
    subtitle: "模型公司少一层 API 成本，应用层必须吃透工作流",
    label: "02 / 成本困局",
    theme: "red",
    motif: "ledger",
  },
  {
    slug: "token-economics-model-valuation",
    file: "xhs-note-01-cover.png",
    kicker: "TOKEN ECONOMICS",
    title: ["AI 公司估值", "本质是在定价 token"],
    subtitle: "公司价值 = token 产能 × token 质量 × 市场份额",
    label: "03 / 估值框架",
    theme: "blue",
    motif: "factory",
  },
  {
    slug: "token-economics-model-valuation",
    file: "xhs-note-02-cover.png",
    kicker: "AI WORK",
    title: ["工资 奖金 期权", "还有 token 预算"],
    subtitle: "高水平工程师的 token 账单，反而应该越来越高",
    label: "04 / 工作方式",
    theme: "amber",
    motif: "budget",
  },
  {
    slug: "who-can-build-cowork-in-china",
    file: "xhs-note-01-cover.png",
    kicker: "AI PRODUCT",
    title: ["Agent 产品", "不是传统 PM 做出来的"],
    subtitle: "Builder + 模型直觉 + 工作流体感，三者缺一不可",
    label: "05 / 人才画像",
    theme: "purple",
    motif: "builder",
  },
  {
    slug: "who-can-build-cowork-in-china",
    file: "xhs-note-02-cover.png",
    kicker: "COWORK IN CHINA",
    title: ["中国做 CoWork", "缺的不是 idea"],
    subtitle: "功能能模仿，真正难复制的是判断和闭环速度",
    label: "06 / 国内断层",
    theme: "slate",
    motif: "gap",
  },
  {
    slug: "eileen",
    file: "xhs-note-01-cover.png",
    kicker: "EILEEN",
    title: ["不是你问 AI", "而是 AI 反过来问你"],
    subtitle: "把一句模糊的“我想要”，追问成可执行方案",
    label: "07 / 主动需求澄清",
    theme: "cyan",
    motif: "conversation",
  },
];

const themes = {
  green: { bg: "#f4f7f0", ink: "#13261e", accent: "#246b4b", accent2: "#d7e7d9", line: "#b8c9bd" },
  red: { bg: "#f8f3f1", ink: "#2d1715", accent: "#a5392c", accent2: "#ecd1c8", line: "#d7b7ae" },
  blue: { bg: "#f0f5f8", ink: "#102436", accent: "#255f91", accent2: "#d6e4ef", line: "#b3c7d7" },
  amber: { bg: "#f8f4ea", ink: "#2b2110", accent: "#9a641f", accent2: "#eadbb7", line: "#d7c69b" },
  purple: { bg: "#f5f2f8", ink: "#24182e", accent: "#6f4d91", accent2: "#dfd4ea", line: "#c4b2d3" },
  slate: { bg: "#f3f5f5", ink: "#172223", accent: "#3d656a", accent2: "#d2dedf", line: "#aebfc1" },
  cyan: { bg: "#eff7f7", ink: "#102626", accent: "#167070", accent2: "#cae6e5", line: "#a7cccc" },
};

function motifHtml(kind, t) {
  if (kind === "flywheel") {
    return `
      <div class="motif flywheel">
        <div>产品</div><span></span><div>数据</div><span></span><div>模型</div>
      </div>`;
  }
  if (kind === "ledger") {
    return `
      <div class="motif ledger">
        <div><b>模型公司</b><span>推理成本</span></div>
        <div><b>应用公司</b><span>API + 推理 + 支付</span></div>
      </div>`;
  }
  if (kind === "factory") {
    return `
      <div class="motif factory">
        <div class="chimney"></div><div class="roof"></div>
        <div class="body"><span>TOKEN</span><span>TOKEN</span><span>TOKEN</span></div>
      </div>`;
  }
  if (kind === "budget") {
    return `
      <div class="motif budget">
        <div>工资</div><div>奖金</div><div>期权</div><div class="hot">TOKEN</div>
      </div>`;
  }
  if (kind === "builder") {
    return `
      <div class="motif builder">
        <div>Builder</div><span>+</span><div>模型直觉</div><span>+</span><div>工作流体感</div>
      </div>`;
  }
  if (kind === "gap") {
    return `
      <div class="motif gap">
        <div class="block left">功能模仿</div><div class="void"></div><div class="block right">判断闭环</div>
      </div>`;
  }
  return `
    <div class="motif conversation">
      <div class="bubble user">我想做一个工具</div>
      <div class="bubble ai">为什么？给谁用？下一步是什么？</div>
    </div>`;
}

function html(card) {
  const t = themes[card.theme];
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; }
  body { margin: 0; width: 1080px; height: 1440px; font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif; background: ${t.bg}; color: ${t.ink}; }
  .card { position: relative; width: 1080px; height: 1440px; overflow: hidden; padding: 86px 78px 72px; background:
    linear-gradient(90deg, ${t.line}33 1px, transparent 1px) 0 0 / 72px 72px,
    linear-gradient(0deg, ${t.line}28 1px, transparent 1px) 0 0 / 72px 72px,
    ${t.bg}; }
  .frame { position:absolute; inset: 46px; border: 2px solid ${t.ink}; opacity: .16; }
  .top { display:flex; align-items:center; justify-content:space-between; font-size: 27px; letter-spacing: 3px; font-weight: 700; color: ${t.accent}; }
  .label { padding: 12px 18px; border: 2px solid ${t.accent}; border-radius: 999px; font-size: 24px; letter-spacing: 1px; }
  .title { margin-top: 150px; font-weight: 900; letter-spacing: 0; line-height: 1.08; }
  .title div { font-size: 82px; white-space: nowrap; }
  .bar { width: 132px; height: 12px; margin: 48px 0 36px; background: ${t.accent}; }
  .subtitle { width: 800px; font-size: 34px; line-height: 1.55; font-weight: 550; color: ${t.ink}; opacity: .82; }
  .motif { position: absolute; left: 78px; right: 78px; bottom: 120px; min-height: 292px; }
  .flywheel { display:flex; align-items:center; justify-content:space-between; }
  .flywheel div { width: 238px; height: 238px; border: 4px solid ${t.accent}; border-radius: 50%; display:flex; align-items:center; justify-content:center; font-size: 44px; font-weight: 850; background:${t.accent2}; }
  .flywheel span { width: 110px; height: 4px; background:${t.accent}; position:relative; }
  .flywheel span:after { content:""; position:absolute; right:-4px; top:-10px; border-left: 22px solid ${t.accent}; border-top:12px solid transparent; border-bottom:12px solid transparent; }
  .ledger { display:grid; grid-template-columns: 1fr 1fr; gap: 30px; }
  .ledger div { min-height: 260px; border: 4px solid ${t.accent}; background:${t.accent2}; padding: 34px; display:flex; flex-direction:column; justify-content:space-between; }
  .ledger b { font-size: 44px; } .ledger span { font-size: 34px; line-height:1.35; }
  .factory { height: 292px; position:relative; border-bottom: 18px solid ${t.accent}; }
  .factory .chimney { position:absolute; left:70px; top:26px; width:78px; height:116px; background:${t.accent}; }
  .factory .roof { position:absolute; left:0; right:0; top:120px; height:80px; background: repeating-linear-gradient(135deg, ${t.accent} 0 38px, ${t.accent2} 38px 76px); clip-path: polygon(0 100%, 14% 0, 27% 100%, 40% 0, 53% 100%, 66% 0, 79% 100%, 92% 0, 100% 100%); }
  .factory .body { position:absolute; left:0; right:0; bottom:0; height:118px; background:${t.accent2}; border:4px solid ${t.accent}; display:flex; gap:28px; align-items:center; justify-content:center; }
  .factory span { border:3px solid ${t.accent}; padding:16px 22px; font-size:31px; font-weight:800; background:${t.bg}; }
  .budget { display:grid; grid-template-columns: repeat(4, 1fr); gap: 18px; align-items:end; }
  .budget div { height: 190px; border:4px solid ${t.accent}; background:${t.accent2}; display:flex; align-items:center; justify-content:center; font-size:36px; font-weight:850; }
  .budget .hot { height: 292px; background:${t.accent}; color:${t.bg}; }
  .builder { display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 18px; align-items:center; }
  .builder div { min-height: 230px; border:4px solid ${t.accent}; background:${t.accent2}; display:flex; align-items:center; justify-content:center; text-align:center; font-size:37px; line-height:1.2; font-weight:850; padding:20px; }
  .builder span { font-size:56px; color:${t.accent}; font-weight:900; }
  .gap { display:grid; grid-template-columns: 1fr 120px 1fr; gap: 0; align-items:center; }
  .gap .block { height: 230px; border:4px solid ${t.accent}; background:${t.accent2}; display:flex; align-items:center; justify-content:center; font-size:42px; font-weight:850; }
  .gap .void { height: 292px; border-left: 5px dashed ${t.accent}; border-right: 5px dashed ${t.accent}; transform: skewX(-8deg); }
  .conversation { display:flex; flex-direction:column; gap: 24px; justify-content:center; }
  .bubble { max-width: 760px; border:4px solid ${t.accent}; background:${t.accent2}; padding: 28px 34px; font-size: 38px; font-weight:800; line-height:1.25; border-radius: 28px; }
  .bubble.ai { margin-left: 120px; background:${t.accent}; color:${t.bg}; }
  .footer { position:absolute; left:78px; right:78px; bottom:58px; display:flex; justify-content:space-between; align-items:center; font-size:22px; color:${t.accent}; font-weight:750; letter-spacing:1px; }
  .dotline { flex:1; height:2px; margin:0 24px; background: repeating-linear-gradient(90deg, ${t.accent} 0 10px, transparent 10px 18px); opacity:.55; }
</style>
</head>
<body>
  <div class="card">
    <div class="frame"></div>
    <div class="top"><div>${card.kicker}</div><div class="label">${card.label}</div></div>
    <div class="title">${card.title.map((line) => `<div>${line}</div>`).join("")}</div>
    <div class="bar"></div>
    <div class="subtitle">${card.subtitle}</div>
    ${motifHtml(card.motif, t)}
    <div class="footer"><span>Eileen Notes</span><div class="dotline"></div><span>AI / Product / Work</span></div>
  </div>
</body>
</html>`;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1440 }, deviceScaleFactor: 1 });
  for (const card of cards) {
    const outDir = path.join(OUT_ROOT, card.slug);
    await fs.mkdir(outDir, { recursive: true });
    await page.setContent(html(card), { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outDir, card.file), type: "png" });
  }
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

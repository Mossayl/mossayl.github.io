---
title: "AI Agent 战争：大厂的组织陷阱、创业公司的成本困局与模型公司的终局优势"
date: 2026-03-19
draft: false
tags: ["AI", "agent", "organization", "startup", "business-model"]
summary: "大厂的组织架构正在成为 AI Agent 时代最大的负债。应用层创业公司的账本算不过来。真正的 OpenClaw 机会属于具备应用能力的模型公司。"
cover:
  image: ""
  alt: ""
  hidden: true
---

<style>
.lang-toggle{display:flex;gap:8px;margin-bottom:1.5em}
.lang-btn{padding:6px 16px;border:1px solid #888;border-radius:4px;cursor:pointer;background:transparent;font-size:14px;transition:all .2s}
.lang-btn.active{background:#333;color:#fff;border-color:#333}
.dark .lang-btn.active{background:#ddd;color:#111;border-color:#ddd}
.lang-section{display:none}
.lang-section.active{display:block}
</style>

<div class="lang-toggle">
  <button class="lang-btn active" onclick="switchLang('zh')">中文</button>
  <button class="lang-btn" onclick="switchLang('en')">English</button>
</div>

<div id="lang-zh" class="lang-section active">

> 一个收入 5000 块的人，是否愿意为 agent 帮他点一顿饭付费 2 元，还是会为 agent 帮他整理客户名单付费 5 元？

这个问题的答案，决定了 AI Agent 这场战争的终局形态。

---

## 一、大厂的组织架构正在成为最大的负债

大厂过去十年的组织模式，培养了三类人：做产品的、做数据的、训模型的。他们各自精通，但几乎没有人同时具备**模型训练视角**（知道什么数据能让模型在特定场景下表现更好）、**数据策略视角**（知道怎么从业务场景中提炼高质量训练信号）、**Agent 产品构建视角**（知道用户的工作流长什么样，harness 该怎么设计）。

豆包、元宝、通义千问——它们的组织架构都是产品线、数据线、模型线分得干干净净。但 Agent 时代需要的不是拼凑三条线的产出，而是一个人（或极小团队）**同时看到三层，做出一体化判断**。

更致命的是中高层的认知锁死。他们理解 DAU、留存、广告变现，但 Agent 产品的逻辑完全不同：

- **旧逻辑**：掌握分发渠道 → 喂内容 → 留用户 → 卖广告
- **新逻辑**：构建 solid harness → 适配模型能力 → 留住工作流 → 从生产力提升中收费

少数有视野的年轻人要花大量精力**向上说服**而非向下执行。一个错误决策消耗半年，外面的模型公司已经迭代三轮。

以 Claude Code 为例，Agent 的进化是一个闭环：观察用户工作流 → 设计 harness 抽象 → 收集执行数据 → 模型针对性优化 → 回到产品层验证。产品、数据、模型是同一个飞轮的三个齿轮。大厂把三个齿轮放在三个部门，中间隔着汇报线、KPI 墙和信息壁垒。

---

## 二、应用层创业公司的成本困局

一个残酷的算术题——模型公司只需支付推理和支付通道成本，而独立创业公司还要额外支付模型调用费用，这是**永远无法消除的成本劣势**。更深层的问题：没有自己的业务数据做 benchmark，无法通过 RL 强化高价值场景能力，你永远只是模型公司能力边界内的搬运工。

Manus 卖身 Meta，就是这个逻辑的验证。一直用 Claude 的模型，你能做出好产品，但**挣不了钱**——因为 Claude 自己可以做同样的事，成本更低。

应用层创业公司的出路需要同时满足：**出海**（海外客单价高）、**幸运**（赶上模型公司暂不下场的垂直场景）、**速度**（在模型公司反应前建立切换成本）。三者同时满足的概率极低。

---

## 三、分发渠道没有想象中重要

一个反直觉的判断：**微信生态、阿里生态的分发优势，在 Agent 时代可能没那么重要。**

Agent 的核心价值在**生产力**，不在生活便利。一个人花 1 小时在美团上选餐厅——他真的需要 AI 压缩到 5 分钟吗？点餐本身就是消遣。但如果 agent 能帮他整理客户名单、完成周报、把 3 小时文档工作压缩到 20 分钟——**他会付费**，因为这直接等于多赚了 2.5 小时工资。

Claude Code 是一个惊人的产品。它的"问题"是门槛高。但换个角度：**如果 agent 真的能帮你完成 2 小时的工作，你会介意花 2 分钟打开某个 APP 远程操控吗？**

真正的生产力工具不需要分发渠道加持。用户会主动找到它，就像程序员找 GitHub、设计师找 Figma。

---

## 四、Token 价格可能上涨

一个被低估的风险：基础设施供给跟不上需求。电力短缺、芯片产能紧张（H200/B200 交付以季度计）、GPU 实例价格未降、存储需求指数增长——这些硬约束正在**拉平**模型应用的增长曲线。

Token 价格上涨意味着时间窗口进一步收紧，留给应用层创业公司的空间更小，拥有自研模型和优化能力的公司优势更大。

---

## 五、四个判断

**一、OpenClaw 的机会属于具备应用能力的模型公司。** Google、Claude、OpenAI、Kimi、DeepSeek、MiniMax、豆包——同时拥有模型能力和应用构建能力的公司，才是真正的 Agent 战争玩家。

**二、复合型人才是最稀缺的资源。** 同时具备模型训练、数据策略、用户心智理解力的人是关键变量。他们需要知道最重要的工作流在模型层面该如何优化。这种人才几乎只能在年轻一代中产生。

**三、大厂比自己想象中更危险。** 模型进化和组织人才进化同时发生。跨部门、跨层级的组织设计在 Agent 时代变得极其愚蠢。生态的价值取决于用户愿意为什么付费，而不是你有多少用户。

**四、时间窗口正在收紧。** 基础设施硬约束正在拉平增长曲线。越早建立数据飞轮和工作流粘性的公司，越有可能在窗口关闭前站稳。

---

*写于 2026 年 3 月 19 日*

</div>

<div id="lang-en" class="lang-section">

> Would a person earning ¥5,000/month pay ¥2 for an agent that orders food, or ¥5 for one that organizes their client list?

The answer to this question determines the endgame of the AI Agent war.

---

## 1. Big Tech's Organizational Architecture Is Becoming Its Biggest Liability

Over the past decade, big tech companies cultivated three types of talent: product people, data people, and model people. Each excels in their domain, but almost no one possesses all three perspectives simultaneously — **model training** (knowing what data improves model performance in specific scenarios), **data strategy** (extracting high-quality training signals from business contexts), and **agent product building** (understanding user workflows and how to design the harness).

Douyin/ByteDance, Tencent's Yuanbao, Alibaba's Tongyi Qwen — their org charts split product, data, and model lines cleanly apart. But the Agent era doesn't need outputs from three lines stitched together. It needs one person (or a tiny team) **seeing all three layers at once, making integrated decisions**.

Worse, senior management's cognition is locked in. They understand DAU, retention, ad monetization — last era's core competencies. But Agent products follow entirely different logic:

- **Old logic**: Control distribution → Feed content → Retain users → Sell ads
- **New logic**: Build solid harness → Adapt model capabilities → Retain workflows → Charge for productivity gains

The few young people with this vision spend their energy **persuading upward** instead of executing downward. One bad decision burns six months — while model companies outside have iterated three times.

Using Claude Code as an example, Agent evolution is a closed loop: observe user workflows → design harness abstractions → collect execution data → optimize models for specific scenarios → validate at the product layer. Product, data, and model are three gears of the same flywheel. Big tech puts them in three departments, separated by reporting lines, KPI walls, and information silos.

---

## 2. Application-Layer Startups Can't Make the Math Work

A brutal arithmetic problem — model companies only pay for inference and payment processing costs. Independent startups must additionally pay model API fees — a **permanently insurmountable cost disadvantage**. Deeper still: without your own business data for benchmarks, unable to RL-optimize for high-value scenarios, you're forever a porter within model companies' capability boundaries.

Manus selling to Meta validates this logic. Using Claude's models, you can build good products, but you **can't make money** — because Claude can do the same thing at lower cost.

Application-layer startups need all three simultaneously: **going global** (higher willingness to pay overseas), **luck** (finding a vertical where model companies won't compete directly), and **speed** (building switching costs before model companies react). The probability of all three? Extremely low.

---

## 3. Distribution Channels Are Overrated

A counter-intuitive take: **WeChat's ecosystem, Alibaba's ecosystem — their distribution advantages may not matter much in the Agent era.**

Agent's core value lies in **productivity**, not lifestyle convenience. Someone spending an hour browsing restaurant reviews on Meituan — do they really need AI to compress that to 5 minutes? Browsing is entertainment. But if an agent can organize their client list, automate weekly reports, compress 3 hours of document work to 20 minutes — **they'll pay**, because it directly equals 2.5 extra hours of wages.

Claude Code is a remarkable product. Its "problem" is a high barrier to entry. But flip it: **if an agent can genuinely complete 2 hours of your work, would you mind spending 2 minutes opening an app to control it remotely?**

Real productivity tools don't need distribution channel support. Users will find them on their own, just as developers find GitHub and designers find Figma.

---

## 4. Token Prices May Rise

An underestimated risk: infrastructure supply can't keep up with demand. Power shortages, tight chip capacity (H200/B200 deliveries measured in quarters), GPU instance prices not declining, exponentially growing storage needs — these hard constraints are **flattening** the growth curve of model applications.

Rising token prices mean tightening time windows, less room for application-layer startups, and greater advantages for companies with in-house models and optimization capabilities.

---

## 5. Four Conclusions

**One: The OpenClaw opportunity belongs to model companies with application capabilities.** Google, Anthropic, OpenAI, Kimi, DeepSeek, MiniMax, Doubao — companies with both model and application-building capabilities are the real Agent war players.

**Two: Compound talent is the scarcest resource.** People with model training, data strategy, AND user psychology understanding are the key variable. They need to know how to optimize the most important workflows at the model level. This talent almost exclusively comes from the younger generation.

**Three: Big tech is more vulnerable than it thinks.** Model evolution and organizational talent evolution are happening simultaneously. Cross-department, cross-hierarchy org designs are becoming extremely foolish in the Agent era. An ecosystem's value depends on what users will pay for, not how many users you have.

**Four: The time window is closing.** Infrastructure constraints are flattening the growth curve. Companies that build data flywheels and workflow stickiness earliest will be most likely to hold ground before the window shuts.

---

*Written March 19, 2026*

</div>

<script>
function switchLang(lang){document.querySelectorAll('.lang-section').forEach(s=>s.classList.remove('active'));document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));document.getElementById('lang-'+lang).classList.add('active');document.querySelector('[onclick="switchLang(\''+lang+'\')"]').classList.add('active')}
</script>

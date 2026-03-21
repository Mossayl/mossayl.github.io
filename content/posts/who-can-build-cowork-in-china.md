---
title: "谁能在中国做出 CoWork？从三个产品负责人的画像说起"
date: 2026-03-21
draft: false
tags: ["AI", "agent", "cowork", "product", "talent"]
summary: "Claude Code、Cowork、Codex 三个产品的负责人都不是传统 PM。从他们的背景推导：能做好通用工作流 Agent 产品的人，到底长什么样？"
cover:
  image: ""
  alt: ""
  hidden: true
---

> CoWork 类产品的核心不是 idea，是做它的人。

---

## 一、三个产品，三个人

2026 年上半年，全球最重要的三个工作流 Agent 产品分别是 Claude Code、Claude Cowork 和 OpenAI Codex。它们背后的负责人，背景截然不同，但有一个共同点——**都不是传统意义上的产品经理。**

### Cat Wu — Claude Code, Head of Product

Cat Wu 在 Anthropic 负责 Claude Code。她曾短暂加入 Cursor 两周后回到 Anthropic，这件事本身就说明她对"在哪里做"有极强的判断力。

在 Claude Code 团队内部，角色边界正在模糊：设计师写代码，工程师做产品决策，PM 做原型和 evals。Cat Wu 的角色不是写 PRD 让人去执行，而是在模型能力快速变化时**创造清晰度**——让团队知道该做什么、为什么做、先做哪个。

Claude Code 的 run-rate 收入已超过 25 亿美元。

### Felix Rieseberg — Claude Cowork, Engineering Lead

Felix 的背景是纯工程师：Oxford → Microsoft → Slack → Stripe → Notion，是 Electron 的核心维护者。他不是被安排去做 Cowork 的——Cowork 的诞生来自一个观察：很多用户在用 Claude Code 做非代码的知识工作。

Cowork 只用了一周半搭出来。Felix 说，他们"花更多时间在产品和架构决策上，而不是写代码"。一个工程师背景的人说出这句话，说明他理解产品决策在 Agent 产品中的权重。

### Alexander Embiricos — Codex, Product Lead

Alexander 的路径是最不典型的：Stanford CS → 投行（Credit Suisse）→ 咨询（BCG）→ Harvard MBA → Dropbox PM → 创业 5 年做 pair programming 协作工具（Remotion/Multi）→ OpenAI。

他对"人和 AI 怎么一起工作"这件事有 5 年的创业体感。不是从论文里学的，是亲手做了 5 年、失败过、又回来做的。

---

## 二、规律：什么样的人能做好这件事

把三个人放在一起看，浮现出一个清晰的画像：

**第一，他们都能自己 build。** Cat Wu 做原型和 evals，Felix 本身就是工程师，Alexander 创业 5 年亲手做产品。没有人只写文档让别人执行。在 Agent 产品中，PM 不能只定义问题——你必须能亲手验证解法，因为模型能力在快速变化，纸面上的设计三天就过时了。

**第二，他们对"模型能做什么"有直觉。** 这不是读 release notes 就能获得的理解。Cat Wu 的工作包括做 evals，Felix 在 Anthropic 内部用 Claude Code 搭 Cowork，Alexander 在 OpenAI 直接接触模型能力的边界。他们每天都在模型能力的边界上工作，知道哪些事情现在能做、哪些差一步、哪些方向是死路。

**第三，他们对"人怎么工作"有长期积累。** Felix 做了多年桌面应用（Slack、Notion），理解人在电脑前的真实工作流。Alexander 花 5 年做协作工具，理解人和人之间、人和工具之间的协作摩擦。这种理解不是用户调研能替代的——是长时间泡在场景里形成的体感。

**总结成一句话：Builder + 模型直觉 + 工作流体感。三者缺一不可。**

传统 PM 通常缺前两个。纯工程师通常缺第三个。模型研究员三个都缺。

---

## 三、国内的断层

对照这个画像看国内，断层是明显的。

**豆包**：产品负责人从流量投放背景转来。豆包是流量导向的产品，用户量大，但工作流深度有限。用旧逻辑做新产品，天花板很快会到。

**腾讯元宝**：由原腾讯会议负责人操盘。会议产品和 Agent 产品的能力模型完全不同——前者是工具优化，后者是工作流重构。

**MiniMax**：重心仍在模型追赶上，产品层创新基因不足。

**Kimi**：有探索意愿，但产品线分散——Chatbot、Code、Sling、Clone 各自独立。这种分散恰恰说明缺少一个对 Agent 产品有整体判断的人，能把力量集中在一个方向上打穿。

不是说国内没有聪明人。而是现有的组织架构和人才流动模式，很难产出上面那种画像的人。大厂把产品、工程、模型分得太开，年轻人在其中很难同时积累三种能力。

---

## 四、时间线推演

基于以上判断，对国内出现 CoWork 类产品的时间线做一个粗略推演：

**3个月内（2026年Q2）**：会冒出一批产品，大多是对 Claude Code / Cowork 的表面模仿。能跑通基本功能，但 harness 设计粗糙，skill 体系缺失，用户留存差。

**3-6个月（2026年Q2-Q3）**：如果有一个小公司或模型公司内部的小团队，能集中资源、由一个同时理解模型和工作流的人主导，有可能做出可用的版本。这个"可用"不是说完美，是说能真正提升某一类人的工作效率。

**6个月以后（2026年Q4）**：大厂开始跟进。但大厂的跟进大概率是组织驱动而非产品驱动——先立项、分工、评审、排期，真正上线还要再等一两个季度。

**制约因素**：算力分配是一个被低估的变量。CoWork 类产品的 token 消耗是普通对话的 10-50 倍（多 Agent 并发），在算力紧张的环境下，大厂会优先保 B 端 API 收入和 C 端 DAU，新产品线很难拿到足够配额。

---

## 五、一个开放问题

如果上面的画像是对的——Builder + 模型直觉 + 工作流体感——那么这样的人在国内会从哪里来？

不太可能从大厂的产品线里长出来，因为现有分工不允许一个人同时接触模型层和用户层。

更可能的路径是：一个在模型公司或 AI 创业公司待过的人，自己深度使用过这些工具，对工作流有长期观察，同时有足够的工程能力或技术判断力去验证想法。

这样的人现在可能还在某个地方积累，还没有被看到。但当窗口打开的时候，能拿出东西的人会非常少。

---

*写于 2026 年 3 月 21 日。这是一个持续更新的分析——后续会拆解 Cat Wu、Felix、Alexander 以及 Noha 等人的访谈，补充更多细节。*

*参考资料：*
- *[Cat Wu - Product management on the AI exponential](https://claude.com/blog/product-management-on-the-ai-exponential)*
- *[Felix Rieseberg - Why Anthropic Thinks AI Should Have Its Own Computer](https://www.latent.space/p/felix-anthropic)*
- *[Alexander Embiricos - Why humans are AI's biggest bottleneck](https://www.lennysnewsletter.com/p/why-humans-are-ais-biggest-bottleneck)*
- *[How Claude Code is built - Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built)*

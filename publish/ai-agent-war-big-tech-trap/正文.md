---
title: "AI Agent 战争：大厂的组织陷阱、创业公司的成本困局与模型公司的终局优势"
date: 2026-03-19
draft: false
tags: ["AI", "agent", "organization", "startup", "business-model"]
summary: "大厂的问题不是没有懂模型的人，而是组织架构让懂的人也做不出正确决策。应用层创业公司面临结构性成本劣势。Agent 时代的机会正在向具备应用能力的模型公司集中。"
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

这个问题的答案，可能决定了 AI Agent 这场战争最终的形态。

---

## 一、大厂的组织架构正在成为沉重的负债

大厂过去十年的组织模式，培养了三类人：做产品的、做数据的、训模型的。他们各自精通，但很少有人同时具备三种视角——**模型训练**（知道什么数据能让模型在特定场景下表现更好）、**数据策略**（知道怎么从业务场景中提炼高质量训练信号）、**Agent 产品构建**（知道用户的工作流长什么样，harness 该怎么设计）。

豆包、元宝、通义千问——它们的组织架构都是产品线、数据线、模型线分得干干净净。在传统互联网时代，这很合理。但 Agent 时代需要的不是拼凑三条线的产出，而是一个人（或极小团队）**同时看到三层，做出一体化判断**。

这里需要澄清一个常见误解：**大厂的问题不是没有懂模型的人**。字节的朱文佳、阿里的周靖人、百度整个管理层都有深厚的模型背景。真正的问题是——**组织架构让懂的人也做不出正确决策**。当产品、数据、模型分属不同 VP 管辖，中间隔着汇报线、KPI 墙和信息壁垒，即使个体有全局视野，决策也会在组织摩擦中被稀释、延迟、扭曲。

与此同时，产品逻辑正在发生根本性转变：

- **旧逻辑**：掌握分发渠道 → 喂内容 → 留用户 → 卖广告
- **新逻辑**：构建 solid harness → 适配模型能力 → 留住工作流 → 从生产力提升中收费

大多数大厂中高层的认知框架还停留在旧逻辑里。少数有视野的年轻人要花大量精力**向上说服**，而非向下执行。一个错误决策消耗半年，外面的模型公司已经迭代了三轮。

以 Claude Code 为例，Agent 的进化是一个紧密的闭环：观察用户工作流 → 设计 harness 抽象 → 收集执行数据 → 模型针对性优化 → 回到产品层验证。产品、数据、模型是同一个飞轮的三个齿轮，任何一个齿轮独立转动都很难产生价值。而大厂的组织设计，恰恰把三个齿轮放在了三个部门里。

---

## 二、应用层创业公司面临结构性成本劣势

一个值得认真算的账：模型公司（OpenAI、Anthropic、Kimi、DeepSeek、MiniMax）只需支付推理和支付通道成本，而独立创业公司还要额外支付模型 API 调用费用。这是一层**很难消除的结构性成本劣势**。

Cursor 和 Perplexity 是常被用来反驳这个观点的例子——它们没有自己的模型，但估值很高。这说明在模型之上构建足够厚的产品层、积累足够强的用户心智，确实可以创造价值。但需要注意：它们的成功依赖于极强的产品能力和恰好合适的时间窗口，而且至今**盈利能力仍是问号**。随着模型公司自己的应用层越做越好（Claude 的 Artifacts、ChatGPT 的 Canvas），这条路的空间在持续收窄。

更深层的问题在于数据飞轮。如果不能用自己的业务数据做 benchmark，不能通过 RL 强化 agent 在高价值场景的能力，不能持续提高每个 token 的质量——那你在与模型公司的竞争中，始终处于一个不对称的位置。这不意味着完全没有机会，但意味着你需要在产品层建立起**模型公司短期内不愿或不会亲自下场做的壁垒**。

Manus 卖身 Meta，某种程度上反映了这种压力——虽然具体原因可能更复杂。

应用层创业公司如果想突围，大概率需要：**出海**（海外市场付费意愿更强）、**垂直深耕**（找到模型公司暂不覆盖的场景）、以及**速度**（在窗口关闭前建立切换成本）。这些条件同时满足并不容易，但也不是不可能——关键在于对时机和场景的判断。

---

## 三、分发渠道的价值需要重新评估

一个值得讨论的判断：**传统互联网生态（微信、支付宝、淘宝）的分发优势，在 Agent 时代的价值可能被高估了。**

这个判断有一个前提：Agent 最大的付费意愿来自**生产力场景**，而非生活便利场景。

想想看：一个人花 1 小时在美团上反复比价选餐厅——他真的迫切需要 AI 把这个过程压缩到 5 分钟吗？对很多人来说，浏览本身就是消遣。但如果 agent 能帮他整理客户名单、自动完成周报、把 3 小时文档工作压缩到 20 分钟——**他大概率愿意付费**，因为省下的时间直接等于多赚的工资。

当然，这不意味着分发渠道完全不重要。在 C 端市场，尤其是面向小商户、下沉市场的场景，微信生态的触达能力仍然是决定性的。但在专业生产力工具领域，用户会主动寻找最好的解决方案——就像程序员找 GitHub、设计师找 Figma，分发渠道的权重会显著降低。

Claude Code（以及即将到来的 cowork 模式）是一个很好的例证。它的门槛确实高，但换个角度想：**如果一个 agent 真的能帮你完成 2 小时的工作，你会介意花 2 分钟打开某个 APP 远程操控它吗？** 对于真正的生产力工具，用户的容忍度远比我们想象的高。

---

## 四、Token 成本的不确定性

关于 token 价格的走向，市场上有两股相反的力量在拉锯：

**向下的力量**：模型蒸馏、量化、MoE 架构等推理效率优化在持续推进，过去两年 token 单价已经下降了 10-50 倍。

**向上的力量**：电力短缺加剧、芯片产能紧张（H200/B200 交付周期以季度计）、GPU 实例价格未见显著下降、模型规模和上下文窗口增长带来的存储压力——这些基础设施的硬约束正在拖慢供给侧的扩张。

我倾向于认为：token 价格的**下降速度会放缓**，甚至在某些高质量模型上出现阶段性上涨。如果这个判断成立，它意味着所有玩家的试错空间都在缩小——对应用层创业公司尤其不利，而拥有自研模型和端到端优化能力的公司，优势会进一步放大。

---

## 五、时间窗口到底有多短

一个直觉判断：**Agent 战争的用户心智争夺窗口大概只有 12-18 个月。** 到 2027 年中，头部 2-3 个 Agent 产品会基本锁定格局。

这比移动互联网时代快得多。微信打赢 IM 战争花了 2-3 年（2011-2013），那个时代变量少，本质就是谁先铺网络效应。Agent 时代的窗口更短，原因有三：

**模型能力迭代太快。** 半年一个代际跃迁，产品层的先发优势很容易被模型层的能力跳变抹平。你今天做的最好的 RAG 方案，明年可能被原生长上下文直接替代。

**当前切换成本极低。** 用户的工作流数据还没有被真正锁住，换一个 agent 的迁移成本几乎为零。但这个窗口正在关闭——一旦用户在某个平台上积累了 skills、memory、工作习惯，迁移成本就会急剧上升。

**所有玩家都是重量级。** 不像当年微信 vs 米聊是大厂 vs 创业公司。现在是 OpenAI vs Anthropic vs Google，全是弹药充足的选手。2026 下半年各家的 agent 产品会密集发布——Claude cowork、OpenAI operator 进化、Google 的 agent 平台——这会加速用户心智的锁定。

在这个时间尺度下，一些当前的明星公司可能面临很大压力。以 Perplexity 为例，它的核心价值是"AI 搜索"，但这恰好是每个模型公司都在做、而且做得越来越好的功能。Claude 的 web search、ChatGPT 的搜索、Gemini 的搜索都在快速追上。Perplexity 的壁垒本质上是搜索结果的排序质量和引用体验——这不够厚。它最可能的结局是被收购（团队和品牌有价值），或者被逐渐边缘化为小众工具。

Cursor 的处境稍好，因为代码场景的工作流更深、IDE 本身是重产品、切换成本更高。但如果 Claude Code 的 cowork 模式做到位，Cursor 的压力也不小。

**1 年后回头看，赢家大概率不是"模型最好的"，而是"工作流锁定最深的"。** 这就是为什么 Claude 做 memory + skills + hooks 这套体系、OpenAI 做 GPTs + plugins 这套体系——大家抢的是同一个东西：让用户的工作习惯长在你的平台上。

---

## 六、被低估的变量

上面的分析有一个危险：它可能太自洽了。任何看起来逻辑完整的框架，都值得主动寻找它的盲区。以下是几个可能动摇前述判断的变量。

### 开源模型的搅局能力

前面的分析几乎没有提到 Llama、Qwen、Mistral 这条线。这是一个重大遗漏。

如果开源模型在 agent 场景的能力追到闭源的 80-90%（目前大概 60-70%），"模型公司有结构性优势"的逻辑会被显著动摇。因为任何团队都可以基于开源模型 + 自己的业务数据做 RL 微调，应用层创业公司的成本劣势会大幅缩小——你不再需要为每次 API 调用付费给 OpenAI 或 Anthropic。

Meta 投入巨资做 Llama 的战略意图正是如此：**把模型层变成公共基础设施，让价值回到应用层。** 如果 Llama 4 在 agent 场景表现足够好，前面"创业公司账本算不过来"这个判断可能需要大幅修正。这是整篇文章最大的摆动因素。

### 企业市场的不同节奏

12-18 个月锁定用户心智，这对个人用户市场可能成立。但企业市场完全是另一个时间尺度。

企业采购有安全审核、合规评估、定制化部署、预算周期——这些流程本身就需要 6-12 个月。Salesforce、ServiceNow、微软这类公司的 agent 产品虽然不性感，但可能在企业市场闷声赚大钱。企业市场的战争窗口更可能是 3-5 年，而且壁垒一旦建立，比 C 端深得多。

这意味着：即使 C 端格局在 2027 年基本锁定，B 端的竞争才刚刚开始。对创业公司来说，B 端垂直场景可能是比 C 端更现实的机会。

### 监管黑天鹅

欧盟 AI Act 正在落地，中国的 AI 管理办法持续收紧。如果某个主要市场突然对 agent 的自主操作能力加限制——比如要求所有 agent 行为必须经过人类确认——整个赛道的节奏会被打断。

这不是大概率事件，但一旦发生影响是非线性的。它可能同时冻结所有玩家的进度条，反而给慢玩家留出追赶时间。

### 工作流锁定可能没那么深

"赢家是工作流锁定最深的"——这个判断的前提是工作流粘性真的能建立起来。但现实是：目前所有 agent 产品的工作流都还很浅。Claude 的 memory/skills/hooks 看着复杂，大部分用户的使用深度可能就是聊天 + 偶尔写代码。

真正深度的工作流锁定（像 Notion 或 Salesforce 那种程度），需要 2-3 年的生态积累，不是 12 个月能完成的。这意味着窗口可能比我估计的更长——因为还没有谁真正建立起不可迁移的工作流壁垒。

### 多模态可能重新洗牌

前面的分析基本基于文本和代码 agent 的视角。但如果语音交互（GPT-4o 级别的实时语音）或视觉理解（屏幕理解 + GUI 操作）成为 agent 的主要入口，竞争格局可能被重新定义。

Google 在多模态上的积累——从 Gemini 的原生多模态架构到 Android 的设备级视觉控制——可能让它在下半场后来居上。这在前面的分析里几乎没有出现，但它可能是决定终局最重要的技术变量之一。

### 大厂最大的危险可能不是组织问题

补充一个之前没有充分展开的点：大厂最致命的风险可能不是组织架构本身，而是**人才流失的恶性循环**。最有能力的年轻人看到组织问题后选择离开，留下来的人更加保守，决策质量进一步下降，更多优秀的人离开。这个循环一旦启动，比组织架构问题本身更难逆转。

---

## 七、几个判断

以下是基于上述分析的几个判断，它们可能是错的，但我认为值得认真思考：

**一、Agent 时代的主要机会正在向具备应用能力的模型公司集中。** Google、Anthropic、OpenAI、Kimi、DeepSeek、MiniMax、豆包——同时拥有模型能力和应用构建能力的公司，在这场竞争中拥有结构性优势。纯应用层公司不是没有机会，但窗口在收窄。

**二、复合型人才是最稀缺的资源。** 同时具备模型训练能力、数据策略能力、用户心智理解力的人，会成为这场竞争中最关键的变量。他们需要知道最重要的工作流（网页操作、Office 办公、复杂检索）在模型层面该如何优化。这类人才更可能在年轻一代中产生——不是因为年轻人更聪明，而是因为他们的认知框架还没有被上一个时代的范式固化。

**三、大厂的处境比自己意识到的更危险。** 不是因为缺乏人才或技术，而是因为组织架构让正确的决策很难发生。模型能力在快速进化，但组织进化的速度远远跟不上。跨部门、跨层级的协调成本，在需要快速闭环迭代的 Agent 时代，正在从管理开销变成战略劣势。所谓"生态优势"需要重新审视——生态的价值取决于用户愿意为什么付费，而不仅仅是你拥有多少用户。

**四、时间窗口可能比预期更紧。** 基础设施的硬约束正在拉平增长曲线。越早建立起数据飞轮和用户工作流粘性的公司，越有可能在窗口收紧时站稳位置。

---

*写于 2026 年 3 月 19 日。这些判断带有明显的个人视角偏差，欢迎反驳。*

</div>

<div id="lang-en" class="lang-section">

> Would a person earning ¥5,000/month pay ¥2 for an agent that orders food, or ¥5 for one that organizes their client list?

The answer to this question may determine the ultimate shape of the AI Agent war.

---

## 1. Big Tech's Org Structure Is Becoming a Heavy Liability

Over the past decade, big tech cultivated three types of talent: product people, data people, and model people. Each excels in their domain, but few possess all three perspectives simultaneously — **model training** (knowing what data improves performance in specific scenarios), **data strategy** (extracting high-quality training signals from business contexts), and **agent product building** (understanding user workflows and how to design the harness).

ByteDance, Tencent, Alibaba — their org charts split product, data, and model lines cleanly apart. In the traditional internet era, this made sense. But the Agent era doesn't need outputs from three lines stitched together. It needs one person (or a tiny team) **seeing all three layers at once, making integrated decisions**.

Here's a common misconception worth clarifying: **the problem isn't that big tech lacks people who understand models**. ByteDance's Zhu Wenjia, Alibaba's Zhou Jingren, Baidu's entire leadership — they have deep model backgrounds. The real problem is that **the organizational architecture prevents even knowledgeable people from making the right decisions**. When product, data, and model report to different VPs, separated by reporting lines, KPI walls, and information silos, even individuals with a holistic view see their decisions diluted, delayed, and distorted by organizational friction.

Meanwhile, the underlying product logic is shifting fundamentally:

- **Old logic**: Control distribution → Feed content → Retain users → Sell ads
- **New logic**: Build solid harness → Adapt model capabilities → Retain workflows → Charge for productivity gains

Most big tech senior leaders still operate within the old framework. The few young people with broader vision spend their energy **persuading upward** instead of executing downward. One bad decision burns six months — while model companies outside have iterated three times.

Using Claude Code as an example, Agent evolution is a tight closed loop: observe user workflows → design harness abstractions → collect execution data → optimize models for specific scenarios → validate at product layer. Product, data, and model are three gears of the same flywheel — any gear spinning alone struggles to produce value. Big tech's org design puts the three gears in three separate departments.

---

## 2. Application-Layer Startups Face Structural Cost Disadvantages

An equation worth examining seriously: model companies (OpenAI, Anthropic, Kimi, DeepSeek, MiniMax) only pay for inference and payment processing. Independent startups must additionally pay model API fees. This is a **hard-to-eliminate structural cost disadvantage**.

Cursor and Perplexity are often cited as counterexamples — no proprietary models, but high valuations. This proves that building a sufficiently thick product layer atop models, accumulating strong user mindshare, can indeed create value. But note: their success depends on exceptional product capability and fortunate timing, and **profitability remains an open question**. As model companies improve their own application layers (Claude's Artifacts, ChatGPT's Canvas), this space continues narrowing.

The deeper issue is the data flywheel. Without your own business data for benchmarks, without RL-optimizing for high-value scenarios, without continuously improving token quality — you're competing from an asymmetric position against model companies. This doesn't mean zero opportunity, but it means you need to build moats at the product layer that **model companies won't or can't replicate in the near term**.

Manus selling to Meta reflects this pressure to some degree — though the specific reasons are likely more complex.

Application-layer startups looking to break through probably need: **going global** (stronger willingness to pay overseas), **vertical depth** (finding scenarios model companies don't yet cover), and **speed** (building switching costs before windows close). Meeting all three simultaneously isn't easy, but it's not impossible — the key lies in judgment about timing and positioning.

---

## 3. Distribution Channel Value Needs Reassessment

A proposition worth debating: **traditional internet ecosystems (WeChat, Alipay, Taobao) may have their distribution advantages overvalued in the Agent era.**

This claim has a premise: the highest willingness to pay for agents comes from **productivity scenarios**, not lifestyle convenience.

Consider: someone spending an hour comparing restaurants on Meituan — do they urgently need AI to compress that to 5 minutes? For many, browsing IS the entertainment. But if an agent can organize their client list, automate weekly reports, compress 3 hours of document work to 20 minutes — **they'll likely pay**, because saved time directly equals earned wages.

Of course, this doesn't mean distribution channels are entirely irrelevant. In consumer markets, especially for small merchants and lower-tier markets, WeChat's reach remains decisive. But in professional productivity tools, users actively seek the best solutions — just as developers find GitHub and designers find Figma — and distribution channel weight drops significantly.

Claude Code (and the upcoming cowork mode) illustrates this well. Its barrier to entry is genuinely high. But flip it: **if an agent can truly complete 2 hours of your work, would you mind spending 2 minutes opening an app to control it remotely?** For genuine productivity tools, user tolerance is far higher than we assume.

---

## 4. Token Cost Uncertainty

Two opposing forces are pulling token prices in different directions:

**Downward pressure**: Model distillation, quantization, MoE architectures, and other inference efficiency optimizations continue advancing. Token unit prices have dropped 10-50x over the past two years.

**Upward pressure**: Worsening power shortages, tight chip capacity (H200/B200 delivery cycles measured in quarters), GPU instance prices showing no significant decline, and exponentially growing storage demands from larger models and context windows — these infrastructure hard constraints are slowing supply-side expansion.

My inclination: token price **decline rates will slow**, with possible periodic increases for high-quality models. If this holds, it means shrinking room for experimentation across all players — particularly disadvantageous for application-layer startups, while further amplifying the advantages of companies with in-house models and end-to-end optimization capabilities.

---

## 5. How Short Is the Time Window, Really?

An intuitive estimate: **the Agent war's mindshare window is probably only 12-18 months.** By mid-2027, the top 2-3 Agent products will have largely locked in the landscape.

This is much faster than the mobile internet era. WeChat took 2-3 years to win the IM war (2011-2013), when variables were few — essentially whoever built network effects first. The Agent era's window is shorter for three reasons:

**Model capabilities iterate too fast.** Generational leaps every six months mean product-layer first-mover advantages can be wiped out by model-layer capability jumps. Your best RAG solution today might be replaced by native long-context next year.

**Current switching costs are extremely low.** Users' workflow data hasn't been truly locked in yet — migrating to another agent costs nearly zero. But this window is closing. Once users accumulate skills, memory, and work habits on a platform, migration costs spike dramatically.

**Every player is heavyweight.** Unlike WeChat vs. MiChat (big tech vs. startup), today it's OpenAI vs. Anthropic vs. Google — all heavily armed. Agent product launches will intensify in H2 2026 — Claude cowork, OpenAI operator evolution, Google's agent platform — accelerating mindshare lock-in.

At this timescale, some current star companies may face serious pressure. Take Perplexity: its core value is "AI search," but that's precisely what every model company is building and improving rapidly. Claude's web search, ChatGPT's search, Gemini's search are all catching up fast. Perplexity's moat is essentially search result ranking quality and citation experience — not thick enough. Its most likely outcome is acquisition (the team and brand have value) or gradual marginalization into a niche tool.

Cursor is somewhat safer — code workflows run deeper, the IDE itself is a heavy product, and switching costs are higher. But if Claude Code's cowork mode delivers, Cursor will face significant pressure too.

**Looking back a year from now, the winner probably won't be "best model" but "deepest workflow lock-in."** This is why Claude builds memory + skills + hooks, why OpenAI builds GPTs + plugins — everyone's racing for the same thing: making users' work habits grow into your platform.

---

## 6. Underestimated Variables

The analysis above has a danger: it may be too internally consistent. Any framework that looks logically complete deserves active stress-testing. Here are several variables that could undermine the preceding arguments.

### Open-Source Models as Disruptors

The analysis above barely mentions Llama, Qwen, or Mistral. This is a significant blind spot.

If open-source models reach 80-90% of closed-source capability in agent scenarios (currently around 60-70%), the "model companies have structural advantages" thesis weakens significantly. Any team could fine-tune open-source models with their own business data via RL — dramatically reducing application-layer startups' cost disadvantage since they'd no longer need to pay per API call to OpenAI or Anthropic.

Meta's massive investment in Llama has precisely this strategic intent: **turn the model layer into public infrastructure, pushing value back to the application layer.** If Llama 4 performs well enough for agent scenarios, the "startup economics don't work" argument may need substantial revision. This is the single largest swing factor in this entire analysis.

### Enterprise Markets Move on Different Timescales

The 12-18 month mindshare lock-in estimate may hold for consumer markets. But enterprise is an entirely different tempo.

Enterprise procurement involves security audits, compliance reviews, custom deployments, and budget cycles — processes that inherently take 6-12 months. Salesforce, ServiceNow, and Microsoft's agent products may not be exciting, but they could quietly dominate enterprise. The enterprise war window is more likely 3-5 years, and once moats are built, they run far deeper than consumer.

This means: even if the consumer landscape largely locks by 2027, the enterprise competition is just beginning. For startups, vertical enterprise scenarios may offer more realistic opportunities than consumer plays.

### Regulatory Black Swans

The EU AI Act is being implemented. China's AI regulations continue tightening. If a major market suddenly restricts agent autonomous operation capabilities — say, requiring human confirmation for all agent actions — the entire sector's pace could be disrupted.

This isn't a high-probability event, but its impact would be nonlinear. It could simultaneously freeze every player's progress bar, paradoxically giving slower players time to catch up.

### Workflow Lock-In May Not Run Deep Enough

"The winner will have the deepest workflow lock-in" — this assumes workflow stickiness can actually be established. But reality check: all current agent products have quite shallow workflows. Claude's memory/skills/hooks system looks complex, but most users' actual usage depth is probably just chatting + occasional code writing.

Truly deep workflow lock-in (Notion or Salesforce levels) requires 2-3 years of ecosystem accumulation — not achievable in 12 months. This means the window might be longer than estimated, because nobody has yet built truly non-portable workflow moats.

### Multimodality Could Reshuffle the Deck

The preceding analysis is essentially from a text/code agent perspective. But if voice interaction (GPT-4o-level real-time voice) or visual understanding (screen comprehension + GUI operation) becomes the primary agent interface, the competitive landscape could be fundamentally redefined.

Google's multimodal accumulated advantages — from Gemini's native multimodal architecture to Android's device-level visual control — could enable a second-half comeback. This barely appears in the earlier analysis but may be one of the most decisive technical variables in determining the endgame.

### Big Tech's Greatest Danger May Not Be Organizational

One point that deserves fuller treatment: big tech's most lethal risk may not be organizational architecture itself, but the **vicious cycle of talent drain**. The most capable young people see organizational dysfunction and leave. Those who remain become more conservative. Decision quality declines further. More talented people leave. Once this cycle starts, it's harder to reverse than the structural org problems themselves.

---

## 7. Several Propositions

Based on the above analysis, here are several propositions. They may be wrong, but I believe they deserve serious consideration:

**One: Agent-era opportunities are concentrating toward model companies with application capabilities.** Google, Anthropic, OpenAI, Kimi, DeepSeek, MiniMax, Doubao — companies with both model and application-building capabilities hold structural advantages in this competition. Pure application-layer companies aren't without opportunity, but the window is narrowing.

**Two: Compound talent is the scarcest resource.** People combining model training ability, data strategy capability, and user psychology understanding will be the most critical variable. They need to know how to optimize the most important workflows (web operations, Office productivity, complex retrieval) at the model level. This talent is more likely to emerge from younger generations — not because they're smarter, but because their cognitive frameworks haven't yet been locked into the previous era's paradigms.

**Three: Big tech's position is more precarious than they realize.** Not for lack of talent or technology, but because organizational architecture makes correct decisions difficult to execute. Model capabilities are evolving rapidly, but organizational evolution lags far behind. Cross-department, cross-hierarchy coordination costs are transforming from management overhead into strategic liability in an era demanding rapid closed-loop iteration. The "ecosystem advantage" needs reassessment — an ecosystem's value depends on what users will pay for, not merely how many users you have.

**Four: The time window may be tighter than expected.** Infrastructure hard constraints are flattening the growth curve. Companies that establish data flywheels and workflow stickiness earliest will be best positioned when the window tightens.

---

*Written March 19, 2026. These propositions carry obvious personal perspective biases. Pushback welcome.*

</div>

<script>
function switchLang(lang){document.querySelectorAll('.lang-section').forEach(s=>s.classList.remove('active'));document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));document.getElementById('lang-'+lang).classList.add('active');document.querySelector('[onclick="switchLang(\''+lang+'\')"]').classList.add('active')}
</script>

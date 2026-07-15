---
date: 2026-03-18
status: draft
topic: Token 经济学：从黄仁勋的框架倒推 AI 公司终局市值
platforms: [twitter, xiaohongshu, jike, wechat-moments]
language: [zh, en]
source: 与 Claude Code 深度对话整理
---

# Token 经济学：从黄仁勋的框架倒推 AI 公司终局市值

## 一、核心洞察

黄仁勋 GTC 2026（3月16日）提出的框架：**数据中心是 Token 工厂，token 是新的商品。**

> "An AI that could generate became an AI that could reason, an AI that could reason became an AI that could do work... Tokens are your new commodity."
> — Jensen Huang, GTC 2026

**公司价值 = token 产能 × token 质量（定价权）× 市场份额**

---

## 二、Token 定价分层：不是赢家通吃

| 层级 | 价格/百万token | 场景 |
|------|---------------|------|
| 免费 | $0 | 高吞吐低速 |
| 中端 | $3 | 普通应用 |
| 高端 | $6 | 质量敏感 |
| 高级 | $45 | 企业推理 |
| 超级 | $150 | 最强模型实时推理 |

模型能力越强，token 卖得越贵。不同公司占不同价格带，多模型混用是未来常态。

---

## 三、推理 > 训练：The Meter Never Stops

- 2025-2027 NVIDIA 预计 **$1 万亿**订单（去年预测 $5000 亿，翻倍）
- Agent 时代 token 是 7×24 持续消耗的
- SaaS → **AaaS（Agent as a Service）**，未来员工福利包里有 token 预算
- 黄仁勋预测 1000 万数字工人与人类协作
- Vera Rubin 推理效率提升 10 倍，成本降 10 倍 → 更多场景可行 → 更多需求

> "If they could just get more capacity, they could generate more tokens, their revenues would go up."
> — Jensen Huang

---

## 四、Token 消耗爆发曲线

### 历史轨迹

| 时间 | Token 成本/百万 | 关键事件 |
|------|----------------|---------|
| 2022 年底 | $20 | GPT-4 发布前 |
| 2024 年 | $2 | token 用量开始加速 |
| 2025 年1月 | $1 | DeepSeek + o1 推理模型 → **拐点** |
| 2026 年初 | $0.40 | 3年降了 **1000 倍** |
| 2028 年（预测）| < $0.01 | **几乎免费**，比数据库查询还便宜 |
| 2029-2030 | 公用事业级 | 推理变成水电一样的基础设施 |

### 爆发数据

- 周 token 用量同比增长 **3800%**
- Google 月处理 token：480 万亿 → 980 万亿（半年翻倍）
- Microsoft Foundry API：年处理 500 万亿+ token（同比 **7 倍**）
- 推理占 AI 总算力从 1/3（2023）→ 2/3（2026）
- 成本每 **2 个月减半**，每年降 **100 倍**

### Jevons 悖论：越便宜，总消耗越多

Token 单价降了 1000 倍，但总支出暴涨。因为：
- 便宜了 → 更多场景变得可行
- 推理模型消耗 100x token（多步思考）
- Agent 工作流 7×24 不停消耗
- 企业 AI 支出 2025 年达 $6440 亿，同比增长 76%

---

## 五、三大 Token 消耗场景

### 1. AI 编程工具（开发者场景）

- 95% 开发者每周用 AI，75% 超过一半工作靠 AI
- Claude Code 单任务 33K token，Cursor 188K token（5.5 倍差距）
- 工程师年 token 成本约 **$100K**
- Token 已成为薪酬第四组件：工资 + 奖金 + 期权 + **token 预算**

### 2. Agentic AI（最大增量）

- Agent 每任务消耗 10,000+ token，是简单问答的 **20-50 倍**
- 一个 Agent 解决一个任务调用 LLM 10-20 次
- 7×24 不停跑，**meter never stops running**
- 2026 年 40% 企业应用将包含自主 AI Agent

### 3. 消费端对话

- 豆包 1.59 亿 DAU，春节 19 亿次交互
- OpenAI 人均 token 消耗增速 > 用户增速（存量用户越用越多）

### 市场分布（Barclays 报告）

- **消费端：OpenAI 统治**，token 量是 Gemini 的 2 倍+
- **企业端：Anthropic 领先**，推理 token 量和收入近 OpenAI 的 2 倍

---

## 六、AI 公司估值全景（2026年3月）

### 美国

| 公司 | 估值/市值 | 年收入 | 备注 |
|------|----------|--------|------|
| Google (Alphabet) | ~$2万亿 | $4000亿+ | AI 整合全线产品，年现金流 $800 亿 |
| Meta | ~$1.59万亿 | $1500亿+ | Llama 开源，5 亿用户用 AI |
| OpenAI | $7300亿（私募） | ~$200亿 ARR | 目标万亿，准备 IPO |
| Anthropic | $3800亿（私募） | ~$50亿 ARR | 预计 $180亿 2026 年收入 |

### 中国

| 公司 | 估值/市值 | 备注 |
|------|----------|------|
| 腾讯 | ~$6300亿（HK$5万亿） | 全球第17大公司，AI 溢价低 |
| 字节跳动 | ~$5500亿 | 豆包 DAU 破亿，中国最大 AI 应用 |
| Kimi/月之暗面 | ~$180亿 | 3个月从 $43 亿翻到 $180 亿，计划 H2 2026 IPO |
| MiniMax | ~$115亿（港股） | 高盛目标价 $389 亿，70% 收入海外 |
| 智谱AI | ~$300-400亿 | 清华背景，GLM 系列 |

---

## 七、用 Token 经济学倒推终局市值

### 推理市场规模

- 2025 年：$1060 亿
- 2026 年：$500 亿+（推理优化芯片市场）
- 2030 年：$2550 亿
- AI 基础设施投资：2026 年 $4000-4500 亿 → 2028 年 $1 万亿

### 各公司终局估算（2028-2030）

| 公司 | 推理市场份额 | 年收入估算 | 收入倍数 | 终局市值 |
|------|------------|-----------|---------|---------|
| **OpenAI** | 25-30% | $600-750亿 | 25x | **$1.5-2 万亿** |
| **Anthropic** | 15-20% | $350-500亿 | 25x | **$8000亿-$1.2万亿** |
| **Google（AI部分）** | 20-25% | $500-600亿 | 已在市值中 | Alphabet **$3-4 万亿** |
| **字节（豆包）** | 5-8% | $120-200亿 | 15x | **$1-1.5 万亿**（含非AI） |
| **Kimi** | 3-5% | $70-120亿 | 20x | **$1500-2500 亿** |
| **DeepSeek** | 5-8% | 商业模式待定 | — | 不确定 |

### 定价逻辑

- 如果 OpenAI 值 $2 万亿，第二三名约为其 1/3 到 1/2
- 中国公司受中美叙事差异影响，可能有折价，但如果人民币资产重估则有上行空间
- 腾讯 vs Meta 差距（$6300 亿 vs $1.59 万亿 = 2.5 倍），说明中国科技公司的 AI 溢价尚未被市场定价

---

## 八、大厂 vs 小公司：组织结构决定 Token 质量

大厂训不好模型 = **同样的算力投入，产出低质量 token**。

这不是钱的问题，是组织结构的问题：
- 模型团队服务太多内部业务，目标分散
- 人才激励不对，顶尖研究员不愿留
- 决策链条长，迭代慢

小公司人才密度高、组织扁平 → 同样算力产出高质量 token → 定价权更高 → 估值更高

**一句话总结：AI 公司的估值本质上是在定价它能产出多少高质量 token。大厂有算力但产出低价 token，小公司算力少但产出高价 token——这就是为什么 Kimi $180 亿而腾讯 AI 溢价几乎为零。**

---

## 九、工作替代时间线：窗口正在关闭

| 时间 | 发生什么 |
|------|---------|
| **2025** | 5.5 万次裁员直接归因于 AI |
| **2026** | 37% 企业用 AI 替代人工；50% 中层管理被削减；40% 企业应用含自主 Agent |
| **2027** | 23% 岗位演变；客服 Tier 1 减 40-60%；750 万数据录入岗消失；85% 招聘筛选自动化 |
| **2028** | EU 1200 万岗位被消除或根本改变；Agent 接管完整工作流；GPT-4 级推理几乎免费 |
| **2030** | 美国 30% 工作可自动化；60% 任务被 AI 显著改变；40% 技能过时 |

**关键洞察：被替代的是执行者，稀缺的是定义"AI 该做什么"的人。**

---

## 十、发布计划

### 推特系列（英文，可拆 6-8 条 thread）

1. Jensen's GTC 2026: Data centers are token factories. Tokens are the new commodity.
2. Token pricing tiers ($0 → $150/M) — it's not winner-take-all, it's tiered dominance.
3. The 1000x cost collapse: GPT-4 tokens went from $20/M to $0.40/M in 3 years. But total spending exploded. Jevons Paradox in action.
4. The 4th component of engineer compensation: salary + bonus + equity + token budget.
5. The model race is over. The distribution race just began.
6. Why big tech can't train good models: same compute, lower quality tokens. It's an org structure problem, not a money problem.
7. Reverse-engineering AI company valuations using token economics: OpenAI $2T, Anthropic $1T, Kimi $200B.
8. 50% of middle management will be eliminated by end of 2026. The window to position yourself is 1-3 years.

### 小红书（中文，2-3 篇深度内容）

1. **黄仁勋的 Token 工厂理论：一个框架看懂所有 AI 公司估值**
2. **大厂为什么做不好大模型？一个在腾讯工作的人的真实观察**
3. **AI 时代的窗口期：为什么接下来 1-3 年决定你的未来 10 年**

### 即刻（讨论向）

1. 用 token 定价权来看 AI 公司，你会发现大厂的 AI 溢价几乎为零
2. Jevons 悖论：token 越便宜，总消耗越大——这对模型公司意味着什么？
3. 工程师的第四种薪酬：token 预算。你公司给你配了多少？

### 朋友圈（精炼版）

适合分享的金句：
- "AI 公司的估值 = 它能产出多少高质量 token"
- "模型竞争结束了，分发竞争刚开始"
- "Token 单价降了 1000 倍，总消耗反而爆炸——这就是 AI 的 Jevons 悖论"

---

## Sources

### 黄仁勋 GTC 2026 Keynote
- [CNBC: Nvidia GTC 2026 $1T orders](https://www.cnbc.com/2026/03/16/nvidia-gtc-2026-ceo-jensen-huang-keynote-blackwell-vera-rubin.html)
- [Quartz: Next AI boom belongs to inference](https://qz.com/nvidia-gtc-2026-jensen-huang-keynote-takeaways)
- [PYMNTS: Jensen Huang $1T AI market](https://www.pymnts.com/artificial-intelligence-2/2026/nvidias-jensen-huang-says-ai-compute-could-near-1-trillion-by-2027/)
- [SiliconANGLE: AI inflection point](https://siliconangle.com/2026/03/16/ai-inflection-point-nvidias-jensen-huang-outlines-vision-agents-ai-factory-forecasts-big-jump-revenue/)
- [Digitimes: Trillion dollar infrastructure shift](https://www.digitimes.com/news/a20260317VL201/nvidia-gtc-2026-infrastructure-ceo.html)
- [Presidio: Tokens, Agents, AI Factories](https://www.presidio.com/blogs/how-tokens-agents-and-ai-factories-could-change-everything/)

### Token 消耗与推理经济学
- [OpenRouter: State of AI 100T Token Study](https://openrouter.ai/state-of-ai)
- [Deloitte: AI Token Spend Dynamics](https://www.deloitte.com/us/en/insights/topics/emerging-technologies/ai-tokens-how-to-navigate-spend-dynamics.html)
- [GPUnex: AI Inference Economics 1000x Cost Collapse](https://www.gpunex.com/blog/ai-inference-economics-2026/)
- [Epoch AI: Trends in AI](https://epoch.ai/trends)
- [AI-2027: Compute Forecast](https://ai-2027.com/research/compute-forecast)
- [Tomasz Tunguz: Token Consumption Growth](https://tomtunguz.com/is-token-consumption-slowing-down/)
- [Deloitte: AI Compute Demand Predictions](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/compute-power-ai.html)

### 公司估值数据
- [Bloomberg: Moonshot $18B valuation (2026-03-14)](https://www.bloomberg.com/news/articles/2026-03-14/china-ai-startup-moonshot-snags-funds-at-18-billion-valuation)
- [TechNode: MiniMax HK debut $11.5B](https://technode.com/2026/01/09/mihoyo-backed-ai-firm-minimax-jumps-on-hong-kong-debut-market-value-tops-11-5-billion/)
- [AIBase: Goldman Sachs MiniMax $38.9B target](https://www.aibase.com/news/25696)
- [TMTPost: ByteDance $400B+](https://en.tmtpost.com/post/7471894)
- [TechPortal: ByteDance $550B](https://thetechportal.com/2026/02/25/bytedance-touches-550bn-valuation-in-proposed-general-atlantic-secondary-share-sale-report)
- [InvestX: Anthropic vs OpenAI valuations](https://investx.com/will-anthropics-valuation-exceed-openais-in-2026/)
- [TechCrunch: VC investments Feb 2026](https://techcrunch.com/2026/03/03/openai-anthropic-waymo-dominated-189-billion-vc-investments-february-crunchbase-report/)
- [StockAnalysis: Tencent market cap](https://stockanalysis.com/quote/hkg/0700/market-cap/)
- [StockAnalysis: Meta market cap](https://stockanalysis.com/stocks/meta/market-cap/)
- [Seeking Alpha: Barclays OpenAI vs Anthropic token share](https://seekingalpha.com/news/4505254-openai-dominating-consumer-ai-token-consumption-anthropic-wins-enterprise-barclays)

### AI 编程工具与开发者数据
- [Builder.io: Claude Code vs Cursor 2026](https://www.builder.io/blog/cursor-vs-claude-code)
- [Faros AI: Claude Code Token Limits](https://www.faros.ai/blog/claude-code-token-limits)

### 工作替代数据
- [Nexford: AI Affecting Jobs 2026-2030](https://www.nexford.edu/insights/how-will-ai-affect-jobs)
- [DemandSage: 77 AI Job Replacement Statistics](https://www.demandsage.com/ai-job-replacement-stats/)
- [AllAboutAI: AI Replacing Jobs Statistics](https://www.allaboutai.com/resources/ai-replacing-jobs-statistics/)
- [WEF: Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/)

---

## 配图资源（公司内部 API 平台）

可用的图像生成模型（内部 API，调用方式均为 api）：

| 模型 | model marker | 推荐用途 |
|------|-------------|---------|
| **gemini-3-pro-image-preview** | `api_google_gemini-3-pro-image-preview` | **首选**，即 Nano Banana Pro，文字渲染好，适合社交媒体配图 |
| **imagen-4.0-fast-generate-preview** | `api_google_imagen-4.0-fast-generate-preview` | 速度快画质顶级，适合快速出图 |
| **imagen-4.0-ultra-generate-preview** | `api_google_imagen-4.0-ultra-generate-preview` | 最强画质，适合精修封面 |
| imagen-4.0-generate-preview | `api_google_imagen-4.0-generate-preview` | 标准版 Imagen 4 |
| gemini-2.5-flash-image-batch | `api_google_gemini-2.5-flash-image-batch` | 批量配图 |

**配图计划：**
- 推特 thread 配图：用 gemini-3-pro-image-preview 生成概念图（token 工厂、定价分层等）
- 小红书封面：用 imagen-4.0-ultra 生成高质量中文标题封面
- 即刻/朋友圈：精选 1-2 张数据可视化风格配图

**备选：腾讯混元 Image 3.0**
- API: `hunyuan.tencentcloudapi.com`
- 80B 参数 MoE，中英文文字渲染业界最强
- ~$0.03/张，内部可能免费

---

## 后续迭代方向

- **模型层公司下注策略**：基于 token 经济学框架，评估哪些模型公司值得重仓关注
- **配图自动化**：将图像生成 API 集成到 `/publish` skill，实现文字+配图一键生成
- **系列化输出**：这份研究可以拆成多期内容持续发布，保持高频输出节奏

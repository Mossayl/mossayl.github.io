# 小红书发布稿：谁能在中国做出 CoWork？

Source: `/Users/wangye/workspace/blog/content/posts/who-can-build-cowork-in-china.md`

## 笔记 1

标题候选：
- 做出 Claude Code 和 CoWork 的人，都不是传统 PM
- Agent 产品负责人的画像：三种能力必须叠在同一个人身上
- Cat Wu、Felix、Alexander——他们有什么共同点？

封面字：

Agent 产品
不是传统 PM 做出来的

封面图：

`/Users/wangye/workspace/blog/static/images/posts/who-can-build-cowork-in-china/xhs-note-01-cover.png`

正文：

我最近研究了 Claude Code、Claude Cowork、OpenAI Codex 三个产品背后的负责人，发现一个有意思的共同点：

他们都不是传统意义上的 PM。

Cat Wu 负责 Claude Code 产品。她曾经短暂加入 Cursor 两周，然后回到 Anthropic。这个细节本身就说明她对「在哪里做」有极强的判断力。

她在 Claude Code 团队内部做的事情不是写 PRD——是在模型能力快速变化时创造清晰度：让团队知道该做什么、为什么做、先做哪个。她自己做原型，自己做 evals，同时在跑产品判断和模型判断。Claude Code 的 run-rate 收入现在超过 25 亿美元。

Felix Rieseberg 负责 Claude Cowork 工程。他的背景是纯工程师：Oxford、Microsoft、Slack、Stripe、Notion，是 Electron 的核心维护者。

Cowork 的诞生来自他的一个观察：很多用户在用 Claude Code 做非代码的知识工作。他没有等立项、评审、排期——直接用一周半搭出了原型。他说「我们花更多时间在产品和架构决策上，而不是写代码」。一个工程师背景的人说出这句话，说明他真正理解了产品判断在 Agent 产品中的权重。

Alexander Embiricos 负责 OpenAI Codex 产品。路径最不典型：Stanford CS，然后做投行、咨询，读 Harvard MBA，再去 Dropbox 做 PM，然后创业 5 年做 pair programming 协作工具，最后加入 OpenAI。

他对「人和 AI 怎么一起工作」这件事，不是从论文里学的，是亲手做了 5 年、失败过、又回来做的。

三个人放在一起，浮现出一个清晰的画像：

Builder + 模型直觉 + 工作流体感。三者缺一不可。

传统 PM 通常缺前两个——写文档让人执行，但模型能力三天就变了，纸面设计跟不上。

纯工程师通常缺第三个——能实现，但不知道用户真正的工作流长什么样。

模型研究员三个都缺——专注于能力边界，不在产品和用户侧积累。

Agent 产品和传统 SaaS 最大的不同，就是这三个能力必须叠在同一个人（或极小团队）身上，才能跑出真正的产品闭环。

标签：

#AI产品经理 #Agent #ClaudeCode #OpenAI #产品思考 #AI工具 #职场成长


## 笔记 2

标题候选：
- 中国为什么很难马上做出 Claude Cowork？
- 能复制功能，复制不了做出它的人
- 国内 CoWork 类产品，时间线会是什么样？

封面字：

中国做 CoWork
缺的不是 idea

封面图：

`/Users/wangye/workspace/blog/static/images/posts/who-can-build-cowork-in-china/xhs-note-02-cover.png`

正文：

很多人看到 Claude Cowork，第一反应是：国内大厂很快就能抄一个吧？

功能层面当然能。多 Agent 架构、skill 体系、并发任务调度，都不是技术秘密。

但我觉得，真正难复制的不是界面，也不是架构——是做出这个产品的那种人。

CoWork 类产品的核心不是 idea，是判断力。

你要在没有先例的情况下决定：什么工作流值得 Agent 接管？哪里需要人确认，哪里可以自动执行？模型什么时候是真的理解了，什么时候只是看起来理解了？skill 体系怎么设计，才不会变成一堆 prompt 收藏夹？用户怎么从「我问 AI」变成「我和 AI 一起工作」？

这些问题，没有任何单一角色能独立解决。必须是 Builder + 模型直觉 + 工作流体感叠在一起的人。

对照国内，断层是明显的。

豆包的产品负责人从流量投放背景转来，产品是流量导向的，工作流深度有限。腾讯元宝由原腾讯会议负责人操盘，会议产品和 Agent 产品的能力模型完全不同。Kimi 有探索意愿，但产品线分散——Chatbot、Code、Sling、Clone 各自独立，说明还没有一个人对 Agent 产品有整体判断，能把力量集中在一个方向打穿。

不是没有聪明人，而是现有的组织架构和人才流动模式，很难产出那种画像的人。大厂把产品、工程、模型分得太开，年轻人在其中很难同时积累三种能力。

基于这些，我对时间线的判断是：

3 个月内，会冒出一批表面模仿。能跑通基本功能，但 harness 粗糙，skill 体系缺失，留存差。

3-6 个月，如果有一个小公司或模型公司内部的小团队，由一个同时理解模型和工作流的人主导，有可能做出真正可用的版本——不是完美，而是能真正提升某一类人的工作效率。

6 个月以后，大厂开始跟进，但大概率是组织驱动而非产品驱动。先立项，分工，评审，排期，真正上线还要再等一两个季度。

还有一个被低估的制约因素：算力分配。CoWork 类产品的 token 消耗是普通对话的 10-50 倍（多 Agent 并发），在算力紧张的环境下，大厂会优先保 B 端 API 收入和 C 端 DAU，新产品线很难拿到足够配额。

能做出来的，更可能是那个资源不多、但同时理解模型和工作流、还能亲手把东西做出来的小团队。

标签：

#AI创业 #Agent #CoWork #Claude #产品经理 #人工智能 #科技观察

---
title: "前置理解，还是后置提问：AI 协作里 human in the loop 的另一种解法"
date: 2026-05-30
draft: true
tags: ["AI", "agent", "human-in-the-loop", "workflow", "product"]
summary: "很多 human-in-the-loop 设计试图在执行中不断 ask questions，但也许更简单的解法是先把问题想清楚：用前置澄清提高任务表征质量，再决定是否真的需要复杂工具。"
cover:
  image: ""
  alt: ""
  hidden: true
---

# 前置理解，还是后置提问：AI 协作里 human in the loop 的另一种解法

今天讨论到一个很有意思的问题：AI 系统到底应该在什么时候向人提问？

一种常见思路是做 human in the loop：系统执行到某个节点，发现不确定，就 ask people questions，把人的判断接回 loop 里。这个方向当然有价值，尤其是在风险确认、权限批准、偏好选择、无法提前枚举的分支判断里。

但我突然意识到，很多场景下，我们可能过早把问题做复杂了。

如果任务一开始就没被理解清楚，那么后面的 ask questions、routing、context 拼接、tool call、甚至模型训练，都可能只是在补一个更早的问题：任务表征质量太低。

这时，一个更简单的方案可能是前置澄清。

比如 Eileen-style 的三问：在任务开始之前，先逼自己想清楚目标、输入、输出、验收标准和边界。它不需要训练模型，不需要常驻 tool，也不需要复杂 runtime 状态，却能显著提高任务理解质量。

这让我想到一个更一般的原则：

```text
不要急着把问题做成系统。
先看它是不是一个可以通过更好理解来解决的问题。
```

很多工程和产品设计会天然滑向过度设计：

- 觉得 prompt 不够，就想训练模型；
- 觉得上下文不够，就想做复杂 context 拼接；
- 觉得任务分流不清，就想做 routing system；
- 觉得用户判断重要，就想做 human-in-the-loop tool；
- 觉得工作流有价值，就想立刻做 agent。

但也许更好的默认路径是：

```text
想清楚问题
-> 写一个最小 prompt / checklist / markdown
-> 跑一次真实任务
-> 看失败在哪里
-> 再决定是否需要 tool、routing、context、agent 或训练
```

这不是反对复杂系统，而是反对在问题还没被验证之前就提前复杂化。

human in the loop 和 Eileen-style 前置澄清并不是同一个东西。

前者更像 runtime control plane：当系统执行中遇到风险、不确定性或结构化决策时，把人接进来。

后者更像 task representation enhancer：在系统开始执行前，先提高人和 AI 对任务的共同理解。

很多时候，我们需要的不是更复杂的后置提问机制，而是更好的前置理解。

真正值得保留的问题是：

```text
这个问题需要人在执行中介入，
还是只需要人在开始前想清楚？
```

如果是后者，一个好问题、一页 checklist、一次 Eileen-style 澄清，可能比一套 human-in-the-loop tool 更有效。

这篇文章后续可以继续展开三层：

1. 为什么 AI 产品容易过度设计；
2. 前置理解和后置提问的功能差异；
3. 什么时候 human-in-the-loop tool 真的值得做。

---
title: "Skill 检索引擎 + 自研 Skill 库"
date: 2026-01-01
weight: 4
summary: "为解决『不知道自己有哪些能力、该调哪个』，开发 trigger → rerank → capability-routing 三阶段的 skill 检索引擎，并自研约 28 个 skill。"
tags: ["agent", "skill", "retrieval", "benchmark"]
---

**状态：半成品有产出**

## 问题

当自研的 skill 越来越多，一个很现实的问题出现了：**我自己都不知道我有哪些能力、什么场景该调哪个。** 这其实是 agent 的通病——能力越多，越需要一个机制帮它在对的时刻找到对的能力。

## 系统设计

开发了一个 skill 检索引擎，分三阶段：

- **trigger**：判断当前场景是否需要某个 skill。
- **rerank**：对候选 skill 排序。
- **capability-routing**：区分这是需要新 skill、已装 skill、还是该走内置工具 / 插件。

配套一个 benchmark 量化效果（trigger 准确率、top-k 命中率），让"检索准不准"可被衡量、可迭代。最终把它轻量化成一个可日常调用的"检索 skill"，嵌入日常使用。

## 产出

- 累计自研约 **28 个 skill**，覆盖研究 / 写作 / 投研 / 发布全流程。
- 检索引擎在 benchmark 上 trigger 准确率达 1.0、top-3 命中 1.0。

这个项目让我对"agent 如何动态发现与复用能力"有了第一手的工程理解——这正是 harness 要解决的核心问题之一。

# 叶玲（Mossayl）的个人网站

这是唯一对外发布的网站源码，部署到 <https://mossayl.github.io/>。

## 内容边界

- `content/posts/`：文章正文的唯一权威版本。
- `content/projects/`：可公开展示的个人项目页。
- `content/experience.md`：公开工作经历。
- `content/eileen.md`：Eileen 专题页。
- `thinking/`：尚未进入正式写作流程的思考材料。
- `publish/`：微信公众号、小红书、Twitter 等平台发布包。
- `static/images/`：正式文章复用的图片资产。

研究笔记、原型代码和项目证据保留在 `/Users/wangye/workspace/lab/`；只有适合公开展示的内容才进入本仓库。

## 本地运行

```bash
git submodule update --init --recursive
hugo server -D
```

打开 <http://localhost:1313/>。`-D` 会同时显示草稿；正式构建不会发布 `draft: true` 的文章。

## 发布

提交并 push 到 `main` 后，GitHub Actions 自动构建并部署 GitHub Pages。

提交前至少执行：

```bash
hugo --gc --minify
git status --short
```

`public/`、Hugo cache 和本地密钥不提交到 Git。

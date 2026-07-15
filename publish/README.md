# Blog Publish Packages

Each article gets one publish package:

```text
blog/publish/<slug>/
├── manifest.json
├── wechat-openwrite.md
├── wechat-draft.html
├── xiaohongshu.md
├── twitter.md
└── run-log.md
```

The canonical article stays in `blog/content/posts/<slug>.md`.
Final reusable images stay in `blog/static/images/posts/<slug>/`.

Platform intent:

- `wechat-openwrite.md`: Markdown pasted into `md.openwrite.cn` or local `doocs/md`.
- `wechat-draft.html`: rendered HTML used for WeChat draft push.
- `xiaohongshu.md`: Chinese long-form manual posting copy with image insertion markers.
- `twitter.md`: one English post under 280 characters plus one selected image.
- `manifest.json`: source paths, selected images, status, draft IDs, and final URLs.
- `run-log.md`: timestamped record of preparation and publishing actions.

Use `manifest.example.json` as the schema template when creating a new package.

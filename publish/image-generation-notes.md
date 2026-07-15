# Image Generation Notes

Date: 2026-05-06

## Official OpenAI Image Capability Check

Sources:

- OpenAI Image generation guide: https://platform.openai.com/docs/guides/image-generation
- OpenAI image generation tool guide: https://platform.openai.com/docs/guides/tools-image-generation/
- OpenAI image model list: https://platform.openai.com/docs/models

Current practical takeaway:

- GPT Image models support text-to-image generation and image editing.
- The Images API is the simpler path for one-off generation or editing.
- The Responses API image generation tool is better for conversational or multi-step image workflows.
- GPT Image models can use text and image inputs and produce image outputs.
- Outputs can be customized by size, quality, format, compression, and transparency in supported paths.

## Local Skill Decision

The local `imagegen` skill recommends the built-in `image_gen` tool for normal bitmap generation and editing. For this Xiaohongshu batch, the highest-risk element is exact Chinese cover text. Generated raster images can be useful for backgrounds or illustrations, but cover typography should be deterministic.

Decision:

- Generate current cover assets locally with HTML/CSS rendered to PNG.
- Keep exact Chinese text as browser-rendered typography.
- Use GPT Image later for optional no-text background illustrations, then overlay text locally.

## Generated Assets

All current Xiaohongshu covers are 1080 x 1440 PNG files:

- `/Users/wangye/workspace/blog/static/images/posts/ai-agent-war-big-tech-trap/xhs-note-01-cover.png`
- `/Users/wangye/workspace/blog/static/images/posts/ai-agent-war-big-tech-trap/xhs-note-02-cover.png`
- `/Users/wangye/workspace/blog/static/images/posts/token-economics-model-valuation/xhs-note-01-cover.png`
- `/Users/wangye/workspace/blog/static/images/posts/token-economics-model-valuation/xhs-note-02-cover.png`
- `/Users/wangye/workspace/blog/static/images/posts/who-can-build-cowork-in-china/xhs-note-01-cover.png`
- `/Users/wangye/workspace/blog/static/images/posts/who-can-build-cowork-in-china/xhs-note-02-cover.png`
- `/Users/wangye/workspace/blog/static/images/posts/eileen/xhs-note-01-cover.png`

Contact sheet:

- `/Users/wangye/workspace/blog/publish/xhs-cover-contact-sheet.png`

Generator:

- `/Users/wangye/workspace/blog/publish/generate-xhs-cover-assets.js`

## Long-Form Xiaohongshu Image Packs

Generated on 2026-05-06 for three AI product essays. Each article has one cover plus three supporting long-form images, all 1080 x 1440 PNG.

Contact sheet:

- `/Users/wangye/workspace/blog/publish/xhs-long-cover-contact-sheet.png`

Generator:

- `/Users/wangye/workspace/blog/publish/generate-xhs-long-assets.js`

Packages:

- `/Users/wangye/workspace/blog/publish/ai-become-yourself/`
- `/Users/wangye/workspace/blog/publish/ai-delight-buddy-pet/`
- `/Users/wangye/workspace/blog/publish/ai-persona-lens-v2/`

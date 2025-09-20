---
name: 'RecipeTemplate'
root: './src/content/recipe'
output: '.'
ignore: []
questions:
  value: 'レシピ名を入力してください.'
---

# `{{ inputs.value }}.mdx`

```
---
# 料理名
title: 
# 説明やコメント
description: 
# レシピを分類するためのタグ　例：["卵", "簡単"]
tags: [] 
---

import Tag from "@/components/Tag.astro";

# {frontmatter.title}

<div class="tagContainer">
  {frontmatter.tags.map((tag,i) => (
    <Tag key={`${tag}-${i}`} tagName={tag} isLink />
  ))}
</div>

<div class="description">{frontmatter.description}</div>

## 材料

### A
| 材料 | 分量 |
| ---- | ---- |
| *** | *** |
| *** | *** |

### B
| 材料 | 分量 |
| ---- | ---- |
| *** | *** |
| *** | *** |

## 手順
1. 手順を
2. いい感じに
3. 書いていく
```
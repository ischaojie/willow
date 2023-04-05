# willow

<div align="center">
 <img src="static/images/logo.png" alt="logo" width="100">

[示例网站](https://willow.chaojie.fun)
</div>

你好哇，Willow 是为静态站点生成工具 [zola](https://www.getzola.org/) 制作的一款主题。没有 [Tabler](https://github.com/tabler/tabler) 这么漂亮的开源 UI 套件，以我丑陋的审美也没法做出好看的主题。感谢 Tabler 以及其他第三方库，感谢开源！

willow 的一些主要功能：

- blog 通用的功能，文章列表、标签页、关于页面、RSS 等等。
- 支持 [giscus](https://giscus.app/) 评论系统。
- 支持摄影作品页面（待支持点赞。
- 支持 [memos](https://github.com/usememos/memos) 动态（我称之为碎碎念。

## 使用

> 使用 willow 前先熟悉下 [zola](https://www.getzola.org/documentation/getting-started/overview/) 的用法。

### 安装

确保使用 `zola init myblog` 创建了项目，然后将 willow 克隆到本地 themes 文件下：

```bash
cd themes
git clone https://github.com/ischaojie/willow.git
```

之后在 `config.toml` 文件中指定 theme 为 willow：

```toml
theme = "willow"
```

### 配置

zola 支持在 `extra` 字段增加自定义的配置项，`willow` 的所有配置均以 `extra.willow` 开头，基础配置包括：

- 首页展示的文章数量

    ```toml
    [extra.willow]
    show_article_num = 10
    ```
- 导航栏的顺序
    目前支持的导航栏有：`articles`、`tags`、`about`、`photography`、`memos`。且 `home` 默认为首位。

    > **Notice**
    >
    > 注意增加对应导航的翻译：
    ```toml
    [languages.zh-CN.translations]
    language_name = "中文"
    home = "首页"
    articles = "文章"
    tags = "标签"
    photography = "摄影"
    about = "关于"
    memos = "碎碎念"
    ```

    ```toml
    [extra.willow]
    nav = ["articles", "tags", "about"]
    ```


### 社交账号
Willow 目前支持的社交账号有：`twitter`、`douban`、`github`（如有其他需求，欢迎 issue）。配置参考：

```toml
[extra.willow.social]
twitter = "chaojie_cn"
douban = "218724191"
github = "ischaojie"
```

所有配置项均为账号 id。

### giscus

willow 目前仅支持 giscus 评论系统（如有其他需求，欢迎 issue）。首先参考 [giscus](https://giscus.app/) 的文档，生成自己的 giscus 配置。然后在 `config.toml` 中增加对应的配置项：

```toml
[extra.willow.comment.giscus]
repo = "<>"
repo_id = "<>"
category = "<>"
category_id = "<>"
mapping = "<>"

```

### memos

> [memos](https://github.com/usememos/memos) 是一个轻量级的、自托管的备忘录（动态）中心。

参考官方文档搭建自己的 memos 服务，然后在 `config.toml` 中增加对应的配置项：

```toml
[extra.willow.memos]
# 每次加载展示的 memo 数量
show_num = 10
# API 接口
api = "https://momo.chaojie.fun/api/memo"

```

### Photography

willow 支持摄影作品页面，将需要展示的照片链接放在 photos 字段即可。配置参考：

```toml
[extra.willow.photography]
photos = [
    "https://file.chaojie.fun/photography/过春天.jpg",
    "https://file.chaojie.fun/photography/lan.jpg",
]
```

### 完整配置参考

```toml
# --- willow config example --- #

[extra.willow]
# The number of articles to show on the home page
show_article_num = 10

# The order of the navigation bar, home is the first by default
# current supported nav: articles, tags, about, photography, memos
nav = ["articles", "memos", "photography", "tags", "about"]


# --- social accounts --- #
# currently supported: twitter, douban, github

[extra.willow.social]
twitter = "chaojie_cn"
douban = "218724191"
github = "ischaojie"

# --- photography --- #

[extra.willow.photography]
# Put the photos you want to show on the photography page here
photos = [
    "https://file.chaojie.fun/photography/过春天.jpg",
    "https://file.chaojie.fun/photography/lan.jpg",
]

# --- giscus --- #
# see https://giscus.app/ for more details

[extra.willow.comment.giscus]
repo = "ischaojie/willow"
repo_id = "R_kgDOJSaQFQ"
category = "Announcements"
category_id = "DIC_kwDOJSaQFc4CVjI_"
mapping = "title"

# --- memos --- #

[extra.willow.memos]
show_num = 10

# The memo api
api = "https://momo.chaojie.fun/api/memo/all"
```

## License

MIT

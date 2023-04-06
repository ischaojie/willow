willow
> This file translated by ChatGPT.

<div align="center">
 <img src="static/images/logo.png" alt="logo" width="100">

[Example Site](https://willow.chaojie.fun)
</div>

Hello, Willow is a theme designed for the static site generator [zola](https://www.getzola.org/). Without the beautiful open source UI kit [Tabler](https://github.com/tabler/tabler) and my unattractive aesthetics, I couldn’t create a good-looking theme. Thank you Tabler and other third-party libraries, thanks for open-source.

Some of Willow’s key features:

- Common blog features, such as article lists, tag pages, about pages, RSS, and more.
- Support for giscus commenting system.
- Support for photography pages (support for likes TBD).
- Support for memos feed (I call it “whispers”).

## Usage

> Familiarize yourself with the use of [zola](https://www.getzola.org/) before using willow.

### Installation

Make sure you have created a project using zola init myblog and then clone willow to the themes directory:

```bash
cd themes
git submodule add https://github.com/ischaojie/willow.git themes/willow
```
Then specify the theme as willow in the config.toml file:
```toml
theme = "willow"
```
### Configuration

Zola supports adding custom configuration items in the extra field, all of which start with extra.willow. Basic configurations include:

- The number of articles to display on the homepage
```toml
[extra.willow]
show_article_num = 10
```
- Navigation bar orderCurrently supported navigation bars include: articles, tags, about, photography, memos. home is default first.
	> **Notice**

	> Please remember to add the corresponding translation for each
    > navigation bar:
    ```toml
    [languages.zh-CN.translations]
    language_name = "Chinese"
    home = "Home"
    articles = "Articles"
    tags = "Tags"
    photography = "Photography"
    about = "About"
    memos = "Whispers"
    ```
```toml
[extra.willow]
nav = ["articles", "tags", "about"]
```

### Social Media Accounts

The social media accounts currently supported by Willow are: twitter, douban, github (if there are other requirements, please issue a request). Configuration reference:
```toml
[extra.willow.social]
twitter = "chaojie_cn"
douban = "218724191"
github = "ischaojie"
```
All configuration items are account IDs.

### giscus

Currently, Willow only supports the giscus commenting system (if there are other requirements, please issue a request). First consult [giscus](https://giscus.app/) documentation and generate your own giscus configuration. Then add the corresponding configuration item in the config.toml file:
```toml
[extra.willow.comment.giscus]
repo = "<>"
repo_id = "<>"
category = "<>"
category_id = "<>"
mapping = "<>"
```
### memos

> memos is a lightweight, self-hosted memo (feed) for you and your team.

Refer to the official documentation to set up your own memos service, and then add the corresponding configuration items in the config.toml file:
```toml
[extra.willow.memos]
# The number of memos displayed each time they are loaded
show_num = 10
# The API interface
api = "https://momo.chaojie.fun/api/memo/all"
```

### Photography

Willow supports photography pages, by placing the links to the photos you want to display in the photos field. Configuration reference:
```toml
[extra.willow.photography]
photos = [
    "https://file.chaojie.fun/photography/over-spring.jpg",
    "https://file.chaojie.fun/photography/blue.jpg",
]
```
### Full Configuration Reference
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
    "https://file.chaojie.fun/photography/over-spring.jpg",
    "https://file.chaojie.fun/photography/blue.jpg",
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

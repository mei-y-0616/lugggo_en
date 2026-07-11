# これをPCで動かす方法（詰まったら教えて！）
## 1.リポジトリをクローン
VSCodeのターミナルでこのプロジェクトのフォルダを作るフォルダに移動
↓
以下をターミナルで実行
```
git clone https://github.com/mei-y-0616/lugggo_en.git
cd lugggo_en
```


## 2.依存パッケージをインストール
以下をターミナルで実行
```
npm install
```


## 3.「環境変数ファイル」をつくる
これはセキュリティ上の問題で、GitHubには上げていません！
なので、私に連絡して、環境変数ファイルなるものを貰ってください！
欲しくなったらいつでもあげます。

## 4.起動する
以下をターミナルで実行して、http://localhost:3000/
に接続すると、LuggGo!が見えるはずです。
停止したい場合はターミナルで**Ctrl+C**と打つとできます。

私もよく分かってないので上手くいかないところがあったら連絡してください！


---
# [LuggGo!](https://lugggo.up.railway.app/)
LuggGo! is an information website dedicated to hands-free travel and hands-free travel counters in Japan.

## Introduction
This website was developed using Next.js.
You can visit the live, deployed site at the following URL. Please take a look!
[https://lugggo.up.railway.app/](https://lugggo.up.railway.app/)

You can also watch a demonstration video of the "AI Hands-Free Travel Planner" via the following unlisted YouTube link:
[https://youtu.be/Q_sWUrRBPXQ](https://youtu.be/Q_sWUrRBPXQ)

Please note that the submitted source code excludes the following directories:
- `node_modules/`
- `.next/`

Additionally, the API keys in the `.env` file have been removed prior to submission.

## AI Implementation
- **Gemini API (Paid Plan)**: Utilized as the API called by the "AI Hands-Free Travel Planner."
- **ChatGPT (Free Tier)**: Used to assist in drafting the content for the "Terms of Service" and "Privacy Policy" pages.

## External Services
The following external services were used in the development of this website:
- **Gemini API**: Integrated as the AI engine for the "AI Hands-Free Travel Planner."
- **Google Maps Platform (Maps JavaScript API)**: Used to embed Google Maps.
- **Resend**: Used to send contact form submissions via email.
- **Railway**: Used to deploy the live website.

## Key Highlights & Additional Features
- This website is fully compatible with **PWA (Progressive Web App)**.
- The contact form on the "Contact Us" page is fully functional; messages sent through it will be delivered directly to the development team's email address. Feel free to send a test message!
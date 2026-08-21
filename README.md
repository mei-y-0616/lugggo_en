# Purpose of the Production
This website proposes a new approach focused on the luggage of international tourists as a way to alleviate congestion caused by the growing problem of overtourism.
Crowding caused by international tourists has become a major issue at popular tourist destinations. However, even when it is difficult to reduce the number of tourists themselves, we believed that reducing the amount of large
luggage tourists carry could help alleviate congestion on public transportation and at tourist sites. That is why we turned our attention to “hands-free sightseeing”—a concept that allows tourists to explore without carrying large luggage by having their luggage delivered from airports or train stations to their accommodations or by storing it at tourist sites.

The Ministry of Land, Infrastructure, Transport and Tourism has been promoting this initiative since 2015, and there are approximately 400 “Hands-Free Tourism Counters” certified by the ministry nationwide. However, according to a 2024 survey of foreign tourists conducted by the Kinki Regional Transport Bureau, 40% of respondents were aware of the “hands-free tourism” service but had never used it, while 42% were unaware that it even existed; only 18% had actually used the service.
This situation stems from several challenges, including the fact that information on existing counters is scattered across the websites of individual operators, and that comprehensive data covering all counters is only available in CSV or PDF files, which are difficult to search.

That is why we created “LuggGo!”
This website aims to increase awareness and usage of “hands-free sightseeing” and “hands-free sightseeing counters” among international tourists, alleviate congestion on public transportation and at tourist attractions, and enhance the quality of the travel experience.
Additionally, this site was created using open data (in CSV format) from the list of hands-free sightseeing counters published by the Ministry of Land, Infrastructure, Transport and Tourism.

In addition to information about “hands-free sightseeing” and “hands-free sightseeing counters,” the site features a function that allows users to search for hands-free sightseeing counters across the country all at once.
Furthermore, we have implemented the “AI Hands-Free Sightseeing Planner,” which uses AI to suggest the best plan for using hands-free sightseeing counters based on a user’s travel itinerary. We believe this feature will save users the trouble of researching counters and planning their itineraries on their own, thereby helping to promote the use of hands-free sightseeing counters.

We also chose green as the main color for this website. There are two reasons for this. First, as mentioned earlier in the survey, a certain number of users expressed “concerns about lost or damaged luggage” regarding the use of the “Hands-Free Sightseeing” counter, so we wanted to convey a sense of security and trust. Second, we wanted to visually convey that “Hands-Free Sightseeing” is a sustainable initiative that helps alleviate congestion at tourist destinations and other locations.



# PCで動かす方法

## 依存パッケージをインストール
以下をターミナルで実行
```
npm install
```


## 4.起動する
以下をターミナルで実行して、http://localhost:3000/
に接続すると、LuggGo!が見えるはずです。
```
npm run dev
```
停止したい場合はターミナルで**Ctrl+C**と打つとできます。


---
# [LuggGo!](https://lugggo-en.up.railway.app/)
LuggGo! is an information website dedicated to hands-free travel and hands-free travel counters in Japan.

## Introduction
This website was developed using Next.js.
You can visit the live, deployed site at the following URL. Please take a look!
[https://lugggo-en.up.railway.app/](https://lugggo-en.up.railway.app/)

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
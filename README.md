# podcast-referrence

## できること

### cron

1. [x] update xml
1. [x] add xml
1. [x] delete xml
1. [x] change xml url
1. [x] 登録されている rss の一覧
1. [ ] anchor などのポッドキャスト配信サイトのrssはホワイトリストで透過的に取得する　案（仮）
1. [ ] 時系列順のエピソードを並べたjsonの作成


### podcast referrence

1. [x] トップページにポッドキャストの一覧がつく
1. [x] プレイヤー
1. [x] シェアした時に聞いている秒数でシェアできる
1. [x] シェアした時にハッシュタグ＋ ep 番号がつく
1. [ ] シェアした時にタイトルが出る
1. [ ] シェアした時にサイト名のハッシュタグが出る？（URLで検索かければ不要か？
1. [x] ポッドキャストページにアクセスしたら最新の回にリダイレクト
1. [ ] エピソードページに　エピソード名を表示
1. [ ] プレイヤーの作り込み

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

You will be running two processes during development:

- The Miniflare server (miniflare is a local environment for Cloudflare Workers)
- The Remix development server

Both are started with one command:

```sh
npm run dev
```

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

If you want to check the production build, you can stop the dev server and run following commands:

```sh
npm run build
npm start
```

Then refresh the same URL in your browser (no live reload for production builds).

## Deployment

If you don't already have an account, then [create a cloudflare account here](https://dash.cloudflare.com/sign-up) and after verifying your email address with Cloudflare, go to your dashboard and set up your free custom Cloudflare Workers subdomain.

Once that's done, you should be able to deploy your app:

```sh
npm run deploy
```

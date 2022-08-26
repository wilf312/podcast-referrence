# podcast-referrence

## できること

### cron

1. [x] update xml
1. [x] add xml
1. [x] delete xml
1. [x] change xml url
1. [x] 登録されている rss の一覧
1. [ ] anchor などのポッドキャスト配信サイトのrssはホワイトリストで透過的に取得する

### podcast referrence

1. [x] トップページにポッドキャストの一覧がつく
1. [x] プレイヤー
1. [ ] シェアした時に聞いている秒数でシェアできる
1. [ ] シェアした時にハッシュタグ＋ ep 番号がつく

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

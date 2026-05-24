# lp-la-opm

order-point-management（ARマーカー在庫管理システム）のランディングページ。

Next.js 16 + Tailwind CSS 4 で構築。

## 前提条件

| ツール | 推奨バージョン |
|--------|----------------|
| Node.js | 20.x 以上（18.18.x 以上でも可） |
| npm | 9.x 以上 |

Node.js のインストールは [nodejs.org](https://nodejs.org/) または `nvm` を利用してください。

```bash
# nvm を使う場合
nvm install 20
nvm use 20

# バージョン確認
node -v
npm -v
```

## セットアップ

### 1. リポジトリをクローン

```bash
git clone https://github.com/yoppii12/lp-la-opm.git
cd lp-la-opm
```

### 2. 依存パッケージをインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと確認できます。  
ファイルを編集すると自動でリロードされます。

## コマンド一覧

```bash
# 開発サーバー起動（ホットリロード有効）
npm run dev

# 本番用ビルド
npm run build

# 本番サーバー起動（build 後に実行）
npm run start

# Lint チェック
npm run lint
```

## Netlify へのデプロイ

### 初回セットアップ

1. [Netlify](https://app.netlify.com/) にログイン
2. **Add new site → Import an existing project** を選択
3. **GitHub** を選択し、`yoppii12/lp-la-opm` を検索して選択
4. ビルド設定は `netlify.toml` が自動で読み込まれるためそのまま **Deploy** をクリック

デプロイ完了後、Netlify が発行した URL でサイトが公開されます。

### 本番URL の設定（独自ドメイン取得後）

1. Netlify 管理画面 → **Domain management → Add a domain**
2. 独自ドメインを追加・DNS設定を行う
3. `src/lib/constants.ts` の `SITE.baseUrl` を本番 URL に更新してプッシュ

### 継続的デプロイ

`main` ブランチにプッシュすると Netlify が自動でビルド・デプロイします。  
プルリクエストを作成するとプレビュー URL が自動生成されます。

---

## 技術スタック

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

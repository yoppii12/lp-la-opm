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

## 技術スタック

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

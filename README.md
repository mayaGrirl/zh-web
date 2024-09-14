# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install



# 安装依赖
$ npm install

#启动服务 localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# 生成静态项目
$ npm run generate

# 设计稿注意事项
750设计稿
30px = 0.6rem
100px = 2rem

# css 用tailwindcss（tailwindcss支持响应式的）
# 接口基于request.js 进行二次封装
# 开发环境
npm run dev 对应环境变量是.env.development
# 打包开发环境 
npm run build:dev
# 打包测试环境
npm run build:test
# 打包线上环境
npm run build:prod
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

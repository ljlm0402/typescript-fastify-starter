<img src='https://github.com/ljlm0402/typescript-fastify-starter/raw/images/logo.jpg' border='0' alt='logo' />

[Fastify](https://www.fastify.io/) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

<a href="https://www.npmjs.com/package/typescript-fastify-starter" target="_blank"><img src="https://img.shields.io/npm/v/typescript-fastify-starter.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/typescript-fastify-starter" target="_blank"><img src="https://img.shields.io/npm/l/typescript-fastify-starter.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/typescript-fastify-starter" target="_blank"><img src="https://img.shields.io/npm/dm/typescript-fastify-starter.svg" alt="NPM Downloads" /></a>

<br />

## 🤔 What is Fastify ?

Create TypeScript Fastify Project.

application is configured to use TypeScript instead of plain JavaScript. 

## 🧐 What is The package ?

Fastify, Fast and low overhead web framework, for Node.js.

But it consists of JavaScript, which makes it vulnerable to type definitions. That's why we avoid supersets with starter packages that introduce TypeScript.

## 🚀 Quick Start

### Install with the npm global package

```sh
$ npm install -g typescript-fastify-starter
```

### Run npx to install the package

npx is a tool in the JavaScript package management module, npm.

This is a tool that allows you to run the npm package on a single run without installing the package.

If you do not enter a project name, it defaults to _typescript-fasrify-starter_.

```bash
$ npx typescript-fastify-starter "project name"
```

Choose the template you want. We will create more templates later.

Start your typescript-fastify-starter app in development mode at `http://localhost:3000/`

```bash
$ cd "project name" && npm run start
```

## 🎠 Available commands for the server.

- Run the Server in production mode : `npm run start`.
- Run the Server in development mode : `npm run dev`.
- Run all unit-tests: `npm run test`.
- Check for linting errors: `npm run lint`.

You may need to install [nodemon](https://www.npmjs.com/package/nodemon) separately if you do not currently have it installed on your machine.

## ⛑ Code Structure (default)

```bash
│
├── /src
│   ├── /routes
│   │   └── index.route.ts
│   │
│   ├── /test
│   │   └── index.test.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .gitignore
├── jest.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 💳 License

[MIT](LICENSE)

## 🤝 Contributors

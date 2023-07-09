# 前端代码规范插件配置

## 插件下载

1. 插件市场下载 eslint
2. 下载 Prettier

## 配置

在.vscode/settings.json 中进行配置

```
{
    "files.eol": "",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
        // 启用保存时自动修复eslint,默认只支持.js文件
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript", "javascriptreact", "typescript"],
    "typescript.tsdk": "node_modules/typescript/lib"
}

```

# Prettier

安装

```bash
npm install --save-dev prettier
```

根目录创建文件**prettier.config.js**

配置（直接复制即可）

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 4 个空格缩进
  tabWidth: 4,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: "none",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: "always",
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: "preserve",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "css",
  // 换行符使用 lf
  endOfLine: "lf",
};
```

# ESLint

ESLint 原生的规则和 `@typescript-eslint/eslint-plugin` 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。

这里我推荐使用 [AlloyTeam ESLint 规则中的 TypeScript 版本](https://github.com/AlloyTeam/eslint-config-alloy#typescript)，它已经为我们提供了一套完善的配置规则，并且与 Prettier 是完全兼容的（eslint-config-alloy 不包含任何代码格式的规则，代码格式的问题交给更专业的 Prettier 去处理）。

安装

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
```

**最新特性：eslint-config-alloy 现已支持 TypeScript 5.0**
如果你使用的是 TypeScript 4.0，请安装旧版 `npm install --save-dev eslint-config-alloy@4`

**最新特性：eslint-config-alloy 现已支持 Vue 3.0**
如果你使用的是 Vue 2.0，请安装旧版 `npm install --save-dev eslint-config-alloy@3`

AlloyTeam ESLint 规则不仅是一套先进的适用于 React/Vue/Typescript 项目的 ESLint 配置规范，而且也是你配置个性化 ESLint 规则的最佳参考。

创建文件.eslintrc.js

配置

```js
module.exports = {
  extends: ["alloy", "alloy/typescript"],
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // 自定义您的规则
    // Customize your rules
  },
};
```

里面的 rules 配置跟 eslint 的配置一样，本身就是他的二次封装，所以都是支持的

# 检查 tsx

如果需要同时支持 tsx，需要安装

```bash
npm install --save-dev eslint-plugin-react
```

#### package.json 中的 scripts.eslint 添加 `.tsx` 后缀

```json
{
  "scripts": {
    "eslint": "eslint src --ext .ts,.tsx"
  }
}
```

#### VSCode 的配置中新增 typescript react 检查

```json
{
  "files.eol": "\n",
  "editor.tabSize": 4,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 启用保存时自动修复eslint,默认只支持.js文件
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

配置

https://github.com/AlloyTeam/eslint-config-alloy#typescript-react

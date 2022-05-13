// eslint-disable-next-line no-undef
module.exports = {
  env: {
    // browser: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off", // 无需在组件内引用React
    "@typescript-eslint/explicit-module-boundary-types": "off", //关闭函数返回类型
    "no-unused-vars": ["error", { vars: "local", args: "none", ignoreRestSiblings: false }], //禁止出现未使用过的变量
    "no-debugger": "error", // 禁用 debugger
    "no-empty": ["error", { allowEmptyCatch: true }], // 禁止出现空语句块
    eqeqeq: ["error", "always"], //要求使用 === 和 !==
    "no-eval": ["error", { allowIndirect: true }], //禁用 eval()
    indent: ["error", 2], //使用一致的缩进
    "@typescript-eslint/no-empty-function": "off", // 空函数非禁止使用
    "react/display-name": "off", //防止在React组件定义中丢失displayName
    // camelcase: ['error', { properties: 'always' }], // 强制驼峰格式
    "require-await": "error", // 禁止使用不带 await 表达式的 async 函数
    "no-label-var": "error", // 不允许标签与变量同名
    "array-bracket-spacing": ["error", "never"], // 强制数组方括号中使用一致的空格
    "key-spacing": ["error", { afterColon: true }], // 要求在对象字面量的冒号和值之间存在至少有一个空格
    "lines-around-comment": ["error", { beforeBlockComment: true }], // 要求在块级注释之前有一空行
    "prefer-destructuring": ["error", { object: true, array: true }], //优先使用数组和对象解构
    "@typescript-eslint/no-var-requires": 0
  },
};

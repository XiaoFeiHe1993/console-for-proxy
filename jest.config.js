// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // 是否开启测试覆盖率统计
  collectCoverage: true,
  // 测试覆盖率生成报告目录（修改之后要同步修改 package.json 中的 test:coverage 指令）
  coverageDirectory: "<rootDir>/test/coverage",
  // 测试覆盖率指标
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 50,
    },
  },
  // 模块支持的文件后缀
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // 测试文件匹配
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  // 监听文件忽略的配置
  watchPathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/dist",
    "<rootDir>/images",
    "<rootDir>/pages",
  ],
};

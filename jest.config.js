module.exports = {
  testMatch: [
    '<rootDir>/**/*.spec.js'
  ],
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coverageReporters: [
    'lcov', 'text', 'text-summary'
  ],
  testEnvironment: 'node',
  verbose: true,
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx"]
}

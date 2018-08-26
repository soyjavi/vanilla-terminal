module.exports = {
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/index.js',
    '!**/node_modules/**',
    '!App.js',
  ],
  coverageDirectory: 'build/coverage',
  coverageReporters: [
    'json',
    'text',
    'html',
  ],
  moduleNameMapper: {
    '\\.(css|jpg|png)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '/node_modules',
  ],
  silent: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
};

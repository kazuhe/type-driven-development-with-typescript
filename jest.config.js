module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/*.test.(js|jsx|ts|tsx))',
  ],
}

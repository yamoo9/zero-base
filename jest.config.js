export default {
  clearMocks: true,

  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '\\.pnp\\.[^\\/]+$'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': '<rootDir>/src/__mocks__/styles.js',
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/files.js',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.js',
  },
};

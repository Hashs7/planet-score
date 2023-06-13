const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['node_modules', '.mock.js', 'constants.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'json', 'tsx'],
  clearMocks: true, // Clear all mocks implementations
  restoreMocks: true, // Clear all mocks implementations used with jest.replaceProperty
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' })
};

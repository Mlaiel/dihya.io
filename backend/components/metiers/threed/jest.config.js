/**
 * Configuration Jest pour le module threed.
 * - Couverture de test étendue
 * - Reconnaissance des tests dans tous les sous-dossiers
 * - Configuration optimisée pour le métier threed
 */

module.exports = {
  rootDir: __dirname,
  testMatch: [
    '**/*test*.js',
    '**/*spec*.js',
    '**/tests_centralises/**/*.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/build/',
    '/dist/',
    '/legacy/'
  ],
  moduleFileExtensions: ['js', 'json'],
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'json', 'html'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/jest.config.js',
    '!**/*test*.js',
    '!**/*spec*.js',
    '!**/legacy/**'
  ],
  setupFilesAfterEnv: [],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@samples/(.*)$': '<rootDir>/samples/$1'
  },
  testTimeout: 10000,
  clearMocks: true,
  restoreMocks: true,
  maxWorkers: 1 // Pour éviter les conflits de ressources
};

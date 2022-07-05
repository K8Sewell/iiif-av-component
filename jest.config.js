module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: '@happy-dom/jest-environment',
    testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
    cacheDirectory: 'node_modules/.jest-cache',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/coverage/',
        '/docs/',
        '/dist-commonjs/',
        '/dist-esmodule/',
        'dist-umd/',
        '/dist-var/',
        '(.test)\\.(ts|tsx|js)$',
        'jest.transform.js',
        '.json',
    ],
    maxConcurrency: 4,
    modulePathIgnorePatterns: [
        'dist-commonjs/',
        'dist-esmodule/',
        'dist-umd/',
        'dist-var/',
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
        },
    },
    // globals: {
    //     window: {},
    //     self: {},
    // },
};

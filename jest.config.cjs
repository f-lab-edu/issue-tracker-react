module.exports = {
    transform: {
        '\\.css\\.ts$': '@vanilla-extract/jest-transform',
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    testMatch: ['**/?(*.)+(test).[jt]s?(x)', '!**/*.vitest.test*'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['node_modules'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@lib/(.*)$': '<rootDir>/src/lib/$1',
        '^@ui/(.*)$': '<rootDir>/src/ui/$1',
    },
    transformIgnorePatterns: [
        "/node_modules/(?!react-icons)/"
    ]
};

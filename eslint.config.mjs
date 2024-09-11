import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    {
        ignores: ['**/node_modules', '**/dist', '**/public'],
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                project: ['./packages/*/tsconfig.json'],
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintPluginPrettierRecommended,
];

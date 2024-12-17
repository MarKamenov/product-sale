import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import jestPlugin from "eslint-plugin-jest";
import cypress from "eslint-plugin-cypress";

export default [
  // Base ESLint rules
  js.configs.recommended,

  // Browser globals support
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
      },
    },
    rules: {
      "no-undef": "error", // Ensures undefined variables are caught
    },
  },

  // Cypress support
  {
    files: ["**/*.ts", "**/*.tsx", "cypress.config.ts"],
    plugins: { cypress },
    languageOptions: {
      globals: {
        Cypress: "readonly",  // Allow Cypress globals
        cy: "readonly",
      },
    },
    rules: {
      ...cypress.configs.recommended.rules, // Add recommended Cypress rules
    }
  },

  // Jest Support
  {
    files: ["**/*.test.js", "**/*.test.ts", "**/*.test.tsx", "**/*.spec.js", "**/*.spec.ts", "**/*.spec.tsx"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        jest: "readonly", // Add Jest globals
        describe: "readonly",
        test: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules, // Add recommended Jest rules
    },
  },

  // TypeScript support
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // React support
  {
    files: ["**/*.jsx", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react,
      prettier,
      "react-hooks": reactHooks,
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Import plugin rules
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      import: importPlugin,
      prettier
    },
    rules: {
      "import/order": ["warn", { "newlines-between": "always" }],
    },
  },
];

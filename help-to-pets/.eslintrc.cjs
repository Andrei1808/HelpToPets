module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "plugin:prettier/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json'
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "prettier",
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "error",
        "no-underscore-dangle": "off",
        "no-extraneous-dependencies": "off",
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        "import/no-cycle": "off",
        "react/jsx-props-no-spreading": "off",
        '@typescript-eslint/typedef': ['error', {
            variableDeclaration: true,
            arrowParameter: false,
            propertyDeclaration: true,
            variableDeclarationIgnoreFunction: true, // Если хотите игнорировать функции
            parameter: true, // Если хотите требовать типы у параметров функций
        }],
        "no-param-reassign": [
            "error",
            { "props": true, "ignorePropertyModificationsFor": ["state"] }
        ],
    },
}

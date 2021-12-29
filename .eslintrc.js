export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
          "error",
          2
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "quotes": [
          "error",
          "double"
        ],
        "semi":[
          "error",
          "always"
        ],
        "comma-spacing": [
          "error",
          {"before": false, "after": true}
        ],
        "arrow-spacing": [
          "error",
          {"before": true, "after": true}
        ],
        "space-infix-ops": [
          "error", 
          { "int32Hint": false }],
        "no-unused-vars": [
          "error"
        ]
      },
      "settings": {
        "react": {
          "version": "detect"
        }
      }
};

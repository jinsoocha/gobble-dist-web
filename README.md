[![Build Status](https://travis-ci.org/gobble43/gobble-dist-web.svg?branch=master)](https://travis-ci.org/gobble43/gobble-dist-web)

[![Stories in Ready](https://badge.waffle.io/gobble43/gobble-dist-web.svg?label=ready&title=Ready)](http://waffle.io/gobble43/gobble-dist-web)

# gobble-dist-web
Front end web file server - Universal React Redux

## Table of Contents
1. [Getting started](#getting-started)
2. [Tech](#tech)
3. [Directory Layout](#directory-layout)
4. [Team](#team)
5. [Contributing](#contributing)

## Getting started

Clone and install dependencies:
```sh
$ https://github.com/gobble43/gobble-dist-web.git
$ cd gobble-dist-web
$ npm install
```
Create `env/development.env` and set environment variables. Follow `env/example.env`.

```sh
$ npm run bundle
$ npm start
```

#### Testing

Configure the environment variable `NODE_ENV` prior to running tests.

 ```sh
$ export NODE_ENV=development
$ npm test
```

## Tech
 - React w/ React Router
 - Redux
 - Node
 - Express
 - Jade
 - Facebook OAuth2

## Directory Layout
```
├── /env/                       # Environment variables
├── /node_modules/              # 3rd-party libraries and utilities
├── /client/                    # Client React-Redux Entry Points
├── /common/                    # Universal React Components & Redux State Management
├── /server/                    # Server source
│   ├── /config/                # Initial server configuration
│   ├── /lib/                   # Utilities
│   ├── /routes/                # Routes
│   │   ├── auth-routes         # PassportJS Facebook OAuth endpoints
│   │   └── jade-only-routes    # Server-side rendering - only Jade
│   │   └── react-redux-routes  # Server-side rendering - Jade + React + Redux
│   ├── /views/                 # Jade templates
│   └── server.js               # Express application entry point
├── /dist/                      # Distribution
│   ├── /fonts/                 # Fonts
│   ├── /js/                    # Bundled Client React-Redux Entry Points
│   ├── /style/                 # CSS
│   └── server.bundle.js        # Bundled Express Server
├── package.json                # npm dependencies, scripts, and package info
├── webpack.config.js           # Webpack Configurations
└── .eslintrc                   # ESLint settings
```

## Team
  - Product Owner:            [Leo Adelstein](https://github.com/leoadelstein)
  - Scrum Master:             [Jack Zhang](https://github.com/jackrzhang)
  - Development Team Members: [Leo Adelstein](https://github.com/leoadelstein), [Jinsoo Cha](https://github.com/jinsoocha), [Will Tang](https://github.com/willwtang), [Jack Zhang](https://github.com/jackrzhang)

## Contributing
See [STYLE-GUIDE.md](https://github.com/gobble43/docs/blob/master/STYLE-GUIDE.md) and [CONTRIBUTING.md](https://github.com/gobble43/docs/blob/master/CONTRIBUTING.md) for contribution guidelines.

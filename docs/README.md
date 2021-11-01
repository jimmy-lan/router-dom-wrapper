# React Permission Routing

> Author: Jimmy Lan

React Permission Routing is a thin layer around [React Router DOM](https://www.npmjs.com/package/react-router-dom) to achieve easy configuration of permission-based routing.
The library also provides utilities to configure routes using object-based configurations, but please note that object-based route configurations will be added back in [React Router DOM v6](https://www.npmjs.com/package/react-router-dom).

| Other resources: [Quick Start Guide](), [API Documentation](). |
| --- |

> On this page:
> - [Purpose: Why I wrote this project](#purpose-why-i-wrote-this-project)
> - [License: How you can use this code](#license-how-you-can-use-this-code)
> - [Installation: The library and its peers](#installation-the-library-and-its-peers)
> - [Contribution: Guide to set up this repo](#contribution-guide-to-set-up-this-repo)
> - [About: Let's get in touch](#about-lets-get-in-touch)
> 
> Read this documentation on [the documentation website](https://permission-routing.jimmy-lan.com).

## Purpose: Why I wrote this project

Displaying different routes based on user permissions is a common practice.
However, I found myself spending time setting up this boilerplate logic across projects.
This motivated me to extract the React Permission Routing library, so the conditional route rendering logic is readily available for projects.

I love how we can configure routes statically as in React Router DOM v3.
It made code splitting very easy, because I could initialize routing arrays in different files and join them together in an `index.js` or `index.ts` file.
Despite the release of [React Router Config](https://www.npmjs.com/package/react-router-config), I stayed a bit opinionated and created my own.
Rest assured, you don't need to accept my opinion when you use the React Permission Routing library. The library will work just fine with or without static route configurations.

## License: How you can use this code

This boilerplate code is available under the MIT license.
You are welcome install this library in your projects as specified in the [Installation](#installation-the-library-and-its-peers) section, or you can copy parts of code from the project should you need it.

I strongly encourage you to read the MIT license text included in the file named `LICENSE` under the root of this repository even if you are familiar with MIT licenses.
Thank you for respecting my work and effort!

_As a developer who contributes to open source, I sincerely hope that this work will help your project and benefit the community._

## Installation: The library and its peers

> **Disclaimer:** At the moment, please note that the library only works with React Router DOM v5.
> I _might_ update the library to support React Router DOM v6 when a stable release of React Router DOM v6 is available.

React Permission Routing can be installed via npm.

```bash
npm install --save react-permission-routing
```
Please ensure that you are in a React project, and you have [React Router DOM](https://www.npmjs.com/package/react-router-dom) installed:

```bash
npm install --save react-router-dom
```

## Contribution: Guide to set up this repo

Thank you for your interest in the React Permission Routing library!
I appreciate your ideas or contributions.

### Building the library

To set up this project, clone the repository and run `npm install`.
You can then build a local version of the library using

```bash
npm run build
```

The transpiled JavaScript code will live in the `dist` folder.

### Testing the library

To test the library, create a React project somewhere else on your machine.
Then, run `npm install <LIBRARY_PATH>` in the **new React project** folder.
Be sure to substitute `<LIBRARY_PATH>` with a path to the folder storing React Permission Routing.

Note that this can result in two React instances being run.
Please run `npm link <REACT_PROJECT_PATH>/node_modules/react-router-dom <REACT_PROJECT_PATH>/node_modules/react` from the **root** of **this repo**.
Be sure to replace `<REACT_PROJECT_PATH>` with a path to the React project that you created for testing.

File watching and automatic project builds are not available at this time.
You will need to rebuild the React Permission Routing library manually after you make code changes.
Run

```bash
npm run build
```

# About: Let's get in touch

Author: Jimmy Lan

LinkedIn: https://www.linkedin.com/in/jimmy-lan-0ba0a8194/.

If you have a suggestion for improvements, please don't hesitate to contact me!
If you have an awesome idea, I will be very interested to hear about it, and _maybe_ I can help you out a bit!

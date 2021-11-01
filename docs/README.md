# React Permission Routing

> Author: Jimmy Lan

React Permission Routing is a thin layer around [React Router DOM](https://www.npmjs.com/package/react-router-dom) to achieve easy configuration of permission-based routing.
The library also provides utilities to configure routes using object-based configurations, but please note that object-based route configurations will be added back in [React Router DOM v6](https://www.npmjs.com/package/react-router-dom).

## Purpose: Why I wrote this project

Displaying different routes based on user permissions is a common practice.
However, I found myself spending time setting up this boilerplate logic across projects.
This motivated me to extract the React Permission Routing library, so the conditional route rendering logic is readily available for new projects.

## License: How you can use this code

This boilerplate code is available under the MIT license.
You are welcome install this library in your projects as specified in the [Installation](#installation-the-library-and-its-peers) section, or you can copy parts of code from the project should you need it.

I strongly encourage you to read the MIT license text included in the file named `LICENSE` under the root of this repository even if you are familiar with MIT licenses.
Thank you for respecting my work and effort!

_As a developer who contributes to open source, I sincerely hope that this work will help your project and benefit the community._

## Installation: The library and its peers

React Permission Routing can be installed via npm.

```bash
npm install --save @ly-public/router-dom-wrapper
```
Please ensure that you are in a React project, and you have [React Router DOM](https://www.npmjs.com/package/react-router-dom) installed:

```bash
npm install --save react-router-dom
```


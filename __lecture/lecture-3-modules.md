# 4.1.3 Modules

- in Node: `module.exports` and `require` to package
- in vanilla JS: `import` and `export`
- Our **build system** compiles away the imports and exports.

---

### Default exports

```js
// create a Button Component
function Button(props) {
  ✂️
}

// make it _importable_ from other files_
export default Button;
```

```js
// _Import_ it into the file where you want to use it.
import Button from '../Button';
// This replaces the "require()" syntax used in Node
```

---

### Third-party dependencies

- As in Node, they're specified in `package.json`, and live in `node_modules`.
- They can be imported without any `../`:

```js
import React from 'react';

// Equivalent to:
import React from '../../node_modules/react/index.js'
```

---

### CSS imports

In Node, we can only ever `require` two types of files:

- `.js`
- `.json`.

With build systems, we can support _many different_ types of files.

---

```js
import './App.css'
```

---

# Package managers

The official package manager is NPM (Node Package Manager).

We use Yarn, which works mostly the same way, but is a bit faster/_better_. 🤔

---

# Package.json Scripts

- Run a local development server with `yarn start`
- This spins up an Express server that rebuilds your app on every change. 😮

---

# Fin

import mdxTheme from '../../theme';
export const theme = mdxTheme;

import npmTrends from './assets/npm-trends.png';
import compiled from './assets/compiled.png';
import hierarchy from './assets/intro-hierarchy.png';
import todoMVC from './assets/todomvc.png';
import blog from './assets/blog.png';
import bankApp from './assets/bank-app.png';

import Spacer from '../../components/Spacer';

# 4.1.1 Intro to React

---

### What is React?

"A JavaScript library for building user interfaces"

---

An _open-source project_ built and maintained by **facebook**.

---

### Super popular!

<img src={npmTrends} style={{ maxWidth: '60vw' }} />

---

### Why is this needed?

- Dynamic apps have lots of **front-end state**
- Without the right tools, it's very easy to wind up with **spaghetti code**
- Build apps faster ⚡️
- Better **user experience**

---

# Components

- Small bits of code representing a portion of the UI
- Reusable
- Dynamic (can update the UI based on changes)

---

```jsx live=true clickToReveal=true
function GoButton(props) {
  return (
    <button
      className="btn"
      onClick={props.onClick}
    >
      Go!
    </button>
  );
}

render(
  <GoButton
    onClick={() => alert('hi')}
  />
)
```

---

# JSX: HTML-in-JSX

- JSX is a language that _compiles to JS_.

---

# Compiling

<img src={compiled} />

---

## Runtime vs. Buildtime

- JS is typically compiled _just-in-time_: in the browser, right before it's run.
- Mobile apps, on the other hand, need to be compiled ahead of time.

---

### Compiling JSX to JSX

```js
// Before
function GoButton(props) {
  return (
    <button className="btn" onClick={props.handleClick}>
      Go!
    </button>
  );
}

// After
function GoButton(props) {
  return React.createElement(
    'button',
    {
      className: 'btn',
      onClick: props.handleClick,
    },
    'Go! ->'
  );
}
```

---

# Build Systems

- Compile JSX to JS
- Combine many JS files into a single "bundle"
- Running a development server
- Checking your code for problems

---

### JSX ≠ HTML

<Spacer size={50} />

HTML:

```html
<h1 class="title">Hello</h1>
<label for="name-selector">Select your name</label>
```

JSX:

```jsx
<h1 className="title">Hello</h1>
<label htmlFor="name-selector">Select your name</label>
```

---

# Squigglies { }

A "slot" we can write Javascript expressions in.

---

```jsx
let index = 0;

<div id={'item-' + index} />;
```

---

```jsx live=true
const awakeStudents = 10;
const asleepStudents = 0;

render(
  <div>
    There are {awakeStudents + asleepStudents}
    students in the class.
  </div>
);
```

---

```jsx
<li className={isOnline && 'green'}>{user.username}</li>
```

---

# Exercise

Convert this JSX snippet to HTML:

```jsx
let birthdayCakeImage = '/images/cake.jpg';
let age = 10;

<div className="wrapper">
  <img src={birthdayCakeImage} />
  <p>Happy {age}th birthday!</p>
</div>;
```

---

Convert this one too:

```jsx
let agreeToTerms = false;

<div>
  <label htmlFor="terms-of-service">
    <input type="checkbox" id="terms-of-service" /> I agree to the terms
  </label>

  {agreeToTerms && (
    <div>YOUR SOUL BELONGS TO ME MWAHAHAHAHAAAAAAHHHHHH!!!1</div>
  )}
</div>;
```

---

Convert:

```jsx
const pets = [
  {
    name: 'Bark Obama',
    age: 3,
    species: 'dog',
    breed: 'Labradoodle',
  },
  {
    name: 'Chairman Meow',
    age: 8,
    species: 'cat',
    breed: 'ragdoll',
  },
];

<div>
  <h1 className="title">My pets:</h1>
  <ul>
    <li>
      <h3>{pets[0].name}</h3>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Species</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pets[0].age}</td>
            <td>{pets[0].species}</td>
            <td>{pets[0].breed}</td>
          </tr>
        </tbody>
      </table>
    </li>

    <li>
      <h3>{pets[1].name}</h3>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Species</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pets[1].age}</td>
            <td>{pets[1].species}</td>
            <td>{pets[1].breed}</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>
</div>;
```

---

# Rendering

```jsx
ReactDOM.render(
  <div>Hello world</div>,
  document.querySelector('#root')
);
```

---

# React vs ReactDOM

- React is platform-independent
- ReactDOM is all the code specific for web (as opposed to, for example, React Native).

---

#### Most React apps have very sparse HTML documents:

```html
<html>
  <head>
    <title>My kewl homepage</title>
  </head>
  <body>
    <noscript>This page requires Javascript</noscript>
    <div id="root"></div>
  <body>
</html>
```

Everything else gets created by React.

---

# React Components

- "Custom supercharged HTML elements"
- Allows us to avoid duplication (like in the pets example)

---

Now it fits on the screen:

```jsx
<div>
  <h1 className="title">My pets:</h1>
  <ul>
    <PetInfo
      name={pet[0].name}
      age={pet[0].age}
      species={pet[0].species}
      breed={pet[0].breed}
    />
    <PetInfo
      name={pet[1].name}
      age={pet[1].age}
      species={pet[1].species}
      breed={pet[1].breed}
    />
  </ul>
</div>
```

---

### Components, all the way down

- Can be really tiny: `<Button>`, `<Heading>`, `<Input>`
- Can be an entire application: `<App>`
- Lots of stuff in-between

---

<img src={hierarchy} style={{ maxHeight: '70vh', maxWidth: '70vw' }} />

---

### Exercise: Break an image into components

---

<img src={todoMVC} style={{ maxHeight: '100vh', maxWidth: '100vw' }} />

---

<img src={blog} style={{ maxHeight: '100vh', maxWidth: '100vw' }} />

---

<img src={bankApp} style={{ maxHeight: '100vh', maxWidth: '100vw' }} />

---

[Next lecture: Props](../lecture-2-props)
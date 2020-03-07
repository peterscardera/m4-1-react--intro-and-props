# 4.1.1 Intro to React

---

### What is React?

"A JavaScript library for building user interfaces"

---

An _open-source project_ built and maintained by **facebook**.

---

### Super popular!

<img src='./assets/npm-trends.png' style='max-width:60vw;' />

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

<img src='./assets/compiled.png' />

---

## Runtime vs. Buildtime

- JS is typically compiled _just-in-time_: in the browser, right before it's run.
- Mobile apps, on the other hand, need to be compiled ahead of time.

---

### Compiling JSX to JS

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
    'Go!'
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

A _slot_ in which we can write JavaScript expressions.

---

```jsx
let index = 0;

<div id={'item-' + index} />;
```

---

```jsx live=true
const awakeStudents = 10;
const asleepStudents = 3;

render(
  <div>
    There are {awakeStudents + asleepStudents} students in the class.
  </div>
);
```

---

```jsx
if online is true and the calss is green

<li className={isOnline && 'green'}>{user.username}</li>

if isOnline must be true before

// ⚠️ New notation! another way to use of &&.
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



<div class= "wrapper">
<img src="'/images/cake.jpg'">; >
<p> Happy 10th birthday! </p>
</div>


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
HTML
//because its false there is no div ITS Not in the DOM

<div>
  <label for= "terms-of-service">
    <input type="checkbox" id="terms-of-service"/>I agree to the terms
  </label>

</div>

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
``
//HTML BELOW

<div>
  <h1 class="title">My pets:</h1>
  <ul>
    <li>
      <h3>'Bark Obama'</h3>
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
            <td>3</td>
            <td>Dog</td>
            <td>Labradoodle</td>
          </tr>
        </tbody>
      </table>
    </li>

    <li>
      <h3>Chairman Meow</h3>
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
            <td>8</td>
            <td>cat</td>
            <td>Ragdoll</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>
</div>;

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
noscript is what displays when JS has been disabled
**Everything** else gets created by React.

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

<img src='./assets/lego.png' style='max-height:90vh;max-width:90vw' />

---

<img src='./assets/intro-hierarchy.png' style='max-height:80vh;max-width:80vw' />

---

### Exercise: Break an image into components

_to draw along with me, open the images with [JS Paint](https://jspaint.app)_

---

<img src='./assets/todomvc.png' style='max-height:90vh;max-width:90vw' />

---

<img src='./assets/blog.png' style='max-height:90vh;max-width:90vw' />

---

<img src='./assets/bank-app.png' style='max-height:90vh;max-width:90vw' />

---

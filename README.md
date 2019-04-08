# W4D1 - React

REPO: https://github.com/NimaBoscarino/react-notes

Note! You can run the example by `npm i`nstalling, and then running `npm start` and navigating to `localhost:3000` in your browser.

[Take a look at the React boilerplate](https://github.com/lighthouse-labs/react-simple-boilerplate)

Welcome to React!

React is a *framework*. Frameworks are a subset of libraries. They are libraries that help build things faster, by buying into an ecosystem. Frameworks have **opinions** on how you should do things, and **abstractions** to help with efficiency.

React's opinions:

- Good for developing the front-end of web applications
- Declarative vs. imperative
- Performant
- Strict opinions on data flow (from parent to child)
    - "Data down, actions up!"

React's main abstraction or gimmick:

- Components!

Everything in the design of React is built around the idea of components.

## Components

```js
class SomeComponent extends React.Component {
    render() {
        return (<div>Hello world</div>) // Returns JSX
    }
}
```

Components are pieces of reusable visual bits that we'll use to build our apps. Examples of components could be menus, cards, button, etc. A component in React can be made a class that extends `React.Component`, and implements a `render()` method that returns valid **JSX** (More on that in a minute).

Components can have other components *nested* as **children**. A parent component can pass **props** down to a child component. Each component has its own **state**.

## JSX - Javascript + XML

JSX is a superset of Javascript. It lets embed Javascript in the HTML that we want our components to return. There are some rules to writing valid JSX. Here are some of them: 

1) All tags must close. E.g. <img /> <-- Note the ending slash
2) There MUST be one root tag. The `render()` method cannot return multiple sibling components. There must be **one** parent, with as many nested components as you like inside.
3) HTML comments do not work. We must use Javascript comments inside of curly braces instead. For example:

```js
{
    // This is a comment
}
```

## Dynamic Data

To dynamically render components, we could use ternary operators in curly braces.

```js
render() {
    return (
        {
            someBool ? <p>Hello</p> : <p>World</p>
        }
    )
}
```

We could also move the conditial out to a function, and call that. Remember that in JSX we can only have **one** expression within curly braces at a time, so we cannot write if-else statements.

## Looping

```js
{
    [1, 2, 3].map(elem => <p key={elem}>{elem}</p>)
}
```

Has to be done with `map`, not `forEach`. JSX can render array elements as siblings.

## Flow of Data

In the lecture we talked about props. Props are values that can be passed to a component when it gets instantiated. "Passing props" looks like this:

```
<SomeCoolComponent
    prop1="haha!"
    prop2="woo!"
/>
```

And the props can be accessed from _within_ the particular component like this:

```
// inside the class SomeCoolComponent

render() {
    console.log(this.props.prop1) // haha!
    
    return (
        <h1>{this.props.prop2}</h2>
    )
}
```

Props can be **anything**. This means _any_ JavaScript value, including strings, numbers, objects, functions, etc. We'll explore that idea in the breakout and tomorrow.

There are two sources of data for a component: State and Props. State is LOCAL to a component. We'll talk about it in the breakout. You can set the initial state in the constructor:

```js
this.state = {
    hello: 'world'
}
```

Outside of the constructor, we will call `this.setState()` to set the state. **NOT** `this.state = ...`.

Cheers! - Nima
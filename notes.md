# W 6 D 1: Intro to ReactJS

## Welcome Back!

```
Empty class
Lighthouse off
Waves crashing
When will you come back
```

## React!

- Lecture 2/3
- Breakout 1/3

## Things to keep in mind

1. Dont pay too much attention to the actual code
2. The "gimmick" - Why does this thing exist?
   1. Jquery
      1. Select things on the DOM, and do things to them
      2. Attaching listeners to all h1
         1. `$('h1').click(() => {})`
      3. Changing the text of all p tags
      4. Adding styles to ....
   2. Express
      1. Middleware
         1. Request -> SOMETHING -> Response
         2. SOMETHING: cookie stuff, template engines (EJS), routing

## Gimmick for React

- *COMPONENTS*

## React is... a Framework (some people will say Library)

Library: collection of information. Code that you can use, that you didn't write! (That works!) Usually to solve a problem, or a class of problems.

- jQuery can be used as a library.

Framework: Library that has very strict opinions. Library that I really buy into. That means you don't have to start from scratch every time.

- Express
- jQuery makes its way into being called a framework as well

React will be used as a framework for building client-side single page applications.


FOR LECTURE!
============

Why do client-side frameworks exist?
  - building our apps entirely in EJS is the worst!!!!!
    - Imagine doing AJAXy stuff in EJS
  - Building stuff with just jQuery... it's an option
    - jQuery is too light of a tool
    - jQuery doesn't really force a structure on us
  - We want to build applications quickly
  - We want to build applications modular(i)ly
  - We want to have a good time!
  
What are the challenges of SPAs?
  - What are they?: Tweeter
    - You don't surf to other pages. Technically there's one page, and parts of it reload (using AJAX strategies). Data is shoved in.

  - Shift in business logic
    - Security 
  - Change in backend role (API)
    - API is a server that returns/receives data instead of HTML

What are components? (compare with ejs partials)
- A visual block of UI
- Built up of visual stuff, and behavioural stuff
- Take in something... to customize them

Plan: How do we break up a User Inteface into components?
- draw rectangles

Build simple static components (no logic, just rendering html)
- hardcoding stuff, then we make our way into using props

Thinking in React
- think of the components
              - children

Make a complete list of all UI state required by the app

For each component, what customization does the component need to receive? (props)


FOR BREAKOUT:

Note! YOU CAN WRITE FUNCTIONS AS ARROW FUNCTIONS TO AVOID BINDING.

Otherwise, whenever you have a helper function that calls `this` (e.g. `this.setState` or `this.props`) you'll need to bind it in your constructor. See the code for examples.

Props and state

- Props are things that components receive
- state is what a component HAS, or "thinks about"
- state lets me remember things
  - read state as this.state.asdasdasd
  - update state with this.setState({ changes go in here })

Functional Components vs Class Components

- functionals cannot have state! But they're nicer to read.
- Class components: can have state! And also... can tap into "lifecycle methods"

if statements in jsx

- HONESTLY, Just use helper functions.
- You CAN be clever and use ternaries, but I wouldn't stress about it.

loops in jsx

- do them with .map
- See the examples

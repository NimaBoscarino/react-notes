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


Props and state
Functional Components vs Class Components
JSX declarative syntax
if statements in jsx
loops in jsx
jsx tips and gotchas
how jsx works behind the scenes (briefly)
ES6 classes and how to read ES5 (old) React syntax

Props vs State
Use of setState()
How to "think" in components
Parallels to wireframing
Starting from static pages, then refactoring into components
How to identify where <App />, <Header />, etc components might go
Scope!
Use of .bind(this)
How
More importantly - Why
jsx tips and gotchas include:
class vs className
every tag needs to be closed
key attributes in loops
it is possible to use { debugger } in jsx
Quotation marks vs interpolation in property values (Ex: className="{this.props.class}" vs. className={this.props.class})
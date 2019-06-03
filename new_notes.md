# W 6 D 1: A whole new thing ---- React

Goals:
======

1. Poem
2. Talk about remote week, airing of grievances, etc.
3. React
   1. Lecture
   2. Breakout


## Poem

Classroom empty
So alone
Why would they do this
When is week 5 over

## Remote week

Computer science

- algorithm
- recursion
- big O
- traversal
- treeesssss 🌲 (but upside down)

- General problem solving


## jQuery

- working with jQuery objects, which have methods that we can use to manipulate the DOM



## The Gimmick

The key to a particular framework or library. Value proposition.

- jQuery -> the $ objects
- Express -> middleware
  - cookie session
  - ejs templates
  - body parser
  - routes
    - app.get
    - app.post
    - ... app.use // <- register middleware

## React

- components

Why?

- jQuery... what happened when data changed?
- I want a UI to changes with the data
- I don't want to repeat myself a lot

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

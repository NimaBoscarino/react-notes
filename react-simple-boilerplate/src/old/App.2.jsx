import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      number: 0
    }

    this.increaseNumber = this.increaseNumber.bind(this)
    this.decreaseNumber = this.decreaseNumber.bind(this)
  }

  // THIS -> the component
  increaseNumber() {
    this.setState({
      number: this.state.number + 1
    })
  }

  decreaseNumber() {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    // console.log('this', this)
    return (
      <div>
        <h2>{this.state.number}</h2>
        <button onClick={this.increaseNumber}>Click Me Up</button>

        <button onClick={this.decreaseNumber}>Click Me Down</button>

      </div>
    )
  }
}

// class HeaderLabel extends Component {
//   render() {
//     return (
//       <h1>Welcome to the counters!</h1>
//     )
//   }
// }


const HeaderLabel = (props) => {
  return (
    <h1>Welcome, {props.name}, to the counters!</h1>
  )
}

const Main = () => {
    
    return (
      <div>
        <HeaderLabel name={'Nima'}/>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
}

export default Main;
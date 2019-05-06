import React, {Component} from 'react';

class KanyeWest extends Component {
  render() {

    if (this.props.mood === 'angry') {
      return <img src='https://66.media.tumblr.com/tumblr_m9466vHFTz1rue873o1_400.png' />
    } else {
      return (
        <img src={'https://66.media.tumblr.com/b8cb54d763901ce0158385a1e12b0cca/tumblr_o8lzttyTbn1rue873o1_500.png'} />
        )
    }
  }
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      message: 'hah!'
    }

    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    console.log(this)
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    console.log(this)
    return (
      <div>
        <h1>Number: {this.state.number}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

// <KanyeWest mood="angry"/>
//         <KanyeWest />
export default App;

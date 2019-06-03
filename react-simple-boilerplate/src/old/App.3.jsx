import React, { Component } from 'react';


class Main extends Component {

  getMoodText(happy) {
    if (happy) {
      return 'Haha'
    } else {
      return 'Boohoo'
    }
  }

  render() {
    const happy = false

    return (
      <div>
        <h1> { this.getMoodText() }</h1>
        <h1>Haha</h1>
        {
          [
            'Hello',
            'World',
            'Its ya boi'
          ].map(elem => <h1>{elem}</h1>)
        }
        {/* {
          [
            <h1>Hello</h1>,
            <h1>World</h1>,
            <h1>Its ya boi</h1>
          ]
        } */}
      </div>
    )
  }
}

export default Main;
import React, {Component} from 'react';

const songLyrics = [
  `Very rarely do you catch me out 'all done specially invited guest'd me out`,
  `Y'all been tellin' jokes that's gon' stress me out
  Soon as I walk in, I'm like, "Let's be out"`,
  `I was off the chain, I was often drained
  I was off the meds, I was called insane`,
]


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latestLyric: 0
    }

    this.updateLatestLyric = this.updateLatestLyric.bind(this);
  }

  updateLatestLyric(index) { // updateLatestLyric(100) -> state.latestLyric = 100
    this.setState({
      latestLyric: index
    })
  }

  render() {
    return (
      <div>
        <h1>Latest Lyric {this.state.latestLyric}</h1>
        <SongLyricContainer cb={this.updateLatestLyric}/>
        <SongLyricContainer cb={this.updateLatestLyric}/>
        <SongLyricContainer cb={this.updateLatestLyric}/>
      </div>      
    );
  }
}

class SongLyricContainer extends Component {
  constructor(props) {
    super(props)

    this.stateasdasd = {
      lyricIndex: 0
    }
    
    this.nextLyric = this.nextLyric.bind(this);
    this.previousLyric = this.previousLyric.bind(this);
  }
  
  previousLyric() {
    let nextIndex = this.stateasdasd.lyricIndex - 1
    this.setState({
      lyricIndex: nextIndex
    })

    this.props.cb(nextIndex)
  }

  nextLyric() {
    let nextIndex = this.stateasdasd.lyricIndex + 1
    this.setState({
      lyricIndex: nextIndex
    })

    this.props.cb(nextIndex)
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.previousLyric}>Prev</button>
          <button onClick={this.nextLyric}>Next</button>
        </div>
        <p>{songLyrics[this.stateasdasd.lyricIndex]}</p>
      </div>
    )
  }
}



export default App;


// const Welcome = (props) => <button>Howdy doo{props.name}</button>

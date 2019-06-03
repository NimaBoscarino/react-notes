import React, { Component } from 'react';
   
class VideoContainerOld extends Component {
  render() {
    if (!this.props.currentVideo) {
      return (
        <div className="video-container">
          <h1>No video selected</h1>
        </div>
      )
    } else {
      const src = this.props.currentVideo.src
      const title = this.props.currentVideo.title
      return (
        <div className="video-container">
          <img className="video" src={src} />
          <h2>{title}</h2>
        </div>
      )
    }
  }
}

const VideoContainer = (props) => {
  return (
    <div className="video-container">
      {
        props.currentVideo && (
          <div>
            <img className="video" src={props.currentVideo.src} />
            <h2>{props.currentVideo.title}</h2>
          </div>
        )
      }
    </div>
  )
}

class VideoSuggestionsList extends Component {

  render() {

    return (
      <div className="video-suggestions-list">
        {
          this.props.videos.map(v => {
            return(
              <VideoSuggestion
                key={v.id}
                id={v.id}
                title={v.title}
                src={v.src}
                setVideo={this.props.setVideo}
              />
            )
          })
        }

      </div>
    )
  }
}

class VideoSuggestion extends Component {
  render() {

    return (
      <div
        onClick={() => this.props.setVideo(this.props.id)}
        className="video-suggestion">
        <img src={this.props.src} />
        <h2>{ this.props.title }</h2>
      </div>
    )
  }
}

class Main extends Component {
  constructor(props) {
    super(props) // create the component as usual (React's usual stuff)
    this.state = { // here's a bit of extra sauce
      currentVideoID: null,
      videos: [
        {
          id: 1,
          title: "Awesome dogs",
          src: "https://cdn2-www.dogtime.com/assets/uploads/2015/04/april-fools-dog-pranks-youtube-1.jpg", 
        },
        {
          id: 2,
          title: "Wow I love cats",
          src: "https://i.ytimg.com/vi/B8Hw5DZiZrY/maxresdefault.jpg", 
        },
        {
          id: 3,
          title: "Did you know about...",
          src: "https://i.ytimg.com/vi/nJAGRRNFadI/maxresdefault.jpg", 
        },
        {
          id: 4,
          title: "Platypi are evil",
          src: "https://animalstv.online/wp-content/uploads/2019/02/yt-10389-Dog-Love-Cute-and-Funny-Dog-Videos-Compilation-2018-Perros-Adorables-Video-Recopilacin-400x250.jpg", 
        },
        {
          id: 5,
          title: "Fish can also be cute",
          src: "https://cf.ltkcdn.net/dogs/images/std/236742-699x450-cutest-puppy-videos.jpg", 
        },                
      ] ,
    }

    // make sure the value of "this" is correct
    // this.increaseNumber = this.increaseNumber.bind(this)
  }

  setVideo = (id) => {
    this.setState({
      currentVideoID: id
    })
  }

  render() {
    const data = ['hey', 'sup', 'what up']
    const array = [<li>Hey!</li>, <li>Sup!</li>, <li>What up!</li>]
    const dataToJSX = data.map(d => <li>{d}</li>)
    console.log('current number', this.state.number)
    console.log('THIS IN RENDER', this)

    const currentVideo = this.state.videos.find(v => v.id === this.state.currentVideoID)

    return (
      <div className="container">
        <VideoContainer currentVideo={currentVideo}/>
        <VideoSuggestionsList
          setVideo={this.setVideo}
          videos={this.state.videos}
        />
        
        
        {/* <ul>
        {
          dataToJSX
        }
        </ul> */}

        {/* <Counter />
        <Counter /> */}
        
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      number: 0
    }
  }

  increaseNumber = () => {
    // increase the number
    console.log('increase number')
    console.log('THIS IN METHOD', this)
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseNumber}>Click me</button>
        <h1>{this.state.number}</h1>
      </div>
    )
  }
}

export default Main;
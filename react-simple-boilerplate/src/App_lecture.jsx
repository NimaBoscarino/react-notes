import React, { Component } from 'react';

class VideoContainer extends Component {
  render() {
    return (
      <div className="video-container">
        <img className="video" src="http://www.pethealthnetwork.com/sites/default/files/articles/five-adorable-dog-videos-make-you-ache-spring-fb-517235671.jpg" />
        <h2>Cute dog video</h2>
      </div>
    )
  }
}

class VideoSuggestionsList extends Component {

  render() {

    var func = () => console.log('heyooo')
    var videos = [
      {
        title: "Awesome dogs",
        src: "https://cdn2-www.dogtime.com/assets/uploads/2015/04/april-fools-dog-pranks-youtube-1.jpg", 
      },
      {
        title: "Wow I love cats",
        src: "https://cdn2-www.dogtime.com/assets/uploads/2015/04/april-fools-dog-pranks-youtube-1.jpg", 
      },
      {
        title: "Did you know about...",
        src: "https://cdn2-www.dogtime.com/assets/uploads/2015/04/april-fools-dog-pranks-youtube-1.jpg", 
      },
      {
        title: "Platypi are evil",
        src: "https://cdn2-www.dogtime.com/assets/uploads/2015/04/april-fools-dog-pranks-youtube-1.jpg", 
      },
      {
        title: "Fish can also be cute",
        src: "https://cdn2-www.dogtime.com/assets/uploads/2015/04/april-fools-dog-pranks-youtube-1.jpg", 
      },                
    ]    
    return (
      <div className="video-suggestions-list">
        {
          videos.map(v => {
            return(
              <VideoSuggestion
                title={v.title}
                src={v.src}
                func={func}
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
    console.log(this.props)
    this.props.func()

    return (
      <div className="video-suggestion">
        <img src={this.props.src} />
        <h2>{ this.props.title }</h2>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div className="container">
        <VideoContainer />
        <VideoSuggestionsList />
      </div>
    );
  }
}

export default Main;
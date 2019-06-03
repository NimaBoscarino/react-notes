import React, { Component } from 'react';

class Yeezy extends Component {
  render() {
    return (
      <div>
        <p>YEEZY</p>
        <img src='https://66.media.tumblr.com/tumblr_m31scizkkw1rue873o1_250.png' />
      </div>
    )
  }
}

class VideoTile extends Component {
  render() {
    `Haha my name is ${name}`
    
    return (
      <div
        className='video-tile'
        onClick={this.props.onClick}
      >
        <img className='thumbnail' src="https://i.imgur.com/n4QLMVU.jpg" />
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.username}</p>
          <p>{this.props.time} - Likes: {this.props.likes}</p>
        </div>
      </div>        
    )
  }
}

class VideoContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [
        {
          title: 'Power',
          time: '4:21',
          username: 'xXYeezyFanXx',
          likes: 4
        },
        {
          title: 'Spaceship',
          time: '6:11'  ,
          username: 'yeezyGirl6182',
          likes: 1337,
        },
        {
          title: 'I AM A GOD',
          time: '1:34',
          username: 'xXSlayerOfHackz0rzXx',  
          likes: 4145123,
        },
        {
          title: 'Gold Digger',
          time: '5:24',
          username: '746352ILuvKanye',  
          likes: 62,
        }        
      ]
    }
  }

  addSong = () => {
    this.setState({
      videos: [...this.state.videos, {
        title: 'Croissants',
        time: '5:24',
        username: 'croissants',  
        likes: 62,
      }]
    })
  }
  render() {
    return (
      <div>
        {
          this.state.videos.map(video => {
            return (
              <VideoTile 
                key={video.title}
                title={video.title}
                time={video.time}
                username={video.username}
                likes={video.likes}
              />              
            )
          })
        }
        
        <button onClick={this.addSong}>Add Song</button>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    
    return (
      <VideoContainer>
      </VideoContainer>
    );
  }
}

export default Main;
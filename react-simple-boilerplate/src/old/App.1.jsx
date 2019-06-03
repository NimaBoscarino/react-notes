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
  render() {
    return (
      <div>
        <VideoTile 
          title={'Power'}
          time={'4:21'}
          username={'xXYeezyFanXx'}
          likes={4}
          funStuff={{
            hello: 'world',
            suh: 'mydude'
          }}
          onClick={() => console.log('HJAGSDASD')}
        />
        <VideoTile
          title='Spaceship'
          time='6:11'  
          username='yeezyGirl6182'   
          likes={1337}
          onClick={() => console.log('BOO!')}
        />
        <VideoTile
          title='I AM A GOD'
          time='1:34'
          username='xXSlayerOfHackz0rzXx'     
          likes={4145123}
          onClick={() => console.log('YEEZY!')}
        />
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
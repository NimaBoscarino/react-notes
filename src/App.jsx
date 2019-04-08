import React, { Component } from 'react'


class VideoBlock extends Component {
  render() {
    console.log('I AM RENDER', this)
    return (
      <div className="video-block">
        <img
          className="thumbnail"
          src={this.props.thumbnail} />   
        <div>   
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

function dog() {
  return "Woof!"
}


const videos = [
  {
    title: "Eric Andre on the New York Subway",
    description: "Haha what crazy hijinks!",
    thumbnail: "https://i.ytimg.com/vi/9UlXcoVHnog/hqdefault.jpg"
  },
  {
    title: "Kanye - Spaceship",
    description: "Wow - what an artist!",
    thumbnail: "https://i.ytimg.com/vi/LUuWrU25j0k/hqdefault.jpg"
  },
  {
    title: "Cats - 🐈",
    description: "Number 8 will blow your mind!",
    thumbnail: "https://i.ytimg.com/vi/dzfR1PEm8NM/hqdefault.jpg"
  },
  {
    title: "Is this an Instrument? 🥚",
    description: "Doctors HATE him!",
    thumbnail: "https://i.ytimg.com/vi/d1JA-nh0IfI/hqdefault.jpg"
  },
  {
    title: "SpongeBob",
    description: "Doctors HATE him!",
    thumbnail: "https://i.ytimg.com/vi/d1JA-nh0IfI/hqdefault.jpg"
  }               
]
class App extends Component {
  render() {
    return (
      <div>   
        {
          videos.map(video => {
            return (
              <VideoBlock
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
              />
            )
          })
        }


      </div>                       
    );
  }
}

export default App


/*

      <VideoBlock
          title="Eric Andre on the New York Subway"
          description="Haha what crazy hijinks!"
          thumbnail="https://i.ytimg.com/vi/9UlXcoVHnog/hqdefault.jpg"
        />
        <VideoBlock
          title="Kanye - Spaceship"
          description="Wow - what an artist!"  
          thumbnail="https://i.ytimg.com/vi/LUuWrU25j0k/hqdefault.jpg"
        />
        <VideoBlock
          title="Cats - 🐈"
          description="Number 8 will blow your mind!" 
          thumbnail="https://i.ytimg.com/vi/dzfR1PEm8NM/hqdefault.jpg"
        />
        <VideoBlock
          title="Is this an Instrument? 🥚"
          description="Doctors HATE him!"
          thumbnail="https://i.ytimg.com/vi/d1JA-nh0IfI/hqdefault.jpg"
        />


        
*/


    // In the curlies:

    /*
      - strings
      - numbers
      - do math, one line!
      - concatenate things
      - call a function
        - getData()
        - getData() ; showData() <---- BAD!
        - getData(() => showData())
      - show arrays of stuff
    

    */
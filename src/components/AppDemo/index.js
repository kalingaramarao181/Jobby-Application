import {Component} from 'react'
import {Link} from 'react-router-dom'

import ReactPlayer from 'react-player'

import './index.css'

const videoURL =
  'https://assets.ccbp.in/frontend/content/react-js/jobby-app-success-output-v0.mp4'

class AppDemo extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url={videoURL}
            playing={isPlaying}
            className="react-player"
          />
          <button type="button" className="button" onClick={this.onClickPlay}>
            {btnText}
          </button>
        </div>
        <Link to="/login">
          <button type="button" className="button1" onClick={this.onClickPlay}>
            Back
          </button>
        </Link>
      </div>
    )
  }
}

export default AppDemo

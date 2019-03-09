import React from "react";
import { FaPlay, FaPause, FaFastBackward, FaFastForward } from "react-icons/fa";

class Controls extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      playing: false,
      display: false
    };
  }

  componentDidMount() {
    console.log(this.props);
  }


  render() {
    const { playing } = this.state;
    const { currentTrackDetails } = this.props;
    return (
      <div className="controls">
        
        <FaFastBackward className="media-control-button" />
        {playing ? <FaPause /> : <FaPlay />}
        <FaFastForward className="media-control-button" />
      </div>
    );
  }
}

export default Controls;

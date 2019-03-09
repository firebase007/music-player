import React from 'react';
// import topSongs from '../helpers/topSongs';
import axios from 'axios';
import { FaHeart, FaPlayCircle } from "react-icons/fa";
import Controls from './Controls';

class TopSongs extends React.Component {
    constructor() {
        super();

      this.state = {
        topSongs: null,
        currentTrack: null
      }
    }

    componentDidMount() {
        axios
          .get(
            "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=a6afc71d9061bf98a01189558fbac7b9&format=json"
          )
          .then(responseData => {
            console.log(responseData.data);
            if (responseData) {
              this.setState({ topSongs: responseData.data });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
    }
  
  handleClick = (track) => {
    console.log(track, "track");
    const realTrack = Object.values(track);
    console.log(realTrack);
    this.setState({
      currentTrack: realTrack
    })
  }

    render() {
        const { topSongs,currentTrack } = this.state
        
        if (!topSongs) {
            return <div>Loading...</div>
        }
        let tracks = topSongs.tracks.track.map((track, i) => {
			return (
        <li key={i} onClick={() => this.handleClick(track)}>
          <div className="" style={{ margin: "5px"}}>
            {<img src={track.image[0]["#text"]} alt="artist img" />}
          </div>
          <div className="title">{track.name}</div>
          <div className="duration">{track.duration}</div>
        </li>
      );
		});
      return (
        <div>
          <ul className="TrackList">{tracks}</ul>
          <div><Controls currentTrackDetails={currentTrack}/></div>
        </div>
      );
	}

}


export default TopSongs;
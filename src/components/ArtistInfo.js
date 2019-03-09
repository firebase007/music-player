import React from "react";
import axios from "axios";



class ArtisteInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistTracks: null
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Cher&api_key=a6afc71d9061bf98a01189558fbac7b9&format=json&limit=10"
      )
      .then(responseData => {
        console.log(responseData.data);
        if (responseData) {
          this.setState({ artistTracks: responseData.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { artistTracks} = this.state;

    if (!artistTracks) {
      return <div>Loading...</div>;
    }
    let artistetracks = artistTracks.toptracks.track.map((track, i) => {
      return (
        <li key={i}>
          <div>
            <div className="" style={{ margin: "5px" }}>
              {<img src={track.image[0]["#text"]} alt="artist img" />}
            </div>
            <div className="title">{track.name}</div>
          </div>
        </li>
      );
    });
    return (
      <div>
        <ul className="TrackList" style={{listStyleType: "none"}}>{artistetracks}</ul>
      </div>
    );
  }
}

export default ArtisteInfo;

import React from "react";
import axios from "axios";
import {
  Card,
  CardTitle, 
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { FaPlayCircle } from "react-icons/fa";
import ArtistInfo from './ArtistInfo';

class TrendingArtistes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allArtistes: null,
      modal: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=a6afc71d9061bf98a01189558fbac7b9&format=json"
      )
      .then(responseData => {
        console.log(responseData.data);
        if (responseData) {
          this.setState({ allArtistes: responseData.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  toggleArtisteDetails = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { allArtistes, modal } = this.state;

    if (!allArtistes) {
      return <div>Loading...</div>;
    }
    let topArtistes = allArtistes.topalbums.album.map((artiste, i) => {
      return (
        <li
          key={i}
          className="playlist-card"
          onClick={this.toggleArtisteDetails}
        >
          <Col sm="12">
            <Card body>
              <CardTitle>
                <div className="img-container">
                  {
                    <img
                      src={artiste.image[1]["#text"]}
                      alt="artist img"
                      className="img"
                    />
                  }
                  <span className="position">{<FaPlayCircle className="icon" />}</span>
                </div>
              </CardTitle>
            </Card>
                  <span style={{fontSize: "10px", fontWeight:"5PX"}}>{artiste.name}</span>
          </Col>
          <Col>
            <Modal
              isOpen={modal}
              fade={false}
              toggle={this.toggleArtisteDetails}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggleArtisteDetails}>
                <img src={artiste.image[2]["#text"]} alt="artist img" />
                <span style={{padding: "5px"}}>{artiste.name}</span>
              </ModalHeader>
                      <ModalBody>
                          <ArtistInfo/>
                          </ModalBody>
            </Modal>
          </Col>
        </li>
      );
    });
      return (
        <div>
              <ul className="all-generes">{topArtistes}</ul>
              <ArtistInfo/>
        </div>
      );
  }
}

export default TrendingArtistes;

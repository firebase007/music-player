import React from "react";
import axios from "axios";
import { Card, Button, CardTitle, CardText, Col, Badge } from "reactstrap";


class AllGeneres extends React.Component {
  constructor() {
    super();

    this.state = {
      allGeneres: null
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=a6afc71d9061bf98a01189558fbac7b9&format=json"
      )
      .then(responseData => {
        console.log(responseData.data);
        if (responseData) {
          this.setState({ allGeneres: responseData.data });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    const { allGeneres } = this.state;

    if (!allGeneres) {
      return <div>Loading...</div>;
    }
    let generes = allGeneres.toptags.tag.map(function(tag, i) {
      return (
        <li key={i} className="">
          <Col sm="12">
            <Card body>
              <CardTitle>
                <Badge color="light">Type</Badge>
                {tag.name.toUpperCase()}
              </CardTitle>
              <CardText>
                <Badge color="light">Count</Badge>
                {tag.count}
              </CardText>
              <CardText>
                <Badge color="light">Reach</Badge>
                {tag.reach}
              </CardText>
              <Button>Explore</Button>
            </Card>
          </Col>
        </li>
      );
    });
    return <ul className="all-generes">{generes}</ul>;
  }
}

export default AllGeneres;

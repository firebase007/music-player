import React from "react";
import {
  FaHeadphones,
  FaListOl,
  FaMusic,
} from "react-icons/fa";

class SideBar extends React.Component {
  constructor() {
    super();

    this.state = {
      barOpen: false
    };
  }

  render() {
    return (
      <div className="side-menu">
        <ul className="side-menu-ul">
          <li>
            <a href="#" className="side-search">
              <input type="text" placeholder="Search" />
            </a>
          </li>
          <li>
            <a href="#" className="side-currently-playing">
              <FaHeadphones /> Currently Playing
            </a>
          </li>
          <li>
            <a href="#" className="side-popular-music">
              <FaListOl /> Popular Music
            </a>
          </li>
          <li>
            <a href="#" className="side-your-playlist">
              <FaMusic /> Your Playlists
            </a>
          </li>
        </ul>
        <div className="side-menu-background" />
      </div>
    );
  }
}

export default SideBar;

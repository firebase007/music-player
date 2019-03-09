import React, { Component } from "react";
import "./App.css";
import TabSelector from "../src/components/TabSelector";
import SideBar from "../src/components/SideBar";
import Controls from "../src/components/Controls";

class App extends Component {
  render() {
    return (
      <div style={{ maxHeight: "100%" }}>
        <div
          style={{
            margin: "0",
            padding: "20px 0",
            backgroundColor: "#291720",
            textAlign: "left",
            color: "#FFF"
          }}
        >
          <h3>My Music</h3>
        </div>
        <div className="App">
          <SideBar />
          <TabSelector />
        </div>
        <div>
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;

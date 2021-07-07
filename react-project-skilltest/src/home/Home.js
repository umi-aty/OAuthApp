import React, { Component } from "react";
import "./Home.css";
import refactory from "../img/pp.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="container">
          <div>
            <img
              src={refactory}
              alt="pp"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <h1 className="home-title">Skill Test Refactory - Umi Atiyah</h1>
        </div>
      </div>
    );
  }
}

export default Home;

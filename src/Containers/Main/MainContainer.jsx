import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Home/Navbar";
import SideBar from "../../Components/Navbar/Home/SideBar";
import "./MainContainer.css";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-children">
          <SideBar />
          <div className="contain">{this.props.element}</div>
        </div>
      </div>
    );
  }
}

export default MainContainer;

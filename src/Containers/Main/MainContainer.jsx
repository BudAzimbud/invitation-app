import React, { Component } from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import "./MainContainer.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h4 style={{color:'grey'}}>InTiv</h4>
        <ul>
          <li>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">Help</Tooltip>}
            >
              <FiHelpCircle />
            </OverlayTrigger>
          </li>
          <li>
            <FiSettings />
          </li>
          <li>
            <button className="btn-invitation">Buat Undangan</button>
          </li>
          <li>avatar</li>
        </ul>
      </nav>
    </div>
  );
}

function SideBar() {
  return (
    <div className="side-bar">
      <div>
        <ul>
          <li className="avatar d-flex">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
              alt="avatar"
            />

            <div>
              <p>azim</p>
              <p
                className="text-secondary"
                style={{ fontSize: "12px", paddingTop: "0px" }}
              >
                Gratis
              </p>
            </div>
          </li>
          <li>Acara Anda</li>
          <li>Undangan Anda</li>
          <li>Sampah</li>
        </ul>
      </div>
    </div>
  );
}

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SideBar />
        {this.props.children}
      </div>
    );
  }
}

export default MainContainer;

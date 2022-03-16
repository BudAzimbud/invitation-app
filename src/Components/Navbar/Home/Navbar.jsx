import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import "./NavbarStyle.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h4 style={{ color: "grey" }}>InTiv</h4>
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

export default Navbar;

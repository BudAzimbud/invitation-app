import React from "react";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import "./NavbarStyle.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h4 style={{ color: "grey" }}>InTiv</h4>
        <ul>
          <li>
            <FiHelpCircle />
          </li>
          <li>
            <FiSettings />
          </li>
          <li>
            <GrNotification />
          </li>
          <li>
            <button className="btn-invitation">Buat Undangan</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

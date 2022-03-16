import { Button } from "react-bootstrap";
import React from "react";
import { GrAdd } from "react-icons/gr";
import "./PartyPageStyle.css";
function PartyPage() {
  return (
    <div className="wrapper-party">
      <div className="container-party">
        <button className="btn-party">
          <GrAdd />
        </button>
      </div>
    </div>
  );
}

export default PartyPage;

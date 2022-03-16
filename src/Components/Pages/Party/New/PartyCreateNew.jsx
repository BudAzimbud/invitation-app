import React from "react";
import PartyForm from "../../../Party/Form/Create/PartyForm";
import "./PartyCreateNew.css";
function PartyCreateNew() {
  return (
    <div className="container">
      <div className="banner">
        <h1>Buat Acara paling seru 🎉</h1>
      </div>
      <PartyForm />
    </div>
  );
}

export default PartyCreateNew;

import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Row, Col } from "react-bootstrap";
import "./PartyPageStyle.css";
import CardCustom from "../../../Core/Card";
import WeddingImage from "../../../Asset/Images/wedding-card.jpg";
import BirthdayImage from "../../../Asset/Images/birthday.jpg";

function PartyPage() {
  const [kindParty] = useState([
    {
      title: "Pernikahan",
      image: WeddingImage,
    },
    {
        title: "Ulang Tahun",
        image: BirthdayImage,
      },  {
        title: "Event",
        image: WeddingImage,
      },  {
        title: "Lainnya",
        image: WeddingImage,
      },
  ]);

  return (
    <div className="wrapper-party">
      <div className="container-party">
        <button className="btn-party">
          <GrAdd />
        </button>
        <a type="button" class="btn-text">
          Undang Teman
        </a>
      </div>
      <div className="container-kind-party">
        <Row>
          <h5 className="text-secondary">Pilih pesta</h5>
        </Row>
        <Row>
          {kindParty.map((party) => {
            return (
              <Col>
                <CardCustom title={party.title} image={party.image} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default PartyPage;

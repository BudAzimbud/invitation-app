import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Row, Col, Button } from "react-bootstrap";
import "./PartyPageStyle.css";
import CardCustom from "../../../Core/Card";
import WeddingImage from "../../../Asset/Images/wedding-card.jpg";
import BirthdayImage from "../../../Asset/Images/birthday.jpg";
import EventImage from "../../../Asset/Images/event.jpg";
import OtherImage from "../../../Asset/Images/other.jpg";
import { Link } from "react-router-dom";

function PartyPage() {
  const [kindParty] = useState([
    {
      title: "Pernikahan",
      image: WeddingImage,
      button: <Link to={"/party/new"}><Button>Mulai</Button></Link>
    },
    {
      title: "Ulang Tahun",
      image: BirthdayImage,
      button: <Link to={"/party/new"}><Button>Mulai</Button></Link>
    },
    {
      title: "Event",
      image: EventImage,
      button: <Link to={"/party/new"}><Button>Mulai</Button></Link>
    },
    {
      title: "Lainnya",
      image: OtherImage,
      button: <Link to={"/party/new"}><Button>Mulai</Button></Link>

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
                <CardCustom {...party} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default PartyPage;

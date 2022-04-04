import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { Row, Col, Button } from "react-bootstrap";
import "./PartyPageStyle.css";
import CardCustom from "../../../Core/List/Card";
import WeddingImage from "../../../Asset/Images/wedding-card.jpg";
import BirthdayImage from "../../../Asset/Images/birthday.jpg";
import EventImage from "../../../Asset/Images/event.jpg";
import OtherImage from "../../../Asset/Images/other.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listParty } from "../../../Action/ActionParty";

function PartyPage() {
  const [kindParty] = useState([
    {
      title: "Pernikahan",
      image: WeddingImage,
      button: (
        <Link to={"/party/new"}>
          <Button>Mulai</Button>
        </Link>
      ),
    },
    {
      title: "Ulang Tahun",
      image: BirthdayImage,
      button: (
        <Link to={"/party/new"}>
          <Button>Mulai</Button>
        </Link>
      ),
    },
    {
      title: "Event",
      image: EventImage,
      button: (
        <Link to={"/party/new"}>
          <Button>Mulai</Button>
        </Link>
      ),
    },
    {
      title: "Lainnya",
      image: OtherImage,
      button: (
        <Link to={"/party/new"}>
          <Button>Mulai</Button>
        </Link>
      ),
    },
  ]);

  const dispatch = useDispatch();
  const parties = useSelector((state) => {
    return state.party.listParty;
  });

  useEffect(() => {
    const getListParty = () => {
      dispatch(listParty());
    };
    getListParty();
  }, []);

  return (
    <div className="wrapper-party">
      <div className="container-party">
        <button className="btn-party">
          <GrAdd />
        </button>
        <a type="button" href="#party" class="btn-text text-white">
          Undang Teman
        </a>
      </div>
      <div className="container-kind-party">
        <Row>
          <h5 className="text-secondary">Pilih pesta</h5>
        </Row>
        {parties ? (
          <Row>
            {kindParty.map((party) => {
              return (
                <Col>
                  <CardCustom {...party} />
                </Col>
              );
            })}
          </Row>
        ) : null}
        <Row>
          <h5 className="mt-5 text-secondary">Acara anda</h5>
        </Row>
        <div id="party">
          {parties ? (
            <Row>
              {parties.map((party) => {
                return (
                  <Col>
                    <CardCustom
                      {...party}
                      button={
                        <Link to={"/party/new"}>
                          <Button>Mulai</Button>
                        </Link>
                      }
                    />
                  </Col>
                );
              })}
            </Row>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PartyPage;

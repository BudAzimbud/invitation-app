import React from "react";
import { FiMail, FiTrash } from "react-icons/fi";
import { GiPartyHat } from "react-icons/gi";
import "./SideBarStyle.css";

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
          <li>
            <a>
              <i>
                <GiPartyHat />
              </i>
              Acara Anda
            </a>
          </li>
          <li>
            <a>
              <i>
                <FiMail />
              </i>
              Undangan
            </a>
          </li>
          <li>
            <a>
              <i>
                <FiTrash />
              </i>
              Sampah
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;

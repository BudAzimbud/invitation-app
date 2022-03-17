import React from "react";

import { Link } from "react-router-dom";
import routes from '../../../Route'
import "./SideBarStyle.css";


const styleVisited = {
  color: "blueviolet",
 
};

const styleLinkVisited = {
  color: 'blueviolet'
}


function SideBar() {


  const visit = (path) => {
    if (window.location.pathname === path) {
      return styleVisited;
    }
    return null;
  };

  const linkVisited = (path)=>{
    if (window.location.pathname === path) {
      return styleLinkVisited;
    }
    return null;
  }


 

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
          {
            routes.map((route)=>{
              return (
                <li style={visit(route.link)}>
                <Link to={route.link} className="link" style={linkVisited(route.link)} >
                  <i>
                    {route.icon}
                  </i>
                  {route.title}
                </Link>
              </li>
              )
            })
          }
        
        </ul>
      </div>
    </div>
  );
}
export default SideBar;

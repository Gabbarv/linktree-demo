import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { TbBrandLinktree } from "react-icons/tb";
import { CiBullhorn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
const InfoCard = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setLinks(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main-right">
      <div className="notification-share-box">
        <div className="notification">
          <div className="notification-btn">
            <CiBullhorn size={22} />
          </div>
        </div>
        <div className="notification">
          <div className="share-btn">
            <CiShare2 size={22} />
            <p>Share</p>
          </div>
        </div>
      </div>

      <div className="info-card">
        <div className="userdetails">
          <div className="info">
            <div className="profile-img">
              <div className="dp">
                <h3>G</h3>
              </div>
            </div>
            <div className="username">
              <h3>@gaurav0210</h3>
            </div>
            {links?.map((link, i) => (
              <div className="user-links">
                <div className="link-info">
                  <div></div>
                  <div>
                    <p>{link?.Link_Name}</p>
                  </div>
                  <div>
                    <IoEllipsisVertical />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="no-use"></div>
          <div className="bottom-logo">
            <p>
              Linktree
              <span>
                <TbBrandLinktree />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

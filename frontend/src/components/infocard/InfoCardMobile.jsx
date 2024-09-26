import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { TbBrandLinktree } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";

const InfoCardMobile = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setLinks(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="info-card-m">
      <div className="userdetails">
        <div className="info-m">
          <div className="profile-img">
            <div className="dp-m">
              <h3>G</h3>
            </div>
          </div>
          <div className="username-m">
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
  );
};

export default InfoCardMobile;

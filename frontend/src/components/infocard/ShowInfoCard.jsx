import axios from "axios";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const ShowInfoCard = ({ link }) => {
  const deleteHandler = async (id) => {
    try {
      await axios.delete("http://localhost:5000/deleteLink/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="show-info-card">
      <div className="show-info">
        <div className="show-info-links">
          <div className="link-title info-link">
            <h5>{link?.Link_Name}</h5>
            <MdOutlineModeEdit />
          </div>
          <div className="info-link">
            <p>{link?.Link}</p>
            <MdOutlineModeEdit />
          </div>
        </div>
        <div className="activity-btn">
          {/* <div>
            <label class="switch">
  <input type="checkbox" checked/>
  <span class="slider round"></span>
</label>
            </div> */}

          <MdDeleteOutline
            onClick={() => {
              deleteHandler(link?.ID);
            }}
            size={22}
            color="red"
            className="delete-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowInfoCard;

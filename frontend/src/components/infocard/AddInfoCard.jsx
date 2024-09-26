import React, { useState } from "react";
import axios from "axios";

const AddInfoCard = ({ setShow }) => {
  const [link, setLink] = useState("");
  const [linkName, setLinkname] = useState("");
  const [collectionName, setCollectionName] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/createLink", {
        link,
        linkName,
        collectionName,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
        setShow(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-info">
      <div className="close-btn">
        <button onClick={() => setShow(false)}>X</button>
      </div>
      <div className="add-info-input">
        <div>
          <h5>Enter Url</h5>
          <input
            type="text"
            placeholder="URL"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <h5>Url Name</h5>
          <input
            type="text"
            placeholder="URL Name"
            onChange={(e) => setLinkname(e.target.value)}
          />
        </div>
        <div>
          <h5>Collection Name</h5>
          <input
            type="text"
            placeholder="Collection Name"
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </div>
      </div>
      <div className="add-info-btn">
        <button onClick={handleSubmit}>Add Link</button>
      </div>
    </div>
  );
};

export default AddInfoCard;

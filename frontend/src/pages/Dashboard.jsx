import { FaPlus } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import { GoArchive } from "react-icons/go";
import AddInfoCard from "../components/infocard/AddInfoCard";
import ShowInfoCard from "../components/infocard/ShowInfoCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [showAddForm, setShow] = useState(false);
  const [links, setLinks] = useState([]);
  console.log(links);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setLinks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-info">
      <div className="copy-link">
        <div>
          <h5>🔥 Your Linktree is live:</h5>
          <a href="linktr.ee/gaurav0210">linktr.ee/gaurav0210</a>
        </div>

        <div className="copy-btn">
          <button>Copy Your Linktree URL</button>
        </div>
      </div>
      {showAddForm ? (
        <AddInfoCard setShow={setShow} />
      ) : (
        <>
          <div className="main-info-upper">
            <div className="add-link">
              <button onClick={() => setShow(true)}>
                <span>
                  <FaPlus />
                </span>{" "}
                Add Link
              </button>
            </div>
            <div className="add-collection">
              <div className="btn-div">
                <BsCollection />
                <p>Add collection</p>
              </div>
              <div className="btn-div">
                <GoArchive />
                <p>View Archive</p>
              </div>
            </div>
          </div>
          <div className="show-info-div">
            {links?.map((link, i) => (
              <ShowInfoCard link={link} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "linktree",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM links";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/createLink", (req, res) => {
  const sql =
    "INSERT INTO links (`Link`,`Link_Name`,`Collection_Name`) VALUES (?)";
  const values = [req.body.link, req.body.linkName, req.body.collectionName];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.delete("/deleteLink/:id", (req, res) => {
  const sql = "DELETE FROM links WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return res.json("ERROR");
    return res.json(data);
  });
});

app.listen(5000, () => {
  console.log("listening");
});

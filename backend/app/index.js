const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const courses = require("./db/courses.json");
const port = 3000;

module.exports = class Application {
  constructor() {
    this.configServer();
  }

  configServer() {
    app.use(cors());
    app.use(
      "/images",
      express.static(path.join(__dirname, "public", "images"))
    );

    app.get("/api/courses", (req, res) => {
      res.json(courses);
    });

    app.listen(port, (err) => {
      err && console.error(err);
      console.log(`Server is running at http://localhost:${port}`);
    });
  }
};

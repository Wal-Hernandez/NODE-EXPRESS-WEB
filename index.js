require("dotenv").config();

const express = require("express");

const app = express();
const path = require("path")

//settings
app.set("PORT", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(require("./routes"));
//importa el orden de los middlewares

//listening the server
app.listen(app.get("PORT"), () => {
  console.log("server on port", app.get("PORT"));
});

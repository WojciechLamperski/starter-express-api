const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("assembled/home", { page: "home" });
});

app.get("/zabiegi", (req, res) => {
  res.render("assembled/treatments", { page: "treatments" });
  page = "treatments";
});

app.get("/cennik", (req, res) => {
  res.render("assembled/pricing", { page: "pricing" });
});

app.get("/zespol", (req, res) => {
  res.render("assembled/team", { page: "team" });
});

app.get("/galeria", (req, res) => {
  res.render("assembled/gallery", { page: "gallery" });
});

app.get("/kontakt", (req, res) => {
  res.render("assembled/contact", { page: "contact" });
});

app.get("*", (req, res) => {
  res.status(404).redirect("/", { page: "home" });
});

app.listen(process.env.PORT || 3000);

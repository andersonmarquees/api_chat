import express from "express";
import { routes } from "./routes";
import createConnection from "./database";
import path from "path";
//import './database';

createConnection();
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html")
})

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html")
})


app.use(express.json());
app.use(routes);

export { app }

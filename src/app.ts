import express from "express";
import { routes } from "./routes";
import createConnection from "./database";
//import './database';

createConnection();
const app = express();

app.use(express.json());
app.use(routes);

export { app }

// template engine example 

import express from "express";
import {router} from "./ROUTER/shorten.router.js";
const app = express();
const PORT = 3000;



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
// app.set("views","./views") this is no need bcoz by defalu our index.html is in views folders

app.use(router);

// view engine is that where that in views files we are accessing
// is ur html is not in views folder tehn
// app.set("views","./index.html")

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
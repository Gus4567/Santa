//swagger && yaml
const swagger= require('swagger-ui-express')
const yaml= require('yamljs')
const path= require('path')
//express
const express = require("express");
const app = express();

//morgan for knew the state of server
const morgan = require("morgan");
app.use(morgan("dev"));

//port
const port = 3000;
const swaggerDoc= yaml.load(path.join(__dirname, '../.yaml'))

//para recibir json
app.use(express.json());
app.use('/swagger', swagger.serve, swagger.setup(swaggerDoc))
app.use(express.urlencoded({
  extended:false
}))
app.use(express.json())

//db moongose require and connection
const mongoose = require("mongoose");
const config = require("./config");

(async()=>{ try {
  await mongoose.connect(config.db.connection, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  handleError(error);
}} )();


app.get("/main", (req, resp) => {
  resp.json({
    message: "main route",
  });
});

app.listen(port, () => {
  console.log("listening", port);
});

//routes
const routes = require("./routes");

app.use(routes);

// npm packages imports
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
// global imports
const connection = require("./config/connection");

const routes = require("./routes");

// setting up server

const PORT = 4000;

const app = express();

const hbs = expressHandlebars.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);
const init = async () => {
  try {
    await connection.sync({ force: false });

    console.log(`[INFO] :  Connection to DATABASE is successful`);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(
      `[ERROR]: Connection to DATABASE has failed - ${error.message}`
    );
  }
};

init();

// npm packages imports
require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// global imports
const connection = require("./config/connection");
const routes = require("./routes");

// setting up server

const PORT = 4000;
const app = express();

//session
const sessionOptions = {
  secret: "Super secret secret",
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 8640000,
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: connection,
  }),
};

app.use(session(sessionOptions));

//handlebars
const hbs = expressHandlebars.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
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

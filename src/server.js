// npm packages import
const express = require("express");

// global imports
const connection = require("./config/connection");

// setting up server

const PORT = 4000;

const app = express();

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

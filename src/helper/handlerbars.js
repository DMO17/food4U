const moment = require("moment");

module.exports = {
  dateFormatter: (date) => {
    return moment(date).format("DD/MM/YYYY");
  },
};

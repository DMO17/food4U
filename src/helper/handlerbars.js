const moment = require("moment");

module.exports = {
  dateFormatter: (date) => {
    return moment(date).format("DD/MM/YYYY");
  },
  checkStatus: (status) => {
    if ((status = "Available")) {
      return '<i class="fas fa-check-circle"></i>';
    } else return '<i class="fas fa-times"></i>';
  },
  // checkStatus: (status) => {
  //   if ((status = "Available")) {
  //     return true;
  //   }
  // },
};

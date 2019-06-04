const orm = require("../config/orm");

const tacos = {
  all: function (callBack) {
    orm.all("tacos", (res) => {
      callBack(res);
    });
  },
}

module.exports = tacos;
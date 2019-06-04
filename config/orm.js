const connection = require("./connection");

const orm = {
  all: function (table_name, callBack) {
    connection.query("SELECT * FROM ??", [table_name], (err, res) => {
      if (err) throw err
      callBack(res);
    });
  },
};

module.exports = orm;
const connection = require("./connection");

const orm = {
  all: function (table_name, callBack) {
    connection.query("SELECT * FROM ??", [table_name], (err, res) => {
      if (err) throw err
      callBack(res);
    });
  },
  add: function (table_name, columns, values, callback) {
    const query = `INSERT INTO ${table_name} ${columns} VALUES (${values});`
    connection.query(query, (err) => {
      if (err) throw err
      callback();
    })
  }
};

module.exports = orm;
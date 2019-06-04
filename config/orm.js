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
    // let val = values.split('", "');
    // const query = `INSERT INTO ${table_name} ${columns} VALUES (${values})`
    console.log(table_name);
    console.log(columns);
    console.log(values);
    // console.log(val)
    // console.log(typeof(values[0]));
    console.log(query);
    connection.query(query, (err) => {
      if (err) throw err
      callback();
    })
  }
};

module.exports = orm;
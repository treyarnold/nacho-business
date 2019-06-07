const connection = require("./connection");

const orm = {
  all: function (table_name, callBack) {
    connection.query("SELECT * FROM ??", [table_name], (err, res) => {
      if (err) throw err
      callBack(res);
    });
  },
  add: function (table_name, columns, values, callBack) {
    const query = `INSERT INTO ${table_name} ${columns} VALUES (${values});`
    connection.query(query, (err) => {
      if (err) throw err
      callBack();
    })
  },  
  update: function (table_name, id, callBack){
    const query = `UPDATE ${table_name} SET picked_up = 1 WHERE id=${id};`;
    connection.query(query, (err) => {
      if (err) throw err
      callBack();
    });
  }
};

module.exports = orm;
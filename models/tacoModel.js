const orm = require("../config/orm");

const tacos = {
  all: function (callBack) {
    orm.all("tacos", (result) => {
      callBack(result);
    });
  },
  add: function (body, callback) {
    let topping;
    if (Array.isArray(body.toppings)) topping = body.toppings.join(", ")
    else topping = body.toppings;
    const order = `"${body.orderName}", "${body.tortilla}", "${body.mainIngredient}", "${body.cheese}", "${topping}"`;
    orm.add("tacos", "(name, shell_type, main_ingredient, cheese, toppings)", order, () => {
      callback();
    })
  },
}

module.exports = tacos;
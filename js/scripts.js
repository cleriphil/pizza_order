var Pizza = function() {
  this.pizzaSize = false;
  this.toppings = []; //when the user selects toppings, it gets added
                      //to this array-- these two things will be
                      //connected in the front end/jQuery part
  this.cost = 0;
};

var PizzaSize = function(description, cost) {//should this have cost here?
  this.description = description;
  this.cost = cost;
};

var Topping = function(description, cost) {
  this.description = description;
  this.cost = cost;
};

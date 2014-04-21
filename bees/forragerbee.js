var ForragerBee = function() {
  /* START SOLUTION */
  Bee.call(this);

  this.age = 10;
  this.canFly = true;
  this.job = 'find pollen';
  this.treasureChest = [];
  /* END SOLUTION */
};
/* START SOLUTION */
ForragerBee.prototype = Object.create(Bee.prototype);
ForragerBee.prototype.constructor = ForragerBee;

ForragerBee.prototype.forrage = function(treasure) {
  this.treasureChest.push(treasure);  
};
/* END SOLUTION */

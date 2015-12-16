import ForagerBee from './ForagerBee';

var RetiredForagerBee = function() {
  /* START SOLUTION */
  ForagerBee.call(this);
  
  this.age = 40;
  this.color = 'grey';
  this.canFly = false;
  this.job = 'gamble';
  /* END SOLUTION */
};
/* START SOLUTION */
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble= function() {
  this.treasureChest.push('Pollen chips');
};
/* END SOLUTION */

export default RetiredForagerBee;
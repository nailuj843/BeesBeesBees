var Bee = require('./bee.js');

var HoneyMakerBee = function() {
  this.age = 10;
  this.fly = false;
  this.job = 'Make honey';
  this.honeyPot = 0;

  Bee.apply(this, arguments);  
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot = 0;
};

module.exports = HoneyMakerBee;

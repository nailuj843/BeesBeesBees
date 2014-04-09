var _ = require('../lib/underscore');
var Bee = require('./bee.js');

var ForragingBee = function() {
  this.age = 10;
  this.fly = true;
  this.job = 'find pollen';
  this.treasureChest = [];

  Bee.call(this);
};

ForragingBee.prototype = Object.create(Bee.prototype);
ForragingBee.prototype.constructor = ForragingBee;

ForragingBee.prototype.forrage = function(treasure) {
  console.log('I found ' + treasure + '!!!');
  
  this.treasureChest.push(treasure);
  
  _.each(this.treasureChest, function(item) {
    console.log('I now have: ' + item);
  });
};

module.exports = ForragingBee;

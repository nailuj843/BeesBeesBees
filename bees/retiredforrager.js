var ForragingBee = require('./forragerbee.js');

var RetiredForragerBee = function() {
  this.age = 40;
  this.color = 'grey';
  this.fly = false;
  this.job = 'gamble';
  
  ForragingBee.call(this);
};

RetiredForragerBee.prototype = Object.create(ForragingBee.prototype);
RetiredForragerBee.prototype.constructor = RetiredForragerBee;

RetiredForragerBee.prototype.forrage = function() {
  console.log('I am too old, let me play cards instead');
};

RetiredForragerBee.prototype.gamble= function() {
  if (this.treasureChest.length) {
    var lostTreasure = this.treasureChest.pop();
    return console.log('Oh nooooo, I lost a treasure: ' + lostTreasure);
  }
  this.treasureChest.push('Pollen chips');
  console.log('I got a new treasure: ' + this.treasureChest[this.treasureChest.length-1]);
};

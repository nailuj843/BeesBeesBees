var RetiredForragerBee = function() {
  ForragerBee.call(this);
  
  this.age = 40;
  this.color = 'grey';
  this.canFly = false;
  this.job = 'gamble';
};

RetiredForragerBee.prototype = Object.create(ForragerBee.prototype);
RetiredForragerBee.prototype.constructor = RetiredForragerBee;

RetiredForragerBee.prototype.forrage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForragerBee.prototype.gamble= function() {
  this.treasureChest.push('Pollen chips');
};

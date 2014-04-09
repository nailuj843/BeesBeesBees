var Grub = require('./grub.js');

var Bee = function() {
  this.hasWings = true;
  this.age = 5;
  this.job = 'Keep on growing';
  this.color = 'yellow';

  Grub.apply(this, arguments);
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

module.exports = Bee;

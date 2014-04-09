var Grub = function(food) {
  this.age = 0;
  this.color = 'pink';
  this.food = food;
};

Grub.prototype.eat = function() {
  console.log('Mmmmmmmmm ' + this.food);
};

module.exports = Grub;

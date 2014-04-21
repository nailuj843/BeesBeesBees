var Bee = function() {
  /* START SOLUTION */
  Grub.call(this);

  this.age = 5;
  this.job = 'Keep on growing';
  this.color = 'yellow';
  /* END SOLUTION */
};
/* START SOLUTION */
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
/* END SOLUTION */

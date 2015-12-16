var Grub = function() {
  /* START SOLUTION */
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
  /* END SOLUTION */
};
/* START SOLUTION */
Grub.prototype.eat = function() {
  console.log('Mmmmmmmmm ' + this.food);
};
/* END SOLUTION */

export default Grub;
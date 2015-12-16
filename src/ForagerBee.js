import Bee from './Bee'

/* START SOLUTION */
class ForagerBee extends Bee {
  constructor() {
    super();

    this.age = 10;
    this.canFly = true;
    this.job = 'find pollen';
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
/* ELSE
class ForagerBee {
  // TODO..
};
END SOLUTION */

export default ForagerBee;
describe('RetiredForagerBee class functionality', function() {
  
  verifyClass(RetiredForagerBee).followsPattern('pseudoclassical', {}, false);

  beforeEach(function() {
    retiredForrager = new RetiredForagerBee();
  });

  /*  Overwrite methods from superclass  */
  
  it('should have an `age` property that is set to `40`', function() {
    expect(retiredForrager.age).to.equal(40);
  });

  it('should have a `job` property that is set to `gamble`', function() {
    expect(retiredForrager.job).to.equal('gamble');
  });

  it('should have a `canFly` property that is set to `false`', function() {
    expect(retiredForrager.canFly).to.equal(false);
  });

  it('should have a `color` property that is set to `grey`', function() {
    expect(retiredForrager.color).to.equal('grey');
  });

  it('should have a `forrage` method that returns "I am too old, let me play cards instead"', function() {
    expect(retiredForrager.forrage()).to.equal('I am too old, let me play cards instead');
  });

  /*  Inhereted from superclass  */

  it('should have a `food` property that is inhereted from grub', function() {
    expect(retiredForrager.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inhereted from grub', function() {
    expect(retiredForrager.eat).to.be.a('function');
  });

  it('should have a `treasureChest` property inhereted from forragerBee that is set to an empty array `[]`', function() {
    expect(retiredForrager.treasureChest).to.be.a('array');
  });

  /*  New methods and properties  */

  it('should have an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`', function() {
    retiredForrager.gamble();
    retiredForrager.gamble();
    expect(retiredForrager.treasureChest).to.have.length(2);
  });

});

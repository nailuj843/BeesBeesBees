BeesBeesBees
============

![](http://i.imgur.com/qrLEV.gif)

### Pseudoclassical bees - get ready to learn some science

A bee at any point in its lifetime has a specific set of tasks and features that are unique to that lifestage. In this repo, you will create bees of many lifestages while practicing the pseudoclassical instatiation pattern, inheritance, and subclassing.

### Class Structure

    .
    ├── Grub
    │   └── Bee
    │       ├── HoneyMakerBee
    │       └── ForragerBee
    │          └── RetiredForragerBee

As you can see in the diagram above, all bees start out as Grub, grow up into Bees and are then assigned their specific jobs and tasks among other charactersitics. This means that characteristics are inhereted from the classes above (although they can be modified on the current class level). 

### Resources
* [Giraffe Maker - a Hack Reactor repo on inheritance patterns](https://github.com/hackreactor/giraffeMaker)
* [Pseudoclassical Inheritance](https://www.inkling.com/read/javascript-good-parts-douglas-crockford-1st/chapter-5/pseudoclassical)
* [Object.create](http://dailyjs.com/2012/06/04/js101-object-create/)


### Begin

Start the repo in grub.js to create the first class, which will be the superclass for all kinds of bees that come after. Then move through the repo in order of the tree above, passing all of the Specs in SepcRunner.html--which you can run by simply opening it in your browser and refreshing the page whenever you make changes. 

Note: this assignement should be written in pseudoclassical style.

Grub
- [ ] Create a Grub class, in pseudoclassical style, with:
  - [ ] an `age` property that is set to `0`
  - [ ] a `color` property that is set to `pink`
  - [ ] a `food` property that is set to `jelly`
  - [ ] an `eat` method

Bee
- [ ] Create a Bee class, in pseudoclassical style, with:
  - [ ] `call` the Grub superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an `age` property that is set to `5`
  - [ ] a `color` property that is set to `yellow`
  - [ ] a `food` property that is inhereted from grub
  - [ ] an `eat` method that is inhereted from grub
  - [ ] a `job` property that is set to `keep on growing`

HoneyMakerBee
- [ ] Create a HoneyMakerBee class, in pseudoclassical style, with:
  - [ ] `call` the Bee superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an age property that is set to `10`
  - [ ] a job property that is set to `make honey`  
  - [ ] a color property inhereted from `bee` that is set to `yellow`
  - [ ] a food property that is inhereted from grub
  - [ ] an eat method that is inhereted from grub
  - [ ] a `honeyPot` property that is set to `0`
  - [ ] a `makeHoney` method that adds `1` to that honeyBee\'s honeyPot
  - [ ] a `giveHoney` method that subtracts `1` from that honeyBee\'s honeyPot

ForragerBee
- [ ] Create a Bee class, in pseudoclassical style, with:
  - [ ] `call` the Bee superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an age property that is set to `10`
  - [ ] a `job` property that is set to `find pollen`
  - [ ] a `color` property inhereted from `bee` that is set to `yellow`
  - [ ] a `food` property that is inhereted from grub
  - [ ] an `eat` method that is inhereted from grub
  - [ ] a `canFly` property that is set `true`
  - [ ] a `treasureChest` property that is set to an empty array `[]`
  - [ ] a `forrage` method that allows the bee to add a `treasure` to the `treasureChest`

RetiredForragerBee
- [ ] Create a RetiredForragerBee class, in pseudoclassical style, with:
  - [ ] `call` the ForragerBee superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an `age` property that is set to `40`
  - [ ] a `job` property that is set to `gamble`
  - [ ] a `canFly` property that is set to `false`
  - [ ] a `color` property that is set to `grey`
  - [ ] a `forrage` method that returns "I am too old, let me play cards instead"
  - [ ] a `food` property that is inhereted from grub
  - [ ] an `eat` method that is inhereted from grub
  - [ ] a `treasureChest` property inhereted from forragerBee that is set to an empty array `[]`
  - [ ] an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`

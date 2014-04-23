BeesBeesBees
============

![](http://i.imgur.com/qrLEV.gif)

### Pseudoclassical bees - get ready to learn some science

Bees (the most noble of insects) progress through specific developmental stages over the course of their lifetimes. Each phase has specific traits and behaviors associated with it that are unique to that lifestage. In this repo, you will create bees of many lifestages while practicing the pseudoclassical instatiation pattern, inheritance, and subclassing.

### Class Structure

    .
    ├── Grub
    │   └── Bee
    │       ├── HoneyMakerBee
    │       └── ForagerBee
    │          └── RetiredForagerBee

As you can see in the diagram above, all bees start out as a Grub, grow into Bees and are then assigned their specific jobs and tasks among other charactersitics. This means that characteristics are inhereted from the classes above (although they can be modified on the current class level). 

### Resources
* [Giraffe Maker - a Hack Reactor repo on inheritance patterns](https://github.com/hackreactor/giraffeMaker)
* [Pseudoclassical Inheritance](https://www.inkling.com/read/javascript-good-parts-douglas-crockford-1st/chapter-5/pseudoclassical)
* [Object.create](http://dailyjs.com/2012/06/04/js101-object-create/)


## Basic requirements:

### Bower

- Don't worry for now about how Bower works. Just know that when `bower install` is run from the command line, the packages listed in bower.json will be automatically installed to `client/bower_components`.
  - [ ] Use bower to install the client-side dependancies by running the following command from the root directory of the repo: `bower install`.

### Sub Classing

Build your first class in Grub.js. Grub will act as the superclass for all other types of bees. Work through the repo in the order specified below, making sure to pass all of the Specs in `test/index.html` --which you can run by simply opening it in your browser and refreshing the page whenever you make changes. 

#### Things To Note:
- This assignement must be written in pseudoclassical style.
- Although there are multiple tests for each class, you will only be able to see one test at a time. As soon as one test fails the spec runner stops running and you must pass the current test to continue.

#### Grub
- [ ] Create a Grub class, in pseudoclassical style, with:
  - [ ] an `age` property that is set to `0`
  - [ ] a `color` property that is set to `pink`
  - [ ] a `food` property that is set to `jelly`
  - [ ] an `eat` method

#### Bee
- [ ] Create a Bee class, in pseudoclassical style, with:
  - [ ] `call` the Grub superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an `age` property that is set to `5`
  - [ ] a `color` property that is set to `yellow`
  - [ ] a `food` property that is inhereted from grub
  - [ ] an `eat` method that is inhereted from grub
  - [ ] a `job` property that is set to `keep on growing`

#### HoneyMakerBee
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

#### ForagerBee
- [ ] Create a ForagerBee class, in pseudoclassical style, with:
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

#### RetiredForagerBee
- [ ] Create a RetiredForagerBee class, in pseudoclassical style, with:
  - [ ] `call` the ForagerBee superclass
  - [ ] set the prototype
  - [ ] set the constructor
  - [ ] an `age` property that is set to `40`
  - [ ] a `job` property that is set to `gamble`
  - [ ] a `canFly` property that is set to `false`
  - [ ] a `color` property that is set to `grey`
  - [ ] a `forrage` method that returns "I am too old, let me play cards instead"
  - [ ] a `food` property that is inhereted from grub
  - [ ] an `eat` method that is inhereted from grub
  - [ ] a `treasureChest` property inhereted from ForagerBee that is set to an empty array `[]`
  - [ ] an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`

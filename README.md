beesbeesbees
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

### Begin

Start the repo in grub.js to create the first class, which will be the superclass for all kinds of bees that come after. Then move through the repo in order of the tree above, passing all of the Specs in SepcRunner.html--which you can run by simply opening it in your browser and refreshing the page whenever you make changes.

### Resources
* [Giraffe Maker - a Hack Reactor repo on inheritance patterns](https://github.com/hackreactor/giraffeMaker)
* [Pseudoclassical Inheritance](https://www.inkling.com/read/javascript-good-parts-douglas-crockford-1st/chapter-5/pseudoclassical)
* [Object.create](http://dailyjs.com/2012/06/04/js101-object-create/)

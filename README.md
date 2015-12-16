# 6ees6ees6ees

![](http://i.imgur.com/qrLEV.gif)

### ES6 Bees - get ready to learn some science

Bees (the most noble of insects) progress through specific developmental stages over the course of their lifetimes. Each phase has specific traits and behaviors associated with it that are unique to that lifestage. In this repo, you will create bees of many lifestages while practicing the pseudoclassical instatiation pattern, inheritance, and subclassing.

### Class Structure

    .
    ├── Grub
    │   └── Bee
    │       ├── HoneyMakerBee
    │       └── ForagerBee
    │          └── RetiredForagerBee

As you can see in the diagram above, all bees start out as a Grub, grow into a Bee and are then assigned its specific jobs and tasks among its other charactersitics. This means that characteristics are inherited from the classes above (although they can be modified on the current class level).

### Resources
* [ES6 Classes in Depth](https://ponyfoo.com/articles/es6-classes-in-depth)
* [ES6 Modules in Depth](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
* [Exploring ES6](http://exploringjs.com/es6/ch_classes.html)

## Bare minimum requirements

The next version of JavaScript, implemented from the EMCAScript 6 specification, is here! It is often referred to as ES6 or ES2015. ES6 brings [a lot of exciting new features](https://ponyfoo.com/articles/es6) to the JavaScript language. It's important to know that ES6 is just the *specification* of the language, or simply a list of rules. It's still up to various engines (V8 - Chrome/Node, SpiderMonkey - Firefox) to *implement* these rules. Engine maintainers are working hard to implement these new features as fast as they can, but it will take some time before every environment supports the entire ES6 spec.

One exciting feature is the inclusion of a `class` keyword! This is a big change for engineers who write object-oriented code because it makes JavaScript look and feel more like a traditional class based language even though it's really just syntactic sugar on top of the pseudoclassical instantiation pattern you are familiar with. ES6 makes subclassing much easier as well with the introduction of the `extends` keyword.

### npm

If you don't know about npm yet, don't worry. Just know that when `npm install` is run from the command line, the packages listed in package.json will be automatically installed to `node_modules`.
  - [ ] If you don't have npm installed on your system, install it by running `brew install node`
  - [ ] Use npm to install the dependencies by running the following command from the root directory of the repo: `npm install`.

### Babel

[Babel](http://babeljs.io/) is a tool that translates ES6 syntax to ES5. This is great because it lets use all the new ES6 features without needing to wait for javascript engines to implement them. This transformation is done for you under the hood as the tests run.

### Subclassing

Build your first class in Grub.js. Grub will act as the superclass for all other types of bees. Work through the repo in the order specified below, making sure to pass all of the specs in `test/` - which you can run by typing `npm test` in your terminal.

#### Things To Note:
- This assignment must be written with ES6 classes. Don't forget about `extends` and `super`
- Although there are multiple tests for each class, you will only be able to see one test at a time. As soon as one test fails the spec runner stops running and you must pass the current test to continue.

#### Grub
- [ ] Create a Grub class, in ES6 class style, with:
  - [ ] an `age` property that is set to `0`
  - [ ] a `color` property that is set to `pink`
  - [ ] a `food` property that is set to `jelly`
  - [ ] an `eat` method

#### Bee
- [ ] Create a Bee class, in ES6 class style, with:
  - [ ] `extends` the Grub superclass
  - [ ] an `age` property that is set to `5`
  - [ ] a `color` property that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `job` property that is set to `Keep on growing`

#### HoneyMakerBee
- [ ] Create a HoneyMakerBee class, in ES6 class style, with:
  - [ ] `extends` the Bee superclass
  - [ ] an age property that is set to `10`
  - [ ] a job property that is set to `make honey`
  - [ ] a color property inherited from `bee` that is set to `yellow`
  - [ ] a food property that is inherited from grub
  - [ ] an eat method that is inherited from grub
  - [ ] a `honeyPot` property that is set to `0`
  - [ ] a `makeHoney` method that adds `1` to that honeyBee's `honeyPot`
  - [ ] a `giveHoney` method that subtracts `1` from that honeyBee's `honeyPot`

#### ForagerBee
- [ ] Create a ForagerBee class, in ES6 class style, with:
  - [ ] `extends` the Bee superclass
  - [ ] an age property that is set to `10`
  - [ ] a `job` property that is set to `find pollen`
  - [ ] a `color` property inherited from `bee` that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `canFly` property that is set `true`
  - [ ] a `treasureChest` property that is set to an empty array `[]`
  - [ ] a `forage` method that allows the bee to add a `treasure` to the `treasureChest`

#### RetiredForagerBee
- [ ] Create a RetiredForagerBee class, in ES6 class style, with:
  - [ ] `extends` the ForagerBee superclass
  - [ ] an `age` property that is set to `40`
  - [ ] a `job` property that is set to `gamble`
  - [ ] a `canFly` property that is set to `false`
  - [ ] a `color` property that is set to `grey`
  - [ ] a `forage` method that returns `I am too old, let me play cards instead`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `treasureChest` property inherited from ForagerBee that is set to an empty array `[]`
  - [ ] an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`

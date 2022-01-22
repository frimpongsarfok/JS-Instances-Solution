class Grub {
  /* START SOLUTION */

  /*
  #### Grub
- [ ] Create a Grub class, in ES6 style, with:
  - [ ] an `age` property that is set to `0`
  - [ ] a `color` property that is set to `pink`
  - [ ] a `food` property that is set to `jelly`
  - [ ] an `eat` method that returns `'Mmmmmmmmm jelly'`

  */
  constructor(age=0,color='pink',food='jelly') {
    this.age=age;
    this.color=color;
    this.food=food;
  }
  eat(){return `Mmmmmmmmm ${this.food}`}
  /* END SOLUTION */
};


/* START SOLUTION */
/*
#### ForagerBee
- [ ] Create a ForagerBee class, in ES6 style, with:
  - [ ] the Bee superclass
  - [ ] an age property that is set to `10`
  - [ ] a `job` property that is set to `find pollen`
  - [ ] a `color` property inherited from `bee` that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `canFly` property that is set `true`
  - [ ] a `treasureChest` property that is set to an empty array `[]`
  - [ ] a `forage` method that allows the bee to add a `treasure` to the `treasureChest`
*/
class ForagerBee extends Bee{
    constructor(
        age=10,
        color=undefined,
        food=undefined,
        job=`find pollen`,
        canFly=true,treasureChest=[]
        )
    {
        super(age,color,food,job);
        this.canFly=canFly;
        this.treasureChest=treasureChest;

    }
    eat(){
        super.eat();
    }
    
    forage(treasure){
        this.treasureChest.push(treasure);
    }

}
/* END SOLUTION */

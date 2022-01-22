/* START SOLUTION */
/*
#### HoneyMakerBee
- [ ] Create a HoneyMakerBee class, in ES6 style, with:
  - [ ] the Bee superclass
  - [ ] an age property that is set to `10`
  - [ ] a job property that is set to `make honey`
  - [ ] a color property inherited from `bee` that is set to `yellow`
  - [ ] a food property that is inherited from grub
  - [ ] an eat method that is inherited from grub
  - [ ] a `honeyPot` property that is set to `0`
  - [ ] a `makeHoney` method that adds `1` to that honeyBee's `honeyPot`
  - [ ] a `giveHoney` method that subtracts `1` from that honeyBee's `honeyPot`

*/
class HoneyMakerBee extends Bee{
     constructor(
         age=10,
         color='yellow',
         food=undefined,
         job=`make honey`,
         honeyPot=0
         )
    {
        super(age,color,food,job);
        this.honeyPot=honeyPot;
     }
     eat(){
         super.eat();
     }
     makeHoney(){
         this.honeyPot+=1;
     }
     giveHoney(){
         this.honeyPot-=1;
     }

}
/* END SOLUTION */

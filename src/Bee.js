/* START SOLUTION */
/* 
#### Bee
- [ ] Create a Bee class, in ES6 style, with:
  - [ ] the Grub superclass
  - [ ] an `age` property that is set to `5`
  - [ ] a `color` property that is set to `yellow`
  - [ ] a `food` property that is inherited from grub
  - [ ] an `eat` method that is inherited from grub
  - [ ] a `job` property that is set to `Keep on growing`

*/
class Bee extends Grub{
    constructor(age=5,color='yellow',food=undefined,job=`Keep on growing`){
        super(age,
            color,
            food,
        );
        this.job=job;
    
    }
    eat(){
        super.eat();
    }
}

/* END SOLUTION */

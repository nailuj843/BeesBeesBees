/* START SOLUTION */
class ForagerBee extends Bee{
    constructor(){
        super()
        this.age = 10
        this.job = 'find pollen'
        this.color = 'yellow'
        this.canFly = true
        this.treasureChest = []
    }

    forage(treasure){
        this.treasureChest.push(treasure)
    }

}
/* END SOLUTION */

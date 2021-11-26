class CapsuleContender {
    constructor(fuel) {
      this.fuel = fuel;
      this.maxFuel = 3000;
      this.dockingRing = false;
      this.radarSystem = false;
      this.reactionControlSystem = false;
    }
  
    currentFuelPercentage() {
      let fuelPercent = this.fuel/this.maxFuel
      return fuelPercent
    }
  
    toggleDockingRing() {
      if(this.dockingRing == false) {
        return this.dockingRing = true
      } else {
        return this.dockingRing = false
      }
    }
  
    toggleRadar() {
      if(this.radarSystem == false) {
        return this.radarSystem = true
      } else {
          this.radarSystem = false
      }
    }
  
    toggleRCS() {
      if(this.reactionControlSystem === false) 
        if(this.currentFuelPercentage() > .4){
          return this.reactionControlSystem = true
        } else {
        return this.reactionControlSystem = false
      } else {
        return this.reactionControlSystem = false
      }
    }
  
    preDockingProcedure() {
      this.toggleDockingRing()
      this.toggleRadar() 
      this.toggleRCS()
      if(this.dockingRing == true && this.radarSystem == true && this.reactionControlSystem == true) {
        return 200
      } else {
        return 500
      }
    }
  }
  
  let capsule = new CapsuleContender(2100)
  let capsule1 = new CapsuleContender(1000)
  console.log(capsule.preDockingProcedure())
  console.log(capsule1)
  
  
  
  
  // Please do not modify line(s) below
  module.exports = CapsuleContender;



  class CapsuleContender {
    constructor(fuel, maxFuel = 3000, dockingRing = false, radarSystem = false, reactionControlSystem = false) {
      this.fuel = fuel
      this.maxFuel = maxFuel
      this.dockingRing = dockingRing
      this.radarSystem =radarSystem
      this.reactionControlSystem = reactionControlSystem
    } 

    currentFuelPercentage() {
      return (this.fuel / this.maxFuel) * 100
    }

    toggleDockingRing(toggle) {    /// this was done in review with Paul. These functions fail the tests
      this.dockingRing = toggle
    }

    toggleRadar(toggle) {
      this.radarSystem = toggle
    }

    toggleRCS(toggle) {
      if (toggle = true && this.currentFuelPercentage() >= 0.4) {
      this.reactionControlSystem = toggle 
      } else {
        console.log("Insufficient fuel to perfom procedure.")
      }
    }

    preDockingProcedure() {
      if (this.preDockingProcedure && this.radarSystem && this.reactionControlSystem) {
          return 200
      } else {
        return 500
      }
    }
  }

  let test = new CapsuleContender(3000)

  console.log(test.currentFuelPercentage())

  test.toggleRadar(false)
  console.log(test)

  module.exports = CapsuleContender;
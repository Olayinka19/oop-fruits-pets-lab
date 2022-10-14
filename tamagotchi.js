// Create class below
// 'use strict';
class Tamagotchi {
    constructor (name, energy = 9, full = 8, mood = 6,    
        sick = false, rehomed = false) {
     //attributes
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    //methods
    greet() {
        console.log(`Hello, I'm ${this.name}!`);
    }
    status() {
        if (this.full > 10) {
            this.sick = true;
            console.log("I am sick.");
        }
    }
    eat() {
        this.full+=2;
        this.energy--;
        this.status()
    }
    medicate() {
       if(this.sick === true) {
        this.full = 9;
        this.energy-=3;
       } else if (!this.sick){
        console.log("I don't need medication !")
        this.energy--  
       }

    }
    play() {
        if (this.mood +=2){
            this.energy--;
            this.full--;
        }
        else if (!this.sick){
            this.mood--;
            this.energy--;
        }
        else if (this.mood > 9) {
            this.energy-=2;
            this.full-=1;
        }  
        else if (this.energy <=3) {
            console.log("I am too tired to play");
            this.energy-=1; 
        }
       
    }

    sleep() {
        this.energy +=4;
        this.full -=3;

    }
    timePasses() {
        if(!this.sick) {
            this.mood -=2;
            this.full--;
            this.energy--;
        }
        if(this.sick) {
            this.mood -=3;
            this.full -=2;
            this.energy -=2;
        }
        
    }
    badGuardian() {
        if (this.energy <= 0 || this.mood <= 0 || this.full <= true) {
            this.rehomed = true;
            console.log("Tamagotchi has been rehomed.");
        }

    }


}

// Do not edit below this line
module.exports = Tamagotchi;










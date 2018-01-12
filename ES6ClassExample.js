/*
  This is a basic example of how ES6 uses the 'class' keyword to create a prototype. Play with the commented console.log's to help build your understanding of classes.
*/

//Our basic use of 'class'
class Hacker {
  // Constructor constructs a unique clone with (or without) some initial parameters
  constructor(name, introduction) {
    this.job = 'None';
    this.language = "JavaScript";
    this.experience = 0;
    this.name = name;
    this.intro = introduction;
  }
  // Define class methods
  greet() {
    console.log(this.intro);
  }

};

let teaShpiel = "We have blueberry, raspberry, ginseng, sleepy time, green tea, green tea with lemon, green tea with lemon and honey, liver disaster, ginger with honey, ginger without honey, vanilla almond, white truffel, blueberry chamomile, vanilla walnut, constant comment and... earl grey."

// Keyword 'new' creates a new instance of the 'Hacker' class
let precourseStudent = new Hacker("Ramona Flowers", teaShpiel);


// console.log('Ramona', precourseStudent);

// This class is a superclass of 'Hacker'. It has everything that the 'Hacker' clas has and 'extends' other properties and methods on top of that.
class HackerInResidence extends Hacker {
  constructor(name, introduction) {
    // 'super' is the parent constructor. We must invoke it to pass properties.
    super(name, introduction);
    // Class state or properties
    this.job = "Intern";
    this.experience = 2;
    this.canUseES6Classes = true;
  }
  //Class methods
  teachPrecourse(hacker) {
    hacker.experience ++;
    hacker.canUseES6Classes = true;
  }
  getsAJob() {
    this.experience ++;
    this.job = "Software Engineer"
  }

};

let evilEx1 = "I'm Matthew Pattel and I am Ramona's ... FIRST. Evil. Ex. Boyfriend."

// Keyword 'new' creates a new instance of the 'HackerInResidence' class
let precourseHiR = new HackerInResidence("Matthew Pattel", evilEx1);

// console.log('Matthew', precourseHiR);

// precourseHiR.teachPrecourse(precourseStudent);

// console.log('Ramona', precourseStudent);

// precourseHiR.getsAJob();

// console.log('Matthew', precourseHiR);

// precourseHiR.greet();



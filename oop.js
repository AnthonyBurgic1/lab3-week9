const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    var obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    }
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("Anthony", "Burgic", 19, "Male", ["Running", "driving", "cottage outdoors"]);
console.log(person1.bio());

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person2 = new Person("Anthony", "Burgic", 19, "Male", ["Running", "Driving", "Cottage Outdoors"]);
console.log(person2.bio());

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
function PersonComplete(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The intrests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    };
    this.greeting = function () {
        alert(`Hellow, I am ${this.name.firstName} ${this.name.lastName}!`);
    };
}
/* STEP 3b: Instantiate a new Person based on the above constructor */
let person3 = new PersonComplete("Anthony", "Burgic", 19, "Male", ["Baseball", "Gaming", "Eating"]);
person3.greeting();


/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.model = "Civic";

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
console.log(anotherCar.brand);

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
function createHamburger(bunType, cheeseType, meatType, numPatties, garnishes, sauces) {
    this.bunType = bunType;
    this.cheeseType = cheeseType;
    this.meatType = meatType;
    this.numPatties = numPatties;
    this.garnishes = garnishes;
    this.sauces = sauces;
    this.describe = function() {
        retun `This hamburger has ${this.bunType} bun, ${this.numPatties} patties of ${this.meatType}, ${this.cheeseType} cheese, and is tooped with ${this.garnishes.join(", ")} and ${this.sauces.join(", ")}.`;
    };
}

// Creating a Hamburger object \\
let myHamburger = new createHamburger("sesame", "cheddar", "beef", 2, ["lettuce", "tomato", "onions"], ["ketchup", "mustard"]);
console.log(myHamburger.describe());

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
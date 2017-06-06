var chevyParams = {make: "Chevy",
                  model: "Bel Air",
                  year: 1957,
                  color: "red",
                  passengers: 2,
                  convertible: false,
                  mileage: 1021,
                };
var chevy = new Car (chevyParams);

var cadiParams = {make: "GM",
                  model: "Cadillac",
                  year: 1955,
                  color: "tan",
                  passengers: 5,
                  convertible: false,
                  mileage: 12892,
                };
var cadi = new Car (cadiParams);


function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;

  this.start = function() {
    this.started = true;
  };
  this.stop = function() {
    this.started = false;
  };
  this.drive = function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " " + "goes zoom zoom!");
    } else {
      console.log("The engine must be started first.");
    }
  };
}


// var taxi = new Car ("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
// var fiat = new Car ("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
// var testCar = new Car ("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);


  cadi.start();
  cadi.drive();
  cadi.drive();
  cadi.stop();
  

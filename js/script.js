var doCoolStuff = function () {
	document.getElementbyID("cool").className = "cool red";
}

var sayMyName = function(name) {
	alert("My name is " + name);
}

var car = {
	make:"Subaru",
	model:"Legacy",
	colour:"Black",
	year:2004,
	isTurnedOn: true,
	numberOfWheels: 4,
	seats: [
		"seat 1",
		"seat 2",
		"seat 3",
		"seat 4"
	],
	turnOn: function() {
		this.isTurnedOn=true;
	},
	turnOff: function() {
		this.isTurnedOn=false;
	},
	fly: function() {
		alert("Fly");
	},
	switchCar: function(isOn) {
		console.log("Turn car " + isOn);
		if(isOn == true) {
			this.isTurnedOn=true;
		} else {
			this.isTurnedOn=false;
		}
	}
};
console.log("Hello there friends!!!!");
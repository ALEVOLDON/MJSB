const person = {
	firstName: "Steve",
	lastName: "Smith",
	age: 30,
	email: "steve@aol.com",
	hobbies: ["music","sports"],
	address: {
		city: "Miami",
		state: "FL"
	},
	getBirtYear: function(){
		return 1987;
	}
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies;

console.log(val);
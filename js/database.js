var fdb = new ForerunnerDB();
var db = fdb.db("cars");

var carsCollection = db.collection('cars');

for (var i = 0;i = 0; i++) {
	var newCars = {
		name: "red" + i,
		age: 10+i
	}
	carsCollection.insert(newCars)
}
carsCollection.save();

carsCollection.load()

function load(){
	var cars = carsCollection.find();
	console.log(cars)
}

setTimeout(load,1000)










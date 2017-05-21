var fdb = new ForerunnerDB();
var db = fdb.db("cars");
var carsCollection = db.collection('cars');
carsCollection.save();
carsCollection.load();
$(document).ready(function(){
	var cars = carsCollection.find();
	console.log(cars);
    for (var i = 0; i < cars.length; i++) {
	    var carid = cars[i]._id;
		var carname = cars[i].name;
		var carcolor = cars[i].color;
		$("#carid").append("<tr><button class='btn btn-link carsID' data-toggle='modal' data-target='#carModal'>" + carid + "</button></tr>");
	    $("#carname").append("<tr>" + carname + "</tr>");
	    $("#carcolor").append("<tr>" + carcolor + "</tr>");    
	}
    $(".carsID").click(function() {
        var carsId = $(this).text();
        console.log("carsId");
        var query = {
            _id: carsId
        }
        var cars = carsCollection.find(query)[0];
        $("#carsName").text(cars.name);
        $("#carsAge").text(cars.age);
        $("#carsId").text(cars._id);
        $("#carsInfo").modal('show');
    });
})
function add() {
    var carname = $("#carname").val();
    var carcolor = $("#carcolor").val()
    var newCars = {
        name: carname,
        color: carcolor
    };
    carsCollection.insert(newCars);
    carsCollection.save();
    var cars = carsCollection.find(newCars)[0]
    var carid = cars._id;
	var carname = cars.name;
	var carcolor = cars.color;
	console.log(carname);
	console.log(carcolor);
    $("#carid").append("<tr><button class='btn btn-link carsID' data-toggle='modal' data-target='#carModal'>" + carid + "</button><tr>");
    $("#carname").append("<tr>" + carname + "</tr>");
    $("#carcolor").append("<tr>" + carcolor + "</tr>");
}
$("#add").click(add);
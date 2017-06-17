var fdb = new ForerunnerDB();
var db = fdb.db("mydb");

var carsCollection = db.collection('cars');

// for (var i = 0; i <10 ; i++) {
//  var newCars = {
//      name : "Blue" + i,
//      age  :10 + i
//  }
// carsCollection.insert(newCars)

// }
// carsCollection.save()

carsCollection.load()

function createHTMLString(_id, name) {
    return "<tr><td>" + _id + "</td><td>" + name + "</td><td><button class = 'deleteButton btn btn-danger' data-id = '" + _id + "'>刪除</button></td></tr>";
}

function afterLoad() {
    var cars = carsCollection.find();
    console.log(cars)
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]._id);
        $("#table1").append(createHTMLString(cars[i]._id, cars[i].name));
    }
    $("#table1").on("click", ".carsid", function() {
        var carsid = $(this).text();
        console.log(carsid)
        var query = {
            _id: carsid
        };
        var cars = carsCollection.find(query)[0];
        $("#carsname").text(cars.name);
        $("#carsage").text(cars.age);
        $("#carsid").text(cars._id);

        $("#carsinformation").modal('show');
    });
}
setTimeout(afterLoad, 1000);

function addData() {
    var name = $("#newName").val();
    var age = $("#newAge").val();
    var newCars = {
        name: name,
        age: age
    };
    carsCollection.insert(carsStudent);
    carsCollection.save();
    var cars = carsCollection.find(newCars)[0];
    console.log(cars);
    $("#table1").append(createHTMLString(cars._id, cars.name));
}
$("#addData").click(addData);

function deleteData() {
    var id = $(this).attr("data-id")
    console.log(id)
    carsCollection.remove({
        _id: id
    });
    carsCollection.save()
    $(this).parents("tr").remove()

}
$("#table1").on("click", ".deleteButton", deleteData)
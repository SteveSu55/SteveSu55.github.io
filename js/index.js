function hello() {
    var name = $("#name").val()
    var age = $("#age").val()
    var sex = "";


    if ($("#1-checkbox").prop("checked")) {
        sex += " " + $("#1-checkbox").val();
    }
    if ($("#2-checkbox").prop("checked")) {
        sex += " " + $("#2-checkbox").val();
    }
    if ($("#3-checkbox").prop("checked")) {
        sex += " " + $("#3-checkbox").val();
    }
    alert("Hello，" + age + "歲的" + name + "，你好！" + "原來你是" + sex)
}




$("#name").val("")
$("#age").val("")
$("#1-checkbox").prop("checked" , false)
$("#2-checkbox").prop("checked" , false)
$("#3-checkbox").prop("checked" , false)



$("#hello").on("click", hello);
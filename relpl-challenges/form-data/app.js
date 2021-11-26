

var k = "The customer is shopping for:";
function display() {
    var input = document.getElementsByName('array[]');

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + "array[" + i + "].value= "
            + a.value + " ";
    }

    document.getElementById("par").innerHTML = k;
    document.getElementById("dislpay").innerHTML = "Output";
}
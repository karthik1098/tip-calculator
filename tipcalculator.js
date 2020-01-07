/*function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual1 = document.getElementsByName("serviceQual");
    var serviceQual;
    for (var i = 0, length = serviceQual1.length; i < length; i++) {
        if (serviceQual1[i].checked) {
        serviceQual = document.getElementsByName("serviceQual")[i].value;
        }
    }
   
    var numOfPeople = document.getElementById("numOfPeople").value;
    
    
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    
    var total = (billAmt * serviceQual) / numOfPeople;
    
    total = Math.round(total * 100) / 100;
    
    total = total.toFixed(2);

   var d = total;
    alert('total='+d);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


   

    





}document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
function myFunction() {
    var serviceQual1 = document.getElementsByName("serviceQual");
    for (var i = 0, length = serviceQual1.length; i < length; i++) {
        if (serviceQual1[i].checked) {
            serviceQual = document.getElementsByName("serviceQual")[i].value;
        }
    }
    var a = document.getElementById("billamt").value;
    var b = serviceQual;
    var c = document.getElementById("numOfPeople").value;
    
    alert('bill amount='+a);
    alert('service quality='+b);
    alert('numbe of people =' + c);
   
    
}

document.getElementById("calculate").onclick = function () {
    calculateTip();
    myFunction();
    $(document).ready(function () {
        $("button").click(function () {
            $.ajax({
                url: "http://127.0.0.1:5000/", success: function (billAmt) {
                    $("myform").html(billAmt);
                }
            });
        });
    })
   // var imported = document.createElement('script');
   // imported.src = '/dbcon.js';
    //debugger;
    //document.head.appendChild(imported);
    
};
*/
const totalElement = document.getElementById('total');


var clicks = 0
function onClick(){
    clicks += 1;
    document.getElementById("total").innerHTML = clicks
}

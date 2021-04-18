
function Calc_cost(){
    
    var foodcost=parseFloat(document.getElementById("foods").value);
    var roomcost=parseFloat(document.getElementById("rooms").value);
    var sauna=document.getElementById("sauna")
    var spa=document.getElementById("spa");
    var haircuts=document.getElementById("haircuts");
    var makeOver=document.getElementById("make-over");
    var saunaValue;
    var spaValue;
    var haircutsValue;
    var makeOverValue;
    var other_services;
    var total;
if (sauna.checked== true){
    saunaValue=112;
}else{
    saunaValue=0
}
if (spa.checked== true){
    spaValue=12
}else{
    spaValue=0
}
if (haircuts.checked == true){
    haircutsValue=4
}else{
    haircutsValue=0
}
if(makeOver.checked == true){
    makeOverValue=10
}else{
    makeOverValue=0
}

 other_services=saunaValue + spaValue + haircutsValue + makeOverValue;
 total=other_services + roomcost + foodcost
console.log(total);
document.getElementById("totalcost").innerHTML=`Your total bill is $${total}`
    
}
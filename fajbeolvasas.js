function megoldas1() {
    let x = document.getElementById("f1").value;
    if (x == "getData") {
        document.getElementById("csere").innerHTML = "getData"
        document.getElementById("csere").style.backgroundColor = "aqua"
    }
    else {
        document.getElementById("csere").style.backgroundColor = "red"
    }
}
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    let x = document.getElementById("f1").value;
    if (x == "getData") {
        document.getElementById("csere").innerHTML = "getData"
        document.getElementById("csere").style.backgroundColor = "aqua"
    }
    else {
        document.getElementById("csere").style.backgroundColor = "red"
    }
}

let btn2 = document.getElementById("f2");
btn2.addEventListener("click",kiir);
btn2.addEventListener("mouseover", ramutat);
btn2.addEventListener("mouseout", lemutat);
function kiir(){
    let igaz = document.getElementById("igaz");
    if(igaz.checked){
        document.getElementById("ide").innerHTML="A válaszod rossz"
    }
    else{
        document.getElementById("ide").innerHTML="A válaszod nem rossz"
    }
}

function ramutat(){
    document.getElementById("f2").style.color="red";
}

function lemutat(){
    document.getElementById("f2").style.color="black";
}
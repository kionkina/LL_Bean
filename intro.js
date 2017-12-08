

var randomStudent = function(){
    var SL = ["Leo", "Karina", "Adam", "Tmoi", "Khyber", "Alessandro", "Joyce", "Dasha"];
    var rannum = Math.floor(Math.random() * SL.length);
    return(SL[rannum]);

};


var changeHeader = function(x){
    var h = document.getElementById("h");
    console.log(h);
    h.innerHTML = x.innerHTML;
} 

var student = randomStudent()
var theList = document.getElementById("thelist");
theList.innerHTML += "<li>" + student + "</li>";

var listItem = document.getElementsByTagName("li");
listItem.addEventListener("mouseover", changeHeader(listItem));


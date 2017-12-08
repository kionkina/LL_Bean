

var randomStudent = function(){
    var SL = ["Leo", "Karina", "Adam", "Tmoi", "Khyber", "Alessandro", "Joyce", "Dasha"];
    var rannum = Math.floor(Math.random() * SL.length);
    return(SL[rannum]);

};


var fxn = function(x){
    console.log(document.getElementById("h").innerHTML);    
}

var student = randomStudent()
var theList = document.getElementById("thelist");
theList.innerHTML += "<li>" + student + "</li>";


var listItem = document.getElementsByTagName("li");
console.log(this)



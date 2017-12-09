var randomStudent = function(){
    var SL = ["Leo", "Karina", "Adam", "Tmoi", "Khyber", "Alessandro", "Joyce", "Dasha"];
    var rannum = Math.floor(Math.random() * SL.length);
    return(SL[rannum]);
};

var changeHeader = function(content){
    header = document.getElementById("h");
    header.innerHTML = content;
};

var addRando = function(){
    var theList = document.getElementById("thelist");
    theList.innerHTML += "<li>" + randomStudent() + "</li>";
};

var resetHeader = function(){
    
    
}

var student = randomStudent();
var theList = document.getElementById("thelist");
theList.innerHTML += "<li>" + student + "</li>";

var button = document.getElementById("b");
button.addEventListener("click", addRando);

var listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i ++){
    listItems[i].addEventListener("mouseover", function() {
	changeHeader("hi");
    });
    listItems[i].addEventListener("mouseout", resetHeader);
    listItems[i].addEventListener("click", function(){
	console.log("trying to remove");
	listItems[i].remove(1);
    });
};



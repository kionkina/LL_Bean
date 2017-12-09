var debug = false;
//disable/enable debug console statements

var randomStudent = function(){
    var SL = ["Leo", "Karina", "Adam", "Tmoi", "Khyber", "Alessandro", "Joyce", "Dasha"];
    var rannum = Math.floor(Math.random() * SL.length);
    return(SL[rannum]);
};

var changeHeader = function(){
    if (debug)
	console.log("hover detected!");
    header = document.getElementById("h");
    header.innerHTML = this.innerHTML;
    if(debug)
	console.log("header changed");
};

var addRando = function(){
    var theList = document.getElementById("thelist");
    var li = document.createElement("li");
    li.innerHTML = randomStudent();
    li.addEventListener("mouseover", changeHeader);
    li.addEventListener("mouseout", resetHeader);
    li.addEventListener("click", remove);
    theList.appendChild(li);
};

var resetHeader = function(){
    if(debug)
	console.log("resetting header");
    header = document.getElementById("h");
    header.innerHTML = "Hello World!";
    if(debug)
	console.log("header reset completed");
}

var remove = function(){
    if(debug)
	console.log("Trying to remove");
    this.remove();
    if(debug)
	console.log("removed");
}

var student = randomStudent();
var theList = document.getElementById("thelist");
var listItems = document.getElementsByTagName("li");
theList.innerHTML += "<li>" + student + "</li>";

var button = document.getElementById("b");
button.addEventListener ("click", addRando);



for (var i = 0; i < listItems.length; i ++){
    listItems[i].addEventListener("mouseover", changeHeader);
}
for (var i = 0; i < listItems.length; i ++){
    listItems[i].addEventListener("mouseout", resetHeader);
}
for (var i = 0; i < listItems.length; i ++){
    listItems[i].addEventListener("click", remove);
};


/* BUGS

* header will not reset to "Hello World!" after the last element is removed.

*/

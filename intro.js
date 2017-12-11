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
        if(debug){
	    console.log("before removing");
	console.log(theList.innerText);
    }
    this.remove();
    if(debug){
	console.log("after removing");
	console.log(theList.innerText == "");
    }
    if (theList.innerText == ""){
	header = document.getElementById("h");
	header.innerHTML = "Hello World!";
	// resetHeader doesn't work here, but retyping the fxn's body works
    }
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



var addFib = function(n){
    num = fibonacci(n);

    var firstEl = document.createElement("li");
    firstEl.innerHTML = num;
    newList.appendChild(firstEl);
}

var newButton = document.createElement("button");
newButton.setAttribute("id","fib"); 
newButton.innerHTML= "fib button";
    var newList = document.createElement("ol");
bod = document.getElementsByTagName("body")[0];
bod.appendChild(newList);
bod.appendChild(newButton);
newButton.addEventListener("click", function() { addFib(5);});

console.log(newList[0]);

//var addFib = function(){
//    var num = fact(


var fibonacci = function(n){
    if (n==0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    else {
        return  fibonacci(n - 1) + fibonacci(n - 2);
    }};






// IMPORTANT: newList["lastElementChild"].innerText
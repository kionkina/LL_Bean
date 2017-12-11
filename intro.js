var debug = false;
//disable/enable debug console statements

// returns a random student
var randomStudent = function(){
    var SL = ["Leo", "Karina", "Adam", "Tmoi", "Khyber", "Alessandro", "Joyce", "Dasha"];
    var rannum = Math.floor(Math.random() * SL.length);
    return(SL[rannum]);
};


// changes the header
var changeHeader = function(){
    if (debug)
	console.log("hover detected!");
    header = document.getElementById("h");
    header.innerHTML = this.innerHTML;
    if(debug)
	console.log("header changed");
};


//adds a random student to first list
var addRando = function(){
    var theList = document.getElementById("thelist");
    var li = document.createElement("li");
    li.innerHTML = randomStudent();
    li.addEventListener("mouseover", changeHeader);
    li.addEventListener("mouseout", resetHeader);
    li.addEventListener("click", remove);
    theList.appendChild(li);
};


//changes the header back to "Hello World"
var resetHeader = function(){
    if(debug)
	console.log("resetting header");
    header = document.getElementById("h");
    header.innerHTML = "Hello World!";
    if(debug)
	console.log("header reset completed");
}


//removes an element from the first list
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
//theList.innerHTML += "<li>" + student + "</li>";

// linking button to addRando
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


// function adds next fib # to the second list
var addFib = function(){
    // chilNodes.length returns the length of the list
    n = newList["childNodes"].length;
    num = fibonacci(n);
    var firstEl = document.createElement("li");
    firstEl.innerHTML = num;
    newList.appendChild(firstEl);
}


bod = document.getElementsByTagName("body")[0];

//new button is created
var newButton = document.createElement("button");
newButton.setAttribute("id","fib"); 
newButton.innerHTML= "fib button";
bod.innerHTML += "<br> <br>";
bod.appendChild(newButton);

//newList is created 
var newList = document.createElement("ol");
bod.appendChild(newList);

// new button linked to addFib
newButton.addEventListener("click", addFib);


var fibonacci = function(n){
    console.log(n);
    if (n==0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    else {
        return  fibonacci(n - 1) + fibonacci(n - 2);
    }};


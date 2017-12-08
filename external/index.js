//define factorial fxn
var fact = function(n) {
  if ( n < 2 ) 
    return 1;
  else
    return n * fact(n-1);
};

// outputs upon page load
console.log( "fact(1) should be 1: " + fact(1) );
console.log( "fact(2) should be 2: " + fact(2) );
console.log( "fact(3) should be 6: " + fact(3) );
console.log( "fact(4) should be 24: " + fact(4) );
console.log( "fact(5) should be 120: " + fact(5) );

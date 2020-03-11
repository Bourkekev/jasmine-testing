function Calculator( value ) {
    this.value = 0;
}

// constructor can also be written as:
// Calculator = function() {
//     this.value = 0;
// };

Calculator.prototype.add = function(number) {
    if ( typeof(number) == "number" ) {
        this.value += number;
    }
    else {
        alert( "Error!" );
    }
}
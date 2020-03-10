function addition(numOne, numTwo) {
    if ( typeof(numOne) == "number" && typeof(numTwo) == "number" ) {
        return numOne+numTwo;
    }
    else {
        return "Error!!! That\'s not 2 bloody numbers";
    }
}
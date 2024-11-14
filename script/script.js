function addValue(){
    // get the operands value

    let val1 = document.getElementById('input_a').value;
    let val2 = document.getElementById('input_b').value;

    // parse to integer. You can use: parseInt(input, 10);
    
    val1 = parseFloat(val1, 10); 
    val2 = parseFloat(val2, 10); 

    // cheking contents of the input

    if (isNaN(val1) || isNaN(val2)){
        document.mycalculator.output.value = "Error: Invalid Input"
        return;
    }

    // perform operation
    let result = val1 + val2;

    // creating the text output

    //let text = result;
    let text = `${val1} + ${val2} = ${result}`;


    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = text;
}


function mulValue(){
     // get the operands value

     let val1 = document.getElementById('input_a').value;
     let val2 = document.getElementById('input_b').value;
 
     // parse to integer. You can use: parseInt(input, 10);
     
     val1 = parseFloat(val1, 10); 
     val2 = parseFloat(val2, 10); 

     // cheking contents of the input

    if (isNaN(val1) || isNaN(val2)){
        document.mycalculator.output.value = "Error: Invalid Input"
        return;
    }
 
     // perform operation
     let result = val1 * val2;
 
     // creating the text output
 
     //let text = result;
     let text = `${val1} × ${val2} = ${result}`;
 
     // (if you want to check) print out in console
 
     // change the text area
 
    document.mycalculator.output.value = text;
}

function divValue(){

    
    let val1 = document.getElementById('input_a').value;
    let val2 = document.getElementById('input_b').value;

    // parse to integer. You can use: parseInt(input, 10);
    
    val1 = parseFloat(val1, 10); 
    val2 = parseFloat(val2, 10); 

    // cheking contents of the input

    if (isNaN(val1) || isNaN(val2)){
        document.mycalculator.output.value = "Error: Invalid Input"
        return;
    }

    if (val2 == 0){
        document.mycalculator.output.value = "Error: Div by 0"
        return;
    }

    // perform operation
    let result = val1 / val2;

    // creating the text output

    //let text = result;
    let text = `${val1} : ${val2} = ${result}`;

    // (if you want to check) print out in console

    // change the text area

   document.mycalculator.output.value = text;
}

const display=document.getElementById("display");

function append(input){
    display.value += input;
}



function calculator(){

    try{
        display.value = eval(display.value);
    }catch(err){
        display.value = "Error";
    }
   
}

function clearDisplay(){
    display.value = "";
}
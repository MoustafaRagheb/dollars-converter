var counter =0;

function incData(){
    counter++;
    document .getElementById("demo").innerHTML = counter;
}

function decData(){
    counter--;
    document .getElementById("demo").innerHTML = counter;   
}
//============================================================//

function convertDollar(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
        return false;
    }else if (dollar<0){
        result.innerHTML = "Enter Postine Number";
        return false;
    }else if (dollar==0){
        result.innerHTML = "Enter Number Rather Than Zero";
        return false;
    }else{
        result.innerHTML = dollar *50 + "Egyption Pound";
        return false;
    }
}
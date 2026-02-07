function doAdd(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=first+second;
    if (result<0){
        document.getElementById("output").style.color="red";

    } else {
        document.getElementById("output").style.color="black";

    }
    document.getElementById("output").innerHTML=String(result);

}

function doSub(){
   let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=first-second;
    if (result<0){
        document.getElementById("output").style.color="red";

    } else {
        document.getElementById("output").style.color="black";

    }
    document.getElementById("output").innerHTML=String(result);

}

function doMul(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=first*second;
    if (result<0){
        document.getElementById("output").style.color="red";

    } else {
        document.getElementById("output").style.color="black";

    }
    document.getElementById("output").innerHTML=String(result);

}


function doDiv(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result=first/second;
    if (result<0){
        document.getElementById("output").style.color="red";

    } else {
        document.getElementById("output").style.color="black";

    }
    document.getElementById("output").innerHTML=String(result);

}

function doPow(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let result = 1;
    for(let i =0; i<second;i++){
        result*=first; 
    }
    
    if (result<0){
        document.getElementById("output").style.color="red";

    } else {
        document.getElementById("output").style.color="black";

    }
    document.getElementById("output").innerHTML=String(result);

}

function doClear(){
    
    document.getElementById("first").value="";
    document.getElementById("second").value="";
    document.getElementById("first").value="";
    document.getElementById("output").innerHTML="";
   

}
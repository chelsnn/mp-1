function doAdd(){
    let first=document.getElementById("first").value;
    let second=document.getElementById("second").value;
    let ans=first+second;
    if (ans<0){
        document.getElementById("output").style.color="red";

    } else {
        document.getElementById("output").style.color="black";

    }
    document.getElementById("output").innerHTML=String(ans);

}
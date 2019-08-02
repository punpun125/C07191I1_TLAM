let Username= prompt("who's there");
if (Username=='Admin'){
    let pass= prompt("password",'');
    if (pass=='TheMaster'){
        alert('welcome!');}
    else if (pass== ""){
        alert("canceled")}
    else{
        alert("wrong password")
    }
}
else if (Username == ""){
    alert("canceled")}
else{
    alert("I don't know you")
}
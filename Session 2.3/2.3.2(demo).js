function Cong(){
    let A1 = parseInt(document.getElementById("Q").value) + parseInt(document.getElementById("Q2").value);
    document.getElementById("Result").innerHTML= "Result : " +A1
}
function Tru(){
    let A2 = parseInt(document.getElementById("Q").value) - parseInt(document.getElementById("Q2").value);
    document.getElementById("Result").innerHTML= "Result : " +A2
}
function Nhan(){
    let A3 = parseInt(document.getElementById("Q").value) * parseInt(document.getElementById("Q2").value);
    document.getElementById("Result").innerHTML= "Result : " +A3
}
function Chia(){
    let A4 = parseInt(document.getElementById("Q").value) / parseInt(document.getElementById("Q2").value);
    document.getElementById("Result").innerHTML= "Result : " +A4
}
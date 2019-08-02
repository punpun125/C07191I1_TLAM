function moneyout(){
    let F = parseInt(document.getElementById("X").value) * parseInt(document.getElementById("A").value) / parseInt(document.getElementById("B").value);
    let D = F.toFixed(2);
    let bluecolor= "Result "+D;
    let outputmsg= bluecolor.fontcolor("blue");
    document.getElementById("Outputmoney").innerHTML = outputmsg;
}
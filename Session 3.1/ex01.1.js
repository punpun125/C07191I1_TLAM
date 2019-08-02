function checktext(){
    let A = document.getElementById("answer").value;
    let B = "EMCAScript";
    if (A == B)
        document.getElementById("rslt").innerHTML = "Right!";
    else document.getElementById("rslt").innerHTML = "Didn't know? EMCAScript!"
}
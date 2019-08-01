function tinhnamnhuan() {
    let year = parseInt(document.getElementById("inpt").value);
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                document.getElementById("showmsg").innerHTML = year + " la nam nhuan";
            } else {
                document.getElementById("showmsg").innerHTML = year + " khong phai nam nhuan";
            }
        } else {
            document.getElementById("showmsg").innerHTML = year + " la nam nhuan";
        }
    } else {
        document.getElementById("showmsg").innerHTML = year + " khong phai nam nhuan";
    }
}

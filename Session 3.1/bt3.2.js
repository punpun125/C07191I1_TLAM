function daysofmonth() {
    let day = parseInt(document.getElementById("month").value);
    switch (day) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("Displayresult").innerHTML = "Thang " + day + " co 31 ngay";
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("Displayresult").innerHTML = "Thang " + day + " co 31 ngay";
        break;
        case 2:
            document.getElementById("Displayresult").innerHTML = "Thang " + day + " co 28 hoac 29 ngay";

    }
}
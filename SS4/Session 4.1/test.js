function SNT() {


    let gioihan = parseInt(document.getElementById("number").value);

    let n = 0;
    let count = 1;
    do {
        flag = true;
        if (n < 2) {
            flag = false; // neu n < 2 ko la so nguyen to
        } else {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) { // neu = 0 khong la so nguyen to
                    flag = false;
                    break; // dung vong lap, quay lai n -> de lam lai
                }
            }
        }
        if (flag == true) {
            document.write(n + " ");
            count += 1; // so nguyen to can tim
        }
        n++;
    }
    while (count <= gioihan);

}
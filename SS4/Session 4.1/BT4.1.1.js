let text="<table style='border: 1px solid;width: 100%;text-align: right'>";
for (let x = 1;x<10;x++){
    text+="<tr>";
    for (let y = 2;y<10;y++){
        let math = x*y;
        text +="<td style='border: 1px solid'>"+x+ "x" + y + "=" + math + "  </td>";
    }
    text+="</tr>"
}
text+="</table>";
document.getElementById("demo").innerHTML = text;
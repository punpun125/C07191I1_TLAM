let image3=document.getElementById("img3");
let image1=document.getElementById("img1");
let image2=document.getElementById("img2");
function changeimgfirst(){
    if(image1.src.match("CM.jpg")){
        image1.src="DK.jpg";
    }
    else if (image1.src.match("Lina.jpg")) {
        image1.src="CM.jpg";
    }
    else{
        image1.src="Lina.jpg";
    }
}
function changeimgsecond(){
    if(image2.src.match("CM2.jpg")){
        image2.src="DK2.jpg"}
    else if( image2.src.match("Lina2.jpg")){
        image2.src="CM2.jpg"
    }
    else{
        image2.src="Lina2.jpg"
    }
}
function changeimgthrid(){
    if(image3.src.match("CM3.jpg")){
        image3.src="DK3.jpg"
    }
    else if(image3.src.match("Lina3.jpg")){
        image3.src="CM3.jpg"
    }
    else{
        image3.src="Lina3.jpg"
    }
}

    document.getElementById("hello").innerHTML="bingo";
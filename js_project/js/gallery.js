/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log(previewPic.alt);
    console.log(previewPic.src);
    document.getElementById("image").innerHTML = previewPic.alt;
    document.querySelector("#image").style.backgroundImage = `url(${previewPic.src})`;
     
}
   
function unDo(){
    document.querySelector("#image").style.width = "575px";
    document.querySelector("#image").style.height = "650px";
    document.querySelector("#image").style.lineHeight = "650px";
    document.querySelector("#image").style.border = "5px solid black";
    document.querySelector("#image").style.margin = "0 auto";
    document.querySelector("#image").style.backgroundColor = "#8e68ff";
    document.querySelector("#image").style.backgroundImage = "url('')";
    document.querySelector("#image").style.backgroundRepeat = "no-repeat";
    document.querySelector("#image").style.color = "#FFFFFF";
    document.querySelector("#image").style.textAlign = "center";
    document.querySelector("#image").style.backgroundSize = "100%";
    document.querySelector("#image").style.marginBottom = "25px";
    document.querySelector("#image").style.fontSize = "150%";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";      
}
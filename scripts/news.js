// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let data=JSON.parse(localStorage.getItem("news"))||[];

data.forEach((el) => {
    let container=document.getElementById("detailed_news");
    container.innerHTML=null;
    let div=document.createElement("div");
    let img=document.createElement("img");
    let h3=document.createElement("h3");
    let p=document.createElement("p");
    img.src=el.urlToImage;
    p.innerText=el.description;
    h3.innerText=el.title;
    
    
    div.append(img,h3,p);
    container.append(div);
});




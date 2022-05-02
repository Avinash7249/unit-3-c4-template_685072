// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" 
//so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



let arr=[];


let data=JSON.parse(localStorage.getItem("data"))||[];
    data.map(function(el){
        let container= document.getElementById("results");
            //container.innerHTML=null
        let div=document.createElement("div");
        let img=document.createElement("img");
        let h3=document.createElement("h3");
        let p=document.createElement("p");
        img.src=el.urlToImage;
        p.innerText=el.description;
        h3.innerText=el.title;
        
        h3.addEventListener("click",function(){
            store(el)
        })
        div.append(img,h3,p);
        container.append(div);
    });


    function store(el){
        arr.push(el);
        
        
        localStorage.setItem("news",JSON.stringify(arr));
        window.location.href="news.html";
        
        }



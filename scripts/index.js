// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so
// that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

// let arr=[];
let searchImages= async(value)=>{
    try{
       
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        let data=await res.json();
       // console.log(data)
       return data;
     }catch(err){
         console.log(err)
     }
};

let append=(data,container)=>{
    data.forEach((el) => {
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

};
function store(el){
arr.push(el);


localStorage.setItem("news",JSON.stringify(arr));
window.location.href="news.html";

}

let search=(e)=>{
    if(e.key=="Enter"){
        let value= document.getElementById("search_input").value;
        
        searchImages(value).then((data)=>{
            console.log(data);
            localStorage.setItem("data",JSON.stringify(data.articles));
            window.location.href="search.html"; 
            // let container= document.getElementById("results");
            // container.innerHTML=null
            // append(data.articles,container)
        });
    }
};

document.getElementById("search_input").addEventListener("keydown",search);
 


///////https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

let searchImages1= async(v)=>{
    try{
let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${v}`
        );
        let data=await res.json();
       // console.log(data)
       return data;
     }catch(err){
         console.log(err)
     }
};

let sidebar=document.getElementById("sidebar").children;

function cSearch(){
    console.log(this.id);
    if(this.id==null){
        this.id="in"
        searchImages1(this.id).then((data)=>{
            console.log(data);
           let container= document.getElementById("results");
                container.innerHTML=null
                append(data.articles,container)
        });
    }
    searchImages1(this.id).then((data)=>{
        console.log(data);
       let container= document.getElementById("results");
            container.innerHTML=null
            append(data.articles,container)
    });
}
for(let el of sidebar){
    el.addEventListener("click",cSearch);
}
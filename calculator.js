let keys=document.querySelectorAll(".input>div");
let bag="";
for(let i=0;i<keys.length;i++)
{
    keys[i].addEventListener("click",mycal);
}
function mycal(){

    let x=event.target.innerText;
    if(x=="C")
    { bag="";
     document.querySelector(".show").innerText=""; 
    }
    else if(x=="=")
    {
     document.querySelector(".show").innerText=eval(bag); 
    }
    else
    {
     bag=bag+x;
    
    document.querySelector(".show").innerText=bag;
    }
  
}
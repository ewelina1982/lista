const li = document.querySelectorAll("li");
//console.log(li);
const button = document.querySelector("button");
let size = 10;

const grow = function(){
//    li.forEach(function(item){
//        item.style.fontSize  = size + "px";
//        item.style.display = "block";
//        size++
//    })
    for (let i =0; i<li.length; i++){
        li[i].style.fontSize  = size + "px";
       li[i].style.display = "block";
       size++
        
    }
}


button.addEventListener("click", grow);
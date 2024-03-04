let nav = document.querySelector("nav");
let ham = document.querySelector(".ham");
let lll = 1;

ham.addEventListener("click",function(){

  if(lll==1){
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
    lll = 0
  }
  else {
    nav.style.visibility = "hidden";
    nav.style.opacity = 0;
    lll = 1
  }

})

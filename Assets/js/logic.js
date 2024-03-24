
const currentPage=document.getElementById('inputForm');
const switchButton= document.getElementById('switchPage');
const  lightSwitch= document.getElementById('lightSwitch');
const colorMode= document.querySelectorAll('[data-mode]');



function changeLocation(){
  
    if (currentPage.getAttribute('id')=="inputForm")
    {
       window.location.href = "blog.html";
       return;
    }
    else
    {   
        window.location.href="index.html";
        return;
    }
}

function lightAndDark(x){
    if (x.dataset.mode=="light"){
        x.dataset.mode="dark";
    }
    else{
        x.dataset.mode="light";
    }
}

lightSwitch.addEventListener("click",function(){
for (let index = 0; index < colorMode.length; index++) {
    
    lightAndDark(colorMode[index]);
}

});
switchButton.addEventListener("click",changeLocation);
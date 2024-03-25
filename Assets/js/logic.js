
const currentPage=document.getElementById('inputForm');
const switchButton= document.getElementById('switchPage');
const  lightSwitch= document.getElementById('lightSwitch');
const colorMode= document.querySelectorAll('[data-mode]');
const soLunaFish= document.getElementById('lunarSolarFish');

const sunFish="Assets/Images/Sunfish.png";
const moonFish= "Assets/Images/Moonfish.png";
const sunIcon="Assets/Images/CourageSun.jpg";
const moonIcon="Assets/Images/FriendshipMoon.jpg";


fishSwap();

if(localStorage.getItem('lights')==null){
    localStorage.setItem('lights',"light");
}

if(colorMode[0].dataset.mode!=localStorage.getItem('lights')){
    for (let index = 0; index < colorMode.length; index++) {
         lightAndDark(colorMode[index]);
    }
    localStorage.setItem('lights', colorMode[0].dataset.mode);
   fishSwap();
}

function fishSwap(){
    if(soLunaFish.dataset.mode=="light"){
        soLunaFish.src=sunFish;
        lightSwitch.firstElementChild.src=sunIcon;
   
    }
    else{
        soLunaFish.src=moonFish;
         lightSwitch.firstElementChild.src=moonIcon;
    }
}


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
    if (x.dataset != undefined)
    {
    if (x.dataset.mode=="light"){
        x.dataset.mode="dark";
    }
    else{
        x.dataset.mode="light";
    }
    localStorage.setItem('lights', colorMode[0].dataset.mode);
}
}

lightSwitch.addEventListener("click",function(){
for (let index = 0; index < colorMode.length; index++) {
    
    lightAndDark(colorMode[index]);
}
    fishSwap();
});
switchButton.addEventListener("click",changeLocation);
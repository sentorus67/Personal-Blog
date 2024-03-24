currentPage=document.getElementById('blogView');
switchButton= document.getElementById('switchPage');
lights=document.getElementById('lightSwitch');



function changeLocation(){
   
    if (currentPage.getAttribute('id')=="inputForm")
    {
        //alert("The page attempted to change.");
       window.location.href = "blog.html";
    }
    else
    {   //alert("the id is incorrect");
        window.location.href="index.html";
    }
}

lights.addEventListener("click",console.log(localStorage.getItem('post')));

switchButton.addEventListener("click",changeLocation);


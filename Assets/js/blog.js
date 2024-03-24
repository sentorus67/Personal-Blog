currentPage=document.getElementById('blogView');
switchButton= document.getElementById('switchPage');



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


switchButton.addEventListener("click",changeLocation);


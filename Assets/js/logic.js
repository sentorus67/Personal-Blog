
let currentPage=document.getElementById('inputForm');
let switchButton= document.getElementById('switchPage');

 function changeLocation(){
  
    if (currentPage.getAttribute('id')=="inputForm")
    {
        //alert("The page attempted to change.");
       window.location.href = "blog.html";
       return;
    }
    else
    {   //alert("the id is incorrect");
        window.location.href="index.html";
        return;
    }
}

switchButton.addEventListener("click",changeLocation);
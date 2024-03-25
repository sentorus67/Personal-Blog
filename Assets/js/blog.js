currentPage=document.getElementById('blogView');
switchButton= document.getElementById('switchPage');
lights=document.getElementById('lightSwitch');
const bodyjunction=document.getElementById('placeOfViewing')
 let colorMode= document.querySelectorAll('[data-mode]');
// ---------------------------------------------------

//----------------------------------------------------------------
submittedPost=JSON.parse(localStorage.getItem('post'));

if(localStorage.getItem('lights')==null){
    localStorage.setItem('lights',"light");
}

if(colorMode[0].dataset.mode!=localStorage.getItem('lights')){
    for (let index = 0; index < colorMode.length; index++) {
         lightAndDark(colorMode[index]);
    }
    localStorage.setItem('lights', colorMode[0].dataset.mode);
   
}


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

 function displaySubmission(x){
    const postBody= document.createElement('section');
    const postHeader=document.createElement('header');
    const postAside=document.createElement('aside');
    const postDiv=document.createElement('div')

    const placeTitle=document.createElement('h2');
    const placeUserN=document.createElement('h3');
    const placeContent=document.createElement('p');

    placeTitle.textContent=x.postTitle;
    placeUserN.textContent=x.postName;
    placeContent.textContent=x.postComment;

    bodyjunction.appendChild(postBody);
    postBody.setAttribute("data-mode",localStorage.getItem('lights'));
    postBody.appendChild(postHeader);
 
    postBody.appendChild(postAside);
    postBody.appendChild(postDiv);

    postHeader.appendChild(placeTitle);
    postAside.appendChild(placeUserN);
    postDiv.appendChild(placeContent);
}


for (let index = 0; index < submittedPost.length; index++) {
    displaySubmission(submittedPost[index]);
}

function lightAndDark(x){
    colorMode= document.querySelectorAll('[data-mode]');
    if (x.dataset != undefined){
    if (x.dataset.mode=="light"){
        x.dataset.mode="dark";
    }
    else{
        x.dataset.mode="light";
    }
  localStorage.setItem('lights',colorMode[0].dataset.mode);
    }
}

lightSwitch.addEventListener("click",function(){
    for (let index = 0; index < colorMode.length; index++) {
        
        lightAndDark(colorMode[index]);
    }

});

lights.addEventListener("click",lightAndDark);
switchButton.addEventListener("click",changeLocation);


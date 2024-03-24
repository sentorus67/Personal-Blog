currentPage=document.getElementById('blogView');
switchButton= document.getElementById('switchPage');
lights=document.getElementById('lightSwitch');
const bodyjunction=document.getElementById('placeOfViewing')
// ---------------------------------------------------

//----------------------------------------------------------------
submittedPost=JSON.parse(localStorage.getItem('post'));


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

lights.addEventListener("click",console.log(localStorage.getItem('post')));

switchButton.addEventListener("click",changeLocation);


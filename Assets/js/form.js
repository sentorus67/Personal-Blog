const submitButton=document.getElementById('submitButton');

let username=document.getElementById('username');
let title= document.getElementById('title');
let comment= document.getElementById('comment');

let submittedPost=[];

if(localStorage.getItem!= null){
    submittedPost=JSON.parse(localStorage.getItem('post'));
    console.log((submittedPost));
}

function createPost(){
    if( username.value.trim()!="" && title.value.trim()!="" && comment.value.trim()!="" ){
        let post=
        {
            postName: username.value ,
            postTitle: title.value ,
            postComment: comment.value,
        }
        submittedPost.push(post);
        localStorage.setItem('post',JSON.stringify(submittedPost));
        changeLocation();
    }
    else{
        alert("Post cannot be submitted one or more sections are blank!")
    }
}

if(submitButton !=null)
{
submitButton.addEventListener("click",createPost);
}

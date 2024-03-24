const submitButton=document.getElementById('submitButton');

let username=document.getElementById('username');
let title= document.getElementById('title');
let comment= document.getElementById('comment');

let submittedPost=[];

function createPost(){
    if( username.value.trim()!="" && title.value.trim()!="" && comment.value.trim()!="" ){
        let post=
        {
            postName: username.value ,
            postTitle: title.value ,
            postComment: comment.value,
        }
        submittedPost.push(post);
        console.log(submittedPost);
        localStorage.setItem('post',JSON.stringify(submittedPost));
    }
    else{
        alert("Post cannot be submitted one or more sections are blank!")
    }

}

if(submitButton !=null)
{
submitButton.addEventListener("click",createPost);
}

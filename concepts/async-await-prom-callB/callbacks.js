var posts =[
    { title:"Title1", post:"post1" },
    { title:"Title2", post:"post2" }

];

function getPost(callback){
    callback({title:"Title3", post:"post3"});//Callback otherway around

    setTimeout(()=>{
        let output = `
        
        `;
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },2000)
}

const createPost = function(post) { 
    setTimeout(() => {
        posts.push(post);
    }, 3000);
 }


// getPost();
// createPost({title:"Title3", post:"post3"});


//we gave set timeoout for both get post and createpost 
//createpost has 3000 and getpost has 2000
//currently getpost is executing first. we want post to execute only after create post
//no matter what 

                //passing callback
getPost(createPost);  


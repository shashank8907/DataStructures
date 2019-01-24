var posts =[
    { title:"Title1", post:"post1" },
    { title:"Title2", post:"post2" }

];

function getPost(){
    setTimeout(()=>{
        let output = `
        
        `;
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },2000)
}

function createPost(post) { 
    setTimeout(() => {
        post.push(post);
    }, 1000);
 }

createPost({title:"Title3", post:"post3"});

getPost();

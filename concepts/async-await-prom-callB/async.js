//Async  is a neat way of handeling the promises
//we basically make a function async and just add await keyword in front of every promise we add


var posts = [{
    title: "Title1",
    post: "post1"
},
{
    title: "Title2",
    post: "post2"
}

];

function getPost() {
setTimeout(() => {
    let output = `
    
    `;
    posts.forEach(post => {
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
}, 2000)
}

function createPost(post) {
return new Promise((resolve, reject) => {

    setTimeout(() => {
        
        posts.push(post);   

        const error = true;

        if(error){
            resolve();
        }else{
            reject("I wanted it to be an error");
        }
    }, 3000);
});
}

// createPost({title: "Title3",post: "post3"});
// getPost();

//Make createpost return promise and only after relolving that we execute getpost

async function init(){
    await createPost({title: "Title3",post: "post3"});//Now this function behaves as normal JS function
     getPost();// Then we directly call this one
}

init();
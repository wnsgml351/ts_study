/**
 * 프로미스
 */



const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20)
        reject("실패")
    }, 3000);
});


promise.then((response) => {
    console.log(response * 10)
})

promise.catch((err) => {
    if(typeof(err) === "string") {
        console.log(err);
    }
})



interface Post {
    id: number;
    title : string;
    content : string;
}

function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 내용"
            });
        }, 3000);
    });
}

const postRequest = fetchPost();
postRequest.then((post) => {
    post.id
})

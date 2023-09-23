/**
 * 인덱스드 엑세스 타입
 */

type PostList {
    title: string;
    content: string;
    author : {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
}


const post: PostList[0] = {
    title: "테스트",
    content: "테스트 내용",
    author: {
        id: 1,
        name: "테스트",
        age: 10
    }
}
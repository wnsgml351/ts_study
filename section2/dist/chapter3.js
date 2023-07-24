// object
let user = {
    id: 1,
    name: "test",
};
// ? 선택적 프로펄티를 하면 id 가 없어도 객체 선언 가능
user = {
    name: "홍길동",
};
let config = {
    apiKey: "aaaaaa",
};
export {};
// readonly로 허면 수정할 수 없습니다.
// config.apiKey = "abcd";

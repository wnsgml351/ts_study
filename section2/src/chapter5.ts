// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

const user1 = {
    name: "이아무개",
    role: Role.ADMIN,
};

const user2 = {
    name: "테스트",
    role: Role.USER,
};

const user3 = {
    name: "홍길동",
    role: Role.GUEST,
};

console.log(user1, user2, user3);

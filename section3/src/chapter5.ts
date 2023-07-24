/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "test",
    profile: {
        nicname: "nic name 1",
    },
    urls: ["http://www.naver.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(parameter = "hello") {
    return "hello";
}

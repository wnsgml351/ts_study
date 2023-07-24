/**
 * 1. 합집합 - Union 타입
 */

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    lang: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    lang: "",
};

let union3: Union1 = {
    name: "",
    color: "",
    lang: "",
};

// let union4: Union1 = {
//     name: "",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    lang: "",
};

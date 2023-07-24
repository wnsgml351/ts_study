/**
 * 인터페이스의 확장
 */

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
};

interface Cat extends Animal {
    isScartch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

// 여러개를 받을수도 있음
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScartch: true,
};

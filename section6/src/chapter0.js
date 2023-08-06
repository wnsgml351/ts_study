/**
 * 클래스
 */

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log("공부함");
    }

    introduce() {
        console.log(`헬로 ${this.name}`);
    }
}

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming() {
        console.log(`프로그래밍 스킬 : ${this.favoriteSkill}`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// const studentA = new Student("테스트", "A", 30);
// console.log(studentA);
// studentA.study();
// studentA.introduce();

const studentDeveloperA = new StudentDeveloper(
    "테스트1",
    "B",
    30,
    "type script"
);
console.log(studentDeveloperA);
studentDeveloperA.study();
studentDeveloperA.programming();

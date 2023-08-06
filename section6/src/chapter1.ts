/**
 * 타입스크립트의 클래스
 */

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    offcieNumber: number;

    constructor(
        name: string,
        age: number,
        position: string,
        offcieNumber: number
    ) {
        super(name, age, position);
        this.offcieNumber = offcieNumber;
    }
}

const employeeA = new Employee("테스트", 30, "개발자");
console.log(employeeA);

/**
 * 접근 제어자
 */

class Employee {
    // 필드
    // private name: string;
    // protected age: number;
    // public position: string;

    constructor(
        private name: string,
        protected age: number,
        public position: string
    ) {
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
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

    // 메서드
    func() {
        // this.name = "aaa";
        this.age = 31;
    }
}

const employeeA = new Employee("테스트", 30, "developer");
// employeeA.name = "홍길동";
// employeeA.age = 31;
employeeA.position = "student";
console.log(employeeA);

/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: String
    ) {}

    move() {
        console.log(`${this.moveSpeed} 만큼 이동!`);
    }
}

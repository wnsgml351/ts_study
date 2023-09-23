/**
 * 제네릭 인터페이스
 */

interface KeyPair<K,V> {
    key : K,
    value : V;
}

let keyPair : KeyPair<string, number> = {
    key : "test",
    value: 0
}

let keyPair1 : KeyPair<boolean, string[]> = {
    key: true,
    value : ["aaaa", "bbbb"]
}


/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
    [key :string]: number;
}

let numberMap1 : NumberMap = {
    key: 123,
    key2: -1
}

interface Map<V> {
    [key: string]: V
}

let stringMap : Map<string> = {
    key : "aaa"
}

let booleanMap : Map<boolean> = {
    key : true
}

type Map2<V> = {
    [key:string]: V
}

let stringMap2 : Map2<string> = {
    key: "aaaa"
}
console.log('Hello JavaScript');
// 주석은 다음고 ㅏ같이 가능합니다.

// 길게 작성했을 경우에도 동일하게
// 우리는 ctrl + /를 이용하여
// 주석 처리가 됩니다.

// 변수와 상수
let darkModeOn = true;
const Pi = 3.14159;



// 사칙 연산
// console.log(1 + 2);
// console.log(3 - num1);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 나머지 연산자

// ()를 통한 우선순위 지정 연산
// const num3 = (num1 + num2) * 10;
// console.log(num3);

// const str01 = 'Hello';
// const str02 = "월드!";

// console.log(typeof str01);  // string
// console.log(typeof '1');  // string

// let str03 = str01 + " World";
// console.log(str03);
// console.log(str02);

// str03 = str03 + " ❤️"
// console.log(str03);

// undefined / null
let x;
console.log(x, typeof x); // undefined 'undefined'
// typeof가 반환하는 값은 문자열
x = 1;
console.log(x); // 1

x = null;
console.log(x, typeof x);
// null 'object'
// null의 타입은 object로 반환 -> 초기 설계 부실 문제

// 연산자 관련 수업
const a = 1;
const b = 1;
const c = "1";
const d = 2;

console.log(a == b, a != b);  // true / false
console.log(a == c, a != c);  // true / false
console.log(a == d, a != d);  // false / true

console.log (a === c, a !== c); // false / true

console.log(a > b, a >= b, a <= b); // false true true

console.log(a > d, a < d, a <= d);  // false true true

const str01 = "ABC";
const str02 = "DEF";

console.log(str01 === "ABC"); // true
console.log(str01 > str02); // false
// 문자열의 경우에 알파벳 순서상 뒤에 오는 것을 더 크다고 판단

// 삼항연산자 관련 수업
// let bool01 = true;
// let result = bool01 ? "참" : "거짓";
// console.log(result) // 참

// let num05 = 28;
// console.log(
//   "num05는 03의 배수" + (num05 % 3 === 0 ? "입니다." : "아닙니다.")
// );
// 와 같은 방식으로도 작성할 수 있습니다.

// 객체 관련 수업
const person01 = {
  name: "김철수",
  age: 25,
  address: "부산광역시 연제구",
  married: false
};

console.log(typeof person01); // object
console.log(person01);
/*
원래 얘로 찍혀야 함.
{name: '김철수', age: 25, address: '부산광역시 연제구', barried: false}

console.log로 찍고, copy object 사용했더니 key에 "" 붙어있는 걸로 보아 JSON 형태로 표기됨.
{
  "name": "김철수",
  "age": 25,
  "address": "부산광역시 연제구",
  "married": false
};
*/

// 객체 접근 방법 -> Java와 동일
console.log(person01.name)
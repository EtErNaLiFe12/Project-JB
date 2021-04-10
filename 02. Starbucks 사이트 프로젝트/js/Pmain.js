/* 
//문자 데이터

let myName = "HEROPY";
let email = 'thesecon@gmail.com';
let hello = `Hello ${myName}?!`; //${} 문자보간

console.log(myName);
console.log(email);
console.log(hello);

//숫자 데이터

let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean 데이터(불린 데이터) - true, false 두 가지 값밖에 없는 논리 데이터.

let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

//Undefined 데이터 - 값이 할당되지 않은 상태

let undef;
let obj = {abc: 123}; //'속성:값'으로 이루어진것이 객체 데이터

console.log(undef);
console.log(obj.abc); //obj.abc는 말그대로 obj 안으로 들어가서 abc라는 속성으로 접근을 해서 값을 찾는 것
console.log(obj.xyz);

//Null 데이터 - 어떤 값이 의도적으로 비어있음을 의미

let empty = null;

console.log(empty);

//Object(객체 데이터) - 여러 데이터를 Key:Value 형태로 저장합니다. { }

let user = {
  //Key: Value,
  name: 'HEROPY',
  age: 85,
  isValid: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// Array(배열 데이터) - 여러 데이터를 순차적으로 저장합니다. []

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]); 
console.log(fruits[2]);
*/

/*
let myName = "HEROPY";
let email = 'wnsqja8888@naver.com'
let hello = `Hello ${myName}?!`;
console.log(myName);
console.log(email);
console.log(hello); */

/*
let user = {
  name: 'HEROPY',
  age: 85
};

console.log(user);
console.log(user.age);
console.log(user.name); */

//변수 - 데이터를 저장하고 참조(사용)하는 데이터의 이름 let/const 사용
//재사용 가능!
//변수 선언!

/* 
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); */

/* 
// 값(데이터)의 재할당 가능! (let - 변수값)
let aa = 12;
console.log(aa);

aa = 999;
console.log(aa);

//값(데이터)의 재할당 불가능! (const - 상수값)
const bb = 12;
console.log(bb);

bb = 111;
console.log(bb);
*/

/*
//예약어 - 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어(Reserved Word)

let this = 'Hello!';
let if = 123;
let break = true;
*/

/*
//함수 - 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)

function helloFunc() {
  //실행 코드
  console.log(1234);
}

//함수 호출
helloFunc();

function returnFunc() {
  return 1232223; // 함수 내에서 반환 return이란 밖으로 내보내는 것
}

let a = returnFunc();

console.log(a);

//함수 선언!

function sum(a, b) { // a와 b는 매개변수(Parameters)
  return a + b;
}

//재사용!

let ab = sum(1, 2); // 1과 2는 인수(Arguments)
let bc = sum(7, 12);
let cd = sum(2,4);

console.log(ab, bc, cd);

//기명(이름이 있는) 함수
//함수 선언!
function hello() {
  console.log('Hello~');
}

//익명(이름이 없는) 함수
//함수 표현! 
let world = function () {
  console.log('World~');
}

//함수 호출!
hello();
world();

//객체 데이터
const heropy = {
  name: 'HEROPY',
  age: 85,
  //메소드(Method) - 객체 데이터 내부에 있는 속성 부분에 함수 데이터가 들어있는 경우
  getName: function () {
    return this.name;
  }
};

const hisName = heropy.getName();
console.log(hisName);
// 혹은
console.log(heropy.getName());
*/

/*
//조건문 - 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문 (if, else)

let isShow = false;
let checked = true;

if (isShow) {
  console.log('Show!');
}
if (checked) {
  console.log('Checked!');
}

// -----------------------------------

if(isShow) {
  console.log('Show!');
} else {
  console.log('Hide?');
}
*/

// ----------------------------------------------------------------------------------------------------

//DOM API - JAVASCRIPT에서 HTML을 제어할때 사용하는 명령 

/*
let boxEl = document.querySelector('.box'); //html상에 선언된 클래스를 boxEL에 할당하는 구문

console.log(boxEl);

boxEl.addEventListener('click', function () {
  console.log('click!!');
  boxEl.classList.add('active');
  console.log(boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});
*/

/*
//HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

//인수(Arguments)를 추가 가능!
boxEl.addEventListener(1, 2);

// 1-이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 2-핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function() {
  console.log('Click~!');
}); 
*/

/*
//요소의 클래스 정보 객체 활용!

boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); */

/*
//HTML 요소(Element) 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

//찾은 요소들 반복해서 함수 실행!
//익명 함수를 인수로 추가!
boxEls.forEach(function () {});

//첫 번째 매개변수(boxEl): 반복 중인 요소
//두 번째 매개변수(index): 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});

// 출력!
boxEls.forEach (function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl)
}) 

//---------------------------------------------

const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`)
  console.log(index, boxEl );
}); */

/*
const boxEl = document.querySelector('.box'); // box 클래스가 여러개일 경우 제일 먼저 찾아지는 부분을 반환함

//Getter, 값을 얻는 용도
console.log(boxEl.textContent);  // textContent - 문자 데이터

//Setter, 값을 지정하는 용도
boxEl.textContent = 'HEROPY!!';
console.log(boxEl.textContent); */

//------------------------------------------------------------------------------------
/*
//메소드 체이닝(Method Chaining)

const a = 'Hello~';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환.
// reverse: 배열을 뒤집기.
// join: 배열을 인수 기준으로 문자로 병합해 반환.

const b = a.split('').reverse().join(''); // 메소드 체이닝

console.log(a);
console.log(b);*/

//------------------------------------------------------------------------------------

// theQuickBrownFox - camel 표기법

let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[1]);


const hello = function () {
  console.log('hello');
}

hello();
 
let cham = true;
let gugeet = false;

if(cham) {
  console.log(`${cham} 입니다.`);
} else {
  console.log(`${gugeet} 입니다.`)
}

const a = document.querySelector('.box');
console.log(a.textContent);
a.addEventListener('click', function () {
  console.log('Hello~');
});

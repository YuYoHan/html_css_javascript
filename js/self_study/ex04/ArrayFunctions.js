/*
*   Array Functions
* */
let iveMembers = [
  '안유진',
  '장원영',
  '리즈',
  '레이',
  '이서',
  '가을'
]
console.log(iveMembers)
// push()
// 마지막 배열에 추가
iveMembers.push('코드');
console.log(iveMembers);
console.log("----------------------")
// pop()
// 맨 마지막 데이터를 삭제하고 삭제한 값을 출력
console.log(iveMembers.pop())
console.log(iveMembers)
console.log("----------------------")
// shift()
// 첫번째 데이터를 삭제하고 삭제한 값을 출력
console.log(iveMembers.shift())
console.log(iveMembers)
console.log("----------------------")
// unshift()
// 맨 처음에 데이터를 추가
console.log(iveMembers.unshift('안유진'))
console.log(iveMembers)
console.log("----------------------")
// splice()
console.log(iveMembers.splice(0, 2))
console.log("----------------------")

iveMembers = [
  '안유진',
  '장원영',
  '리즈',
  '레이',
  '이서',
  '가을'
]
console.log(iveMembers);
// concat()
console.log(iveMembers.concat('카리나'));
// slice()
console.log(iveMembers.slice(0, 3))
console.log("--------------------")

// spread operator
let ive2 = [
  ...iveMembers
]
console.log(ive2) // [ '안유진', '장원영', '리즈', '레이', '이서', '가을' ]
console.log('-------------------------')

let ive3 = [
  iveMembers
]
console.log(ive3) // [ [ '안유진', '장원영', '리즈', '레이', '이서', '가을' ] ]
console.log("---------------------------")
let ive4 = iveMembers;
console.log(ive4);
console.log(iveMembers == ive4) // true
console.log(iveMembers === ive4) // true
console.log([
  ...iveMembers
] === iveMembers) // false ← false가 나오는 이유는 원본을 수정하는 것이 아니라 새로운 메모리 공간에 만들기 때문에

let num = [
  1,
  2,
  3,
  4,
  5
]
console.log(num)
// sort()
num.sort((a, b) => {
  return a > b ? 1 : -1;
})
console.log(num)
console.log("--------------------------------------------")
// map()
// 아이브 멤버 이름 그자체가 반환
console.log(iveMembers.map((x) => x));
// 아이브 멤버들 앞에 아이브 : 안유진 이런식으로 붙음
console.log(iveMembers.map((x) => `아이브 : ${x}`));
// 조건을 줘서 안유진에만 아이브를 붙여줌
console.log(iveMembers.map((x) => {
  if(x === '안유진') {
    return `아이브 : ${x}`
  } else {
    return x;
  }
}))

// filter()
console.log(num.filter((x) => true))

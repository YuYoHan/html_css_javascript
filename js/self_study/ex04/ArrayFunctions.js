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

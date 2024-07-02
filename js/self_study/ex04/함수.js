function multiply(x, y) {
  console.log(x * y)
}
function multiply2(x, y = 10) {
  console.log(x * y)
}
multiply(3, 4)
// y값을 이미 지정했기 때문에 y값을 주지 않아도 된다.
multiply2(2)

function multiply3(x, y) {
  return x * y;
}
let result = multiply3(7, 7);
console.log(result)

// Arrow 함수
const multply4 = (x, y) => {
  return x * y;
}
console.log(multply4(3, 4))

const multiply5 = (x, y) => x * y;
console.log(multiply5(4, 5));

const multiply6 = (x) => x * 2;
console.log(multiply6(2))

const multiply7 = x => y => z => `x: ${x} y: ${y} z: ${z}`
console.log(multiply7(2)(5)(3))

function multiply8(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`
    }
  }
}
console.log(multiply8(2)(5)(3))

console.log(typeof multiply7())
console.log(multiply7() instanceof Object);



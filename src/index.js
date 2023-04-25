/**
 * 分割代入
 */

const myProfile = {
  name: "kitatani",
  age: 28
};

const message = `i am ${myProfile.name} and age is ${myProfile.age}`
console.log(message)

//オブジェクトの場合、中と一致していないと取得できない？
const {name , age} = myProfile;
const message2 = `i am ${name} and age is ${age}`
console.log(message2)

const myProfile = ["kitatani", 27];

const message3 = `i am ${myProfile[0]} and age is ${myProfile[1]}`
console.log(message3)

// 配列は順番に渡される
const [name, age] = myProfile
const message4 = `i am ${name} and age is ${age}`
console.log(message4)

// /**
//  * 分割代入
//  */

// // const myProfile = {
// //   name: "kitatani",
// //   age: 28
// // };

// // const message = `i am ${myProfile.name} and age is ${myProfile.age}`
// // console.log(message)

// //オブジェクトの場合、中と一致していないと取得できない？
// // const {name , age} = myProfile;
// // const message2 = `i am ${name} and age is ${age}`
// // console.log(message2)

// const myProfile = ["kitatani", 27];

// const message3 = `i am ${myProfile[0]} and age is ${myProfile[1]}`
// console.log(message3)

// // 配列は順番に渡される
// const [name, age] = myProfile
// const message4 = `i am ${name} and age is ${age}`
// console.log(message4)

// /**
//  * デフォルト値
// */
// // nameの引数なしの場合、undefinedになる
// const sayHello = (name = "guest") => console.log(`hello, ${name}`)
// sayHello('Kitatani')

// /**
//  * スプレッド構文
//  */
// const arry1 = [1,2];
// console.log(arry1)
// // 配列の中身を順序よく処理してくれる
// console.log(...arry1)

// const sum = (num1, num2) => console.log(num1 + num2)
// sum(arry1[0], arry1[1])
// sum(...arry1)

// const arry2 = [1,2,3,4,5];
// const [num1, num2, ...arry3] = arry2
// console.log(arry3)

// const arry4 = [10,20];
// const arry5 = [30, 40]
// const arry6 = [...arry4];
// console.log(arry6)

// const arry7 = [...arry4, ...arry5]
// console.log(arry7)


// /**
//  * map, filterを使った配列の処理
//  */

// const nameArry = ["田中","山田","北谷"];
// // for (let i = 0; i < nameArry.length; i++) {
// //   console.log(nameArry[i]);
// // }

// // const nameArry2 = nameArry.map((name) => {
// //   return name;
// // })
// // console.log(nameArry2)

// nameArry.map((name, index)=> console.log(index+1, name))

// const numArry = [1,2,3,4];
// const newArry = numArry.filter((num) => {
//   return num % 2 === 1
// })

// console.log(newArry)

// const newNameArray = nameArry.map((name)=> {
//   if(name === "北谷") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })

// console.log(newNameArray)

// /**
//  * 三項演算子
//  */
// const val1 = 1 > 0 ? "trueです" : "falseです"
// console.log(val1)

// const num = 1300;
// console.log(num.toLocaleString())
// const formattedNum = typeof num == 'number' ? num.toLocaleString() : "数値を入力してください。"
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "over 100" : "under 100"
// }

// console.log(checkSum(20, 90))

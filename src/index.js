/**
 * const、let等の変数宣言
 */

// var var1 = "varの変数";
// console.log(var1);

/* var変数は上書き可能 */
// var1 = "var変数を上書き";
// console.log(var1);

// var変数は再宣言が可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// letは上書きが可能
// var2 = "let変数を上書き";
// console.log(var2);

// letは再宣言
// let var2 = "let変数を再宣言";

// const var3 = "const変数";
// console.log(var3);

// const変数は上書き不可
// var3 = "const変数を上書き";
// console.log(var3);

// const var3 = "const変数を再宣言";
// console.log(var3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "Kanon",
//   age: "20"
// };
// val4.name = "React";
// val4.address = "Shizuoka";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const var5 = ["Inu", "Neko"];
// var5[0] = "dog";
// /pushで値を追加
// var5.push("monkey");
// console.log(var5);

// オブジェクトや配列は定数[const]で宣言をしていても中身の変更が可能

/**
 * テンプレート文字列
 */

// const name = "React";
// const age = 20;

// 私の名前はReactです。年齢は20です。

// 従来の方法 (文字列と変数を結合する)
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// str string -- 文字列
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10,10));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Kanon",
//   age: 20
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["Kanon", 20];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("Kanon");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arry1 = [1, 2];
// console.log(arry1);
// console.log(...arry1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arry1[0], arry1[1]);
// sumFunc(...arry1);

// まとめる
// const arry2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arry3] = arry2;
// console.log(arry3);

// 配列のコピー・結合
// const arry4 = [10, 20];
// const arry5 = [30, 40];

// const arry6 = [...arry4];
// arry6[0] = 100;
// console.log(arry6);
// console.log(arry4);

// const arry7 = [...arry4, ...arry5];
// console.log(arry7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "かのん"];
// 従来の場合 (for文を使った配列の処理)
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "かのん") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1900;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// };
// console.log(checkSum(80, 70));

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額が未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

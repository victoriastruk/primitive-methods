//1
let str = "Freshcode Training Center JavaScript Developer";
let reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

//2
function getIntPart(num) {
  return Math.floor(num);
}
console.log(getIntPart(4.7));
console.log(getIntPart(-2.5));

//3
const username = prompt("Введіть ваше ім'я");
alert(username.toUpperCase());

//4
function formatDate(dateStr) {
  const [year, day, month] = dateStr.split("-");
  return `${day}.${month}.${year}`;
}

const date = "2021-22-09";
console.log(formatDate(date));

//5
function isEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(isEqual("pApA", "papa"));
console.log(isEqual("qwerty", "QWErty"));
console.log(isEqual("aaa", "EEE"));

//6
function throwError() {
  throw new Error("Error!");
}

try {
  throwError();
} catch (error) {
  console.error(error.message);
}

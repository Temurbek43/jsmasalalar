// let a = 3;
// let b = 4;
// let c = 1;
// let diskirminat = Math.pow(b, 2) - 4 * a * c;
// let x1, x2;
// if (diskirminat > 0) {
//   x1 = (-b - Math.sqrt(diskirminat)) / (2 * a);
//   x2 = (-b + Math.sqrt(diskirminat)) / (2 * a);
//   console.log(x1);
//   console.log(x2);
// } else if ((diskirminat = 0)) {
//   x1 = -b / (2 * a);
//   console.log(x1);
// } else {
//   console.log("no");
// }

// for (let i = 1; i >= 0; i++) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let n = 2;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += ((-1) ** (i - 1) * Math.sin(i ** 2)) / 2 ** i;
// }
// console.log(sum);

// let x = 0;
// let y = 2;
// let z = -2;
// if (x > 0) {
//   x = x * x;
// }
// if (y > 0) {
//   y = y * y;
// }
// if (z > 0) {
//   z = z * z;
// }
// console.log(x, y, z);

// let n = 2;
// let i = 1;
// let sum = 0;
// while (i <= n) {
//   sum = sum + Math.sin(i) / 2 ** i;
//   i++;
// }
// console.log(sum);

// let n = 2;
// let i = 1;
// let sum = 0;
// while (i <= n) {
//   sum = sum + (-1) ** (i - 1) * (Math.sin(i ** i) / 2 ** i);
//   i++;
// }
// console.log(sum);
// let n = 1;
// let x = 1;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i / x ** (2 * i);
// }
// console.log(sum);

// let a = 3;
// let b = 3;
// let c = 4;

// let sum = 0;
// for (let h = a; h <= c; h += 3) {
//   sum =
//     sum +
//     ((a * h + b) / (b ** 2 + Math.cos(h) ** 2)) ** 1.0 / 3.0 -
//     Math.sin(h ** 2) / (a * b);
// }
// console.log(sum);

// let a = 1.0;

// let sum = 0;
// for (let h = 0; h <= 10; h += 1 / 2) {
//   sum = sum + a * Math.cos(h) - Math.sin(h ** 2);
// }
// console.log(sum);

function faqtarial(n) {
  let sm = 1;
  for (let i = 1; i <= n; i++) {
    sm *= i;
  }
  return sm;
}

let n = 2;
let x = 1;

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += x ** i / faqtarial(i);
}
console.log(sum);

// function declaratins
salom();
function salom() {
  console.log("Assalomu aleykum");
}
// function expression
let alik = function () {
  console.log("Va aleykum assalom");
};
alik();

// arrow function
const hi = () => {
  console.log("hi");
};
hi();

function birthDate(currY, age) {
  if (typeof age == "number" && typeof currY == "number") {
    console.log(currY - age);
  } else {
    console.log("invalid data");
  }
}

birthDate(2026, 16);

let arifmetik = function (a, b, c) {
  console.log((a + b + c) / 3);
};
arifmetik(33, 28, 17);

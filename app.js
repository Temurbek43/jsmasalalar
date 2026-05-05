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

// function faqtarial(n) {
//   let sm = 1;
//   for (let i = 1; i <= n; i++) {
//     sm *= i;
//   }
//   return sm;
// }

// let n = 2;
// let x = 1;

// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += x ** i / faqtarial(i);
// }
// console.log(sum);

// // function declaratins
// salom();
// function salom() {
//   console.log("Assalomu aleykum");
// }
// // function expression
// let alik = function () {
//   console.log("Va aleykum assalom");
// };
// alik();

// // arrow function
// const hi = () => {
//   console.log("hi");
// };
// hi();

// function birthDate(currY, age) {
//   if (typeof age == "number" && typeof currY == "number") {
//     console.log(currY - age);
//   } else {
//     console.log("invalid data");
//   }
// }

// birthDate(2026, 16);

// let arifmetik = function (a, b, c) {
//   console.log((a + b + c) / 3);
// };
// arifmetik(33, 28, 17);

// let Arrow = (a) => {
//   if (0 < a) {
//     console.log("musbat");
//   }
//   if (a == 0) {
//     console.log("o ga teng");
//   }
//   if (0 > a) {
//     console.log("manfiy");
//   }
// };
// Arrow(-1);

// function daraja(a, b = 2) {
//   console.log(a ** b);
// }
// daraja(3, 4);
// daraja(3);
// (a, b = 2) => {
//   console.log(a ** b);
// };
// daraja(3, 4);
// daraja(3);

// function faqtarial(n) {
//   let sm = 1;
//   for (let i = 1; i <= n; i++) {
//     sm *= i;
//   }
//   return sm;
// }

// function juftyigindi(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i += 2) {
//     sum += i;
//   }
//   console.log(sum);
// }
// juftyigindi(10);

// let baholar = function (a, b, c) {
//   let arrage = (a + b + c) / 3;
//   if (arrage >= 80) {
//     console.log("Alo");
//   } else if (60 <= arrage < 80) {
//     console.log("Yaxshi");
//   } else {
//     console.log("Qoniqarsiz");
//   }
// };
// baholar(50, 60, 55);
// baholar(90, 80, 85);

// function toqsonlar(a, b) {
//   let count = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// toqsonlar(1, 10);

// localStorage.setItem("name", "Rajabboy");
// let oldim = localStorage.getItem("name");
// console.log(oldim);

// sessionStorage.setItem("salom", "alik");
// console.log(sessionStorage.getItem("salom"));

// let btn = document.querySelector(".btn");
// let todo = document.querySelector(".todo");

// btn.addEventListener("click", () => {
//   let todo_id = document.querySelector(".todo_id").value;
//   fetch(`https://jsonplaceholder.typicode.com/todos/${todo_id}`).then((res) =>
//     res
//       .json()
//       .then((data) => (todo.textContent = data.title))
//       .catch((err) => console.log(err)),
//   );
// });

let box = document.querySelector(".box");
fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
  res
    .json()
    .then((posts) => {
      posts.forEach((tit) => {
        let p = document.createElement("p");
        p.textContent = tit.title;
        box.appendChild(p);
      });
    })
    .catch((err) => console.log(err)),
);

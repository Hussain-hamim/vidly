//2. promises:
///// hold the eventual result of an asynchronous operation
// promise to give the result of an async op
//// promise state: pending, fulfilled, rejected

// const p = new Promise((resolve, reject) => {
//   // kick off some async work...
//   setTimeout(() => {
//     // resolve(1);
//     reject(new Error("message"));
//   }, 2000);
// });

// p.then((result) => console.log("result", result)).catch((error) =>
//   console.log("error", error.message)
// );

const p = Promise.resolve({ id: 1 });
const p2 = Promise.reject(new Error("reason for rejection..."));

p.then((result) => console.log(result));
p2.catch((result) => console.log(result.message));

//2. promises:
///// hold the eventual result of an asynchronous operation
// promise to give the result of an async op
//// promise state: pending, fulfilled, rejected

const p = new Promise((resolve, reject) => {
  // kick off some async work...
  setTimeout(() => {
    // resolve(1);
    reject(new Error("message"));
  }, 2000);
});

p.then((result) => console.log("result", result)).catch((error) =>
  console.log("error", error.message)
);

///// promise methods:
const p1 = Promise.resolve({ id: 1 });
const p2 = Promise.reject(new Error("reason for rejection..."));

p1.then((result) => console.log(result));
p2.catch((result) => console.log(result.message));

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("async operation 1...");
    resolve(1);
  }, 2000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async operation 2...");
    resolve(2);
    // reject(new Error("promise reject error"));
  }, 2000);
});

Promise.race([p3, p4])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log("error", error));

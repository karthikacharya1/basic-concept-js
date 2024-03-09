let meeting = true;
let prom = new Promise(function (resolve, reject) {
  if (meeting) {
    resolve("meeting sucessfull");
  } else {
    reject("meeting unsucessfull");
  }
})
  .catch(function (err) {
    console.log("oop unsuccessful");
  })
  .then(function (value) {
    console.log(value);
  });
console.log(prom);

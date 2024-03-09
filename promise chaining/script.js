let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("resolve after 2sec");
    resolve(56);
  }, 2000);
});

p1.then(function (value) {
  console.log(value);
  let p2 = new promise(function (resolve, reject) {
    return p2;
    setTimeout(() => {
      console.log("we are done");
    }, 2000);
  });
});

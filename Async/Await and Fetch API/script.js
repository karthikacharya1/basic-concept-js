// function getData() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve(499);
//     }, 3000);
//   });
// }

//settle means resolve of reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully

// through fetch API

async function getData() {
  // let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // let x = fetch("https://jsonplaceholder.typicode.com/todos/1");

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();

  return data;
}
async function main() {
  console.log("Loading modules");

  console.log("Do somthing else");

  console.log("Load Data");
  let data = getData();
  console.log(data);
  console.log("process Data");
}
main();

//post request

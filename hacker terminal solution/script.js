const randomDelay = function () {
  return new Promise(function (resolve, reject) {
    var randamSec = Math.floor(Math.random() * 7 + 1);

    setTimeout(() => {
      resolve();
    }, randamSec * 1000);
  });
};
const addItem = async function (i) {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = i;
  document.body.append(div);
};

async function main() {
  var t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 100);
  let arr = [
    "Initializing hacking",
    "Reading your file",
    "Password file detecting",
    "Sending all password files to server",
    "Cleaning up",
  ];

  for (const i of arr) {
    await addItem(i);
  }
  await randomDelay();
  clearInterval(t);
}
main();

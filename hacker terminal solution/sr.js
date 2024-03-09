const addItem = async function (i) {
  await randomDelay();
  let h1 = document.createElement("h1");
  h1.innerHTML = i;
  document.body.append(h1);
};

const randomDelay = function () {
  return new Promise(function (resolve, reject) {
    let randomSec = Math.floor(Math.random() * 7 + 1);
    setTimeout(() => {
      resolve();
    }, randomSec * 1000);
  });
};

const t = setInterval(() => {
  var last = document.body.getElementsByTagName("h1");
  last = last[last.length - 1];
  if (last.innerHTML.endsWith("...")) {
    last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
  } else {
    last.innerHTML = last.innerHTML + ".";
  }
}, 400);

async function main() {
  let arr = [
    "Initalizing data and processing hacking",
    "Adding files to terminal",
    "Removing all things terminal",
    "Mailing all HR about your problems",
    "Hiring the good thing",
  ];

  for (const i of arr) {
    await addItem(i);
  }
  await randomDelay();
  clearInterval(t);
}
main();

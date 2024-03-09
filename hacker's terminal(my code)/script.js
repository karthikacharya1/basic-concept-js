//randomly delay of 1 to 7 seconds

//initializing hacking ...
//reading your file...
//password file detecting...
//Sending all password files to server...
//cleaning up...

//three to bling

async function first_text() {
  let randomSec1 = Math.floor(Math.random() * 7 + 1);
  let randOrg1 = randomSec1 * 1000;
  const t1 = document.querySelector(".text1");
  t1.setAttribute("style", "display:none");
  setTimeout(() => {
    t1.removeAttribute("style", "display:contents");
    t1.innerHTML = "initializing hacking ";
  }, `${randOrg1}`);
}
async function second_text() {
  let randomSec2 = Math.floor(Math.random() * 7 + 1);
  let randOrg2 = randomSec2 * 1000;
  const t2 = document.querySelector(".text2");
  t2.setAttribute("style", "display:none");
  setTimeout(() => {
    t2.innerHTML = "reading your file";
    t2.removeAttribute("style", "display:contents");
  }, `${randOrg2}`);
}

async function third_text() {
  let randomSec3 = Math.floor(Math.random() * 7 + 1);
  let randOrg3 = randomSec3 * 1000;
  const t3 = document.querySelector(".text3");
  t3.setAttribute("style", "display:none");
  setTimeout(() => {
    t3.innerHTML = "password file detecting";
    t3.removeAttribute("style", "display:contents");
  }, `${randOrg3}`);
}

async function fourth_text() {
  let randomSec4 = Math.floor(Math.random() * 7 + 1);
  let randOrg4 = randomSec4 * 1000;
  const t4 = document.querySelector(".text4");
  t4.setAttribute("style", "display:none");
  setTimeout(() => {
    t4.innerHTML = "Sending all password files to server";
    t4.removeAttribute("style", "display:contents");
  }, `${randOrg4}`);
}

async function fifth_text() {
  let randomSec5 = Math.floor(Math.random() * 7 + 1);
  let randOrg5 = randomSec5 * 1000;
  const t5 = document.querySelector(".text5");
  t5.setAttribute("style", "display:none");
  setTimeout(() => {
    t5.innerHTML = "Cleaning Up";
    t5.removeAttribute("style", "display:contents");
  }, `${randOrg5}`);
}

async function main() {
  let fir_text = await first_text();
  let sec_text = await second_text();
  let thir_text = await third_text();
  let four_text = await fourth_text();
  let fiv_text = await fifth_text();
}
main();

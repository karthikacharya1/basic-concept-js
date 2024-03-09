var array = [
  "Ram",
  "Hary",
  "guru",
  "Mahindr",
  "AmarNathesh",
  "RaguveerDesai",
  "pari",
  "Naidffdffdfdfd",
];

const Gryffinddor = [];
var Hufflepuff = [];
var RavenClaw = [];
var Stytherin = [];

for (const i of array) {
  if (i.length < 6) {
    Gryffinddor.push(i);
  } else if (i.length < 8) {
    Hufflepuff.push(i);
  } else if (i.length < 12) {
    RavenClaw.push(i);
  } else {
    Stytherin.push(i);
  }
}

console.log(Gryffinddor);
console.log(Hufflepuff);
console.log(RavenClaw);
console.log(Stytherin);

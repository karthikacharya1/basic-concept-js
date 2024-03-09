var str = "Hello";
var mirroStr = "";
for (var i = str.length - 1; i >= 0; i--) {
  mirroStr += str[i];
}
console.log(mirroStr);

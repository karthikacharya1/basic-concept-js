
let a=prompt("Enter number 1")
let c=prompt("enter operation")
let b=prompt("Enter number 2")

let random=Math.random()

console.log(random)

let obj={
'+':'-',
'*':'+',
'-':'/',
'/':'**',
}


if(random>0.2)
{
alert(`Result is :${eval(`${a} ${c} ${b}`)}`)
}
else{
  c=obj[c]
  alert(`Result is :${eval(`${a} ${c} ${b}`)}`)

}
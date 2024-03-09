let prom1=new Promise((resolve,reject)=>{
  let a=Math.random();
  if (a<0.5){
    reject("got rejected")
  }
  else{
  setTimeout(()=>{
    console.log("yes im done")
    resolve("haryy")



  },3000
  );
  }
})
prom1.then((a)=>{
console.log(a)

}).catch((err)=>{
console.log("you lost")
}
)


let pr2=new Promise((resolve,reject)=>{
  let a=Math.random();
  if (a<0.5){
    reject("got rejected2")
  }
  else{
  setTimeout(()=>{
    console.log("yes im done2")
    resolve("haryy2")



  },1000
  );
  }
})
let p3=Promise.any([prom1,pr2])
p3.then((a)=>{
  console.log(a)
}).catch(err=>{
  console.log(err)
})
const creaCard=document.querySelector('.createCard')
const contai=document.querySelector('.container')
let tit=document.querySelector('.title')
let chnam=document.querySelector('.cName')
let vie=document.querySelector('.views')
const vidleng=document.querySelector('.length')
const Mon=document.querySelector('.Month')

//Function 
function createCard(title,cName,views,Months,duration,thumnail){
creaCard.setAttribute('style',`background-image:url(${thumnail})`)
tit.innerHTML=`${title}`
chnam.innerHTML=`${cName}`
vidleng.innerHTML=`${duration}`
Mon.innerHTML=`${Months} Months ago`
//obtaining range of integer(3 digit if above 100000)
let ToStr=views.toString()
let Split_str=ToStr.slice(0,3)
let Int_convert3=parseInt(Split_str)

//obtaining range of integer(1 digit is less than 10000)
let split_str2=ToStr.slice(0,1)
let Int_convert1=parseInt(split_str2)

//obtaining range of integer(2 digit is more tha 10000)
let split_str3=ToStr.slice(0,2)
let Int_convert2=parseInt(split_str3)

const res=(views<1000)?views:(views<10000)?Int_convert1+"k":(views<100000)?Int_convert2+"k":(views<1000000)?Int_convert3+"k":(views>=1000000)?Int_convert1+"M":None;
vie.innerHTML=`  &nbsp${ res} views`

}
//calling function
createCard("Become a Full Stack Web Developer in 2024 | Learn What Matter","Tech With Karthik",5300000,10,"12:40","https://tse3.mm.bing.net/th?id=OVP.6g4f3xgzdArbBgquz5DD4gHgFo&pid=Api&h=360&w=480&c=7&rs=1")
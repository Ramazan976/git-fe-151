let bookPrice = 750;
let bookAmount = 14;

console.log(bookPrice + bookAmount)


let kmhSpeed = 75;
let msSpeed = 75;

let mperSecond = (msSpeed * 1000) / 3600;

console.log(mperSecond)


let birthdate = prompt("dogum tarixinizi daxil edin");

let birthday = "05/12/2002".split("/");

//birthday [0]-gun, birthday [1]-ay,  birthday [2]-il// 
let birthtime = new Date(birthday[2], birthday[1], -1, birthday[0]);

let currentday = new Date();
//tarixler arasinkdaki ferqi hesablayir//
let difference = currentday - birthtime;

let dayAmount = Math.floor(difference / (1000 * 60 * 60 * 24));

alert("  siz bu gune qeder -" + dayAmount + "- gun yasamisiniz ");



var num = 20**5
console.log(num)

num = 20 / 3
console.log(num)



var firstName = "Alan"
var lastName = "Turing"

var fullName = (`Sizin adınız" [${firstName}] [${lastName}] "Tanışlığımıza çox şadam!`);
console.log(fullName)



var firstName = "John"
var lastName = "Patrick"

var message = `Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}`;
console.log(message)


var fullName ="Murad Orucov"
 
var str = fullName.slice(0)
console.log(fullName.length);



var firstName ="John"
var lastName ="Patrick"

var fullName =`${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;

console.log(fullName)



var fullName = prompt("Tam adınızı bu formatda daxil edin <<AD SOYAD>>")

var [firstName, lastName]= fullName.split(" ")

var reverseName = `${lastName} ${firstName}`

console.log(reverseName)


var userName = prompt("Adınızı daxil edin")

var userName = `Salam,[${userName}]!`  

console.log(userName)


var a = 10

a += 10

console.log(a)//10+10


a -= 10

console.log(a)//20-10//


a *= 10

console.log(a)//10*10//


a /= 10

console.log(a)//100/10//


let number = prompt("bir eded daxil edin")
let number1 = prompt("yeni bir eded daxil edin")


var b = 20
b += 20

console.log(b)


b -= 20
console.log(b)


b *= 20
console.log(b)


b /= 20
console.log(b)



var c = 30
c += 30

console.log(c)


c -= 30
console.log(c)


c *= 30
console.log(c)


c /= 30
console.log(c)


let num1 = 12345;
let num2 = 98765;

let product = 12345 * 98765;

let productStr = product.toString();

let sixthDigit = productStr.length >= 6 ? productStr[5] :"neticede 6-ci reqem yoxdur";

var a = "" + 1 + 0

console.log (a)

var a = "" - 1 + 0

console.log(a)

var a = "true"-false
 
console.log(a)

var a = 6 / "3"

console.log(a)

var a = 4 + 5 + "px"

console.log(a)

var a = "$" + 4 +5

console.log(a)

var a = "4" - 2

console.log(a)

"4px" -2 + "px"

console.log(a)

var a = 7 / 0

console.log(a)

var a = "-9" + 5

console.log(a)

var a = "-9" - 5

console.log(a)

var a = null + 1

console.log(a)

var a = undefined + 1 
 
console.log(a)


let input = prompt("Zehmet olmasa dord reqemli eded daxil edin .")

if (input.length === 4 && !isNaN(input)) {
    
    let sum = input.split("").reduce((total,digit) => total + parseInt( digit), 0 )

    console.log(`daxil edilmis reqemlerin cemini toplayir ${sum}`)     

} 
 else {
    console.log(`dord reqemli eded daxil edin`)
}



var fullName = prompt("Soyadinizi ve Adinizi daxil edin")

var nameparts = fullName.split(' ')

var firstName = nameparts[nameparts.length -1];

console.log(`Salam, ${firstName}!`)


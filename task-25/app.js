const h1elem = document.getElementsByTagName("h1")[0];
console.log(h1elem);




let elem = document.querySelector("h1");
elem.remove();



let Tag = document.querySelector("ul");
let newli = document.createElement("li");

newli.textContent = "TITAN RTX";
Tag.appendChild(newli);



let text = document.getElementsByClassName("primary");
for (let i = 0; i < text.length; i++) [
    text[i].style.color = "red"
]


let primary = document.querySelectorAll (`.primary`);

primary.forEach(element => {
    console.log('%c' + element.textContent, 'color: blue; font-size: 20px;')
    
});




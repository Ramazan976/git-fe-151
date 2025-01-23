let id = prompt('enter product id:');

switch (id) {
    
    case '1':
        alert("Available 10 pcs."); 
        break;

    case '2': 
        alert("Available 256 pcs.");
        break;

    case '3': 
        alert("Available 53 pcs.");
        break;

    case '4': 
        alert("There are 3 available.");
        break;

    default: 
    alert("Out of stock");
}





function Datedescription() {

    let dateinput = prompt("Xahis olunur tarixi «2009.12.19» bu formatda daxil edin.");
    
    let regex = /^\d{4}\.\d{2}\.\d{2}/$;
    if (!regex.test(dateinput)) {
        alert("yanlis deyer daxil edilib");
        return;
    }
    


    try {

        let [year, month, day ] = dateinput.split('.').map(Number);


        let monthsName = [ "January", "February", "March", "April", "May", "June", "July", 
            "August", "September", "October", "November", "December"
        ];

    

    if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
        alert(`${day} ${monthsName[month -1]}  ${year}- cu il`);
    }   
    else {
        alert("yanlis deyer daxil edilib.")
    }
    } catch (error) {
        alert("yanlis deyer daxil edilib")

    }
}

Datedescription();



let month = Array(`"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"`);

let monthnumber = parseInt(prompt("ayin nomresini daxil edin (1-12):"));

if ( monthnumber >= 1  &&  monthnumber <= 12) {

    console.log(`ay:${month[monthnumber -1]}`);
}

else(
    console.log("xahis olun4ur 1 ile 12 arasinda bir reqem daxil edin")
)


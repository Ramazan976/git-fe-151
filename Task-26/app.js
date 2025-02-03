let user = {
    name:"Jake",
    gender:"Man",
    birthday:"05.12.2002",
}


user.age = 23 //yas elave etmek//
delete user.birthday//dogum tarixini silmek//
console.log(user.age);





let person = {
    name: "Serxan",
    age: 30,
    retirementAge: 65,

    setAge: function(newAge) {
        this.age = newAge;
    },


getYearsBeforeRetirement: function() {
  let yearsLeft = this.retirementAge - this.age;
    return yearsLeft > 0 ? yearsLeft : 0;
    }
};

console.log(person.getYearsBeforeRetirement());

person.setAge(40);
console.log(person.getYearsBeforeRetirement());

person.setAge(50);
console.log(person.getYearsBeforeRetirement());




let client = {
    fullName: "Fuad Abbasov",
    creditLimit: 3000,
    balans: 2000,
    precentOfMiniPayment: 15,

    getBalance: function() {
      if (this.balans >= 0) {
        return `Balansiniz ${this.balans}`
      }
      else {
        return `Borcunuz ${this.balans}`
      }
    },

    
};
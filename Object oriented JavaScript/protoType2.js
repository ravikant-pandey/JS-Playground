// let myName = " rahul         "
// console.log(myName.trim().length)
// console.log(myName.length)
// // Challeneg
// console.log(myName.trueLength)

let array = ['raj', 'rahul', 'ram', 'ravi', 'raju'];
let power = {
    raj: 'running',
    rahul: 'topper',
    ram: 'god',
    ravi: 'backbencher',
    raju: 'nothing',
    getRajPower: function () {
        console.log(`Raj power is: ${this.raj}`)
    }
}

Object.prototype.pandey = function()
{
    console.log("Pandey is present in all Object")
}
const string = "This is a String"
// array.pandey()
// power.pandey()
// string.pandey()

// Check if i give somting in array and string etc. so vo chiz object ko milti h ya nhi
Array.prototype.heyPandey = function()
{
    console.log("Hi! Pandey")
}
// So it is not posible not sharing our propeties and method
// power.heyPandey();
array.heyPandey();
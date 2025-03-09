// Now solve the problem which is face in 'protoType2.js' with help of inhertance.js

let name = "                   Ram                 "

String.prototype.trueLength = function()
{
    // console.log(this) // this = jis 
    // console.log(typeof(this))
    // console.log(this.name)
    console.log(`True Length is: ${this.trim().length}`)
}

name.trueLength()

let foo = (x) => 10 + x
console.log(foo(100))

// (function (msg1) {
//     let msg = "Hi sidhu."
//     console.log(msg + '\n' + msg1)
// })('Hw r U?')

let msg1 = () => {
    console.log("Lamda function invoked")
}
msg1()


let msg = ((m1) => {
    let m2 = "doing great"
    console.log(m1 + "\n" + m2)
})('Hi sandy')

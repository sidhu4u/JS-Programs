// for (let i = 1, j = 0, temp; j <= 20; temp = i, i = j, j = temp + i)
//     console.log(`i = ${i}, j = ${j}, temp = ${temp}`)

console.log('----------------------')
// // let fib = "";
// for (let i = 0, j = 1, temp; i <= 20; temp = j, j = i, i = temp + j)
//     // fib += i + " "
//     console.log(`temp = ${temp}, j = ${j}, temp+j==> fib (OR) i = ${i}`)
// // console.log(i + " ")

// console.log(fib)

// console.log('----------------------')
// for (let i = 0, j = 1, temp; i <= 20; temp = i + j, i = j, j = temp)
//     console.log(`i = ${i}, j = ${j}, temp = ${temp}`)
let fib = ""

for (let i = 0, j = 1, temp, cnt = 0; cnt < 5; temp = i + j, i = j, j = temp, cnt++)
    fib += i + " "
console.log(fib)


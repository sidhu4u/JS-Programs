const add = (n1, n2) => n1 + n2
console.log(add(10, 20))


const isEven = n => {
    if (n % 2 == 0)
        return `${n} is EVEN`
    else
        return `${n} is ODD`
}

console.log(isEven(50))
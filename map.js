const arrNames = ['sidhu', 'sanvi', 'dhana', 'sarvesh']

console.log(arrNames)
console.log('---------')
const names = arrNames.map((name, index) => {
    // console.log('inside arrow function')
    // console.log('index ' + ele + ', element ' + index)
    // console.log(name + ' ')
    return [index, name]
})
console.log(names)

console.log(arrNames.sort())//(a, b) => b - a))

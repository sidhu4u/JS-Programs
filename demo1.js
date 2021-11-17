var message = "hello sidhu"
console.log(message)

function test() {
    var num = 100
    console.log('value of num in test() ' + num)
    {
        console.log('Inner block begins')
        let num = 200
        console.log('value of num : ' + num)
    }
    console.log(num)
}

test()
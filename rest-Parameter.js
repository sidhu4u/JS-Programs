function fun(...para) {
    console.log(para.length)
    console.log(para)
}

fun()
fun(10)
fun(10, 20)
fun(10, 20, 30)
fun('a', 10, true, 10 > 20)
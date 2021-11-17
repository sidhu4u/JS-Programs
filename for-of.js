/*  
The for…of loop is used to iterate iterables instead of object literals.
Following is the syntax of ‘for…of’ loop.
for (variablename of object){
statement or block to execute
}
*/

for (let val of [10, 20, 30])
    console.log(val)
/* OUTPUT 
    10
    20
    30
*/

let arr = [10, 20, 30, 40]
for (let val of arr)
    console.log(val)

/* OUTPUT 
    10
    20
    30
    40
*/

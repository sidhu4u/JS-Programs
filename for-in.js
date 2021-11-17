/* The for...in loop is used to loop through an object's properties.
Following is the syntax of ‘for…in’ loop.
for (variablename in object)
{
statement or block to execute
}
In each iteration, one property from the object is assigned to the variable 
name and this loop continues till all the properties of the object are exhausted.  
*/

const obj = { a: 1, b: 2, c: 3 }

for (let prop in obj)
    console.log(prop) // property name(i.e key) 

for (let prop in obj)
    console.log(obj[prop]) // property value
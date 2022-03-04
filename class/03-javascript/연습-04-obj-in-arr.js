const classmates = [
    {name: "cjftn", age: 13, school: "ekfkawnlchemdgkrry"},
    {name: "dudgml", age: 8, school: "rjqnrchemdgkrry"},
    {name: "dudgml", age: 8, school: "rjqnrchemdgkrry"}
]
// undefined
classmates
// (3) [{…}, {…}, {…}]0: {name: 'cjftn', age: 13, school: 'ekfkawnlchemdgkrry'}1: {name: 'dudgml', age: 8, school: 'rjqnrchemdgkrry'}2: {name: 'dudgml', age: 8, school: 'rjqnrchemdgkrry'}length: 3[[Prototype]]: Array(0)
classmates.length
// 3
class[0]
// VM4709:1 Uncaught SyntaxError: Unexpected token '['
classmates[0]
// {name: 'cjftn', age: 13, school: 'ekfkawnlchemdgkrry'}
classmates[0].school
// 'ekfkawnlchemdgkrry'
classmates[0].age
// 13
classmates[0].age
// 13
classmates[3].age
// VM4810:1 Uncaught TypeError: Cannot read properties of undefined (reading 'age')
//     at <anonymous>:1:15
// (anonymous) @ VM4810:1
classmates[2].age
// 8
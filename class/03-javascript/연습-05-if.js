const profile = {
    name : "철수",
    age : 12,
    school : "람쥐초등학교"
}
// undefined
if(age.20) {
alert('성인입니다')
// VM1248:1 Uncaught SyntaxError: Unexpected number
if(age.20) {
alert('성인입니다')
}
// VM1277:1 Uncaught SyntaxError: Unexpected number
if(age.20) {
    alert('성인입니다')
}
// VM1322:1 Uncaught SyntaxError: Unexpected number
if(age>20) {
    alert('성인입니다')
}
VM1335:1 Uncaught ReferenceError: age is not defined
    at <anonymous>:1:1
(anonymous) @ VM1335:1
if(age > 20) {
    alert('성인입니다')
}
VM1350:1 Uncaught ReferenceError: age is not defined
    at <anonymous>:1:1
(anonymous) @ VM1350:1
if(age > 20) {
    alert('성인입니다')
    else('성인아닙니다')
}
VM1422:3 Uncaught SyntaxError: Unexpected token 'else'
if(profile.age > 20) {
    alert('성인입니다')
    else('성인아닙니다')
}
VM1466:3 Uncaught SyntaxError: Unexpected token 'else'
if(profile.age > 20) {
    alert('성인입니다')
}
undefined
if(profile.age > 20) {
    console.log('성인입니다')
}
undefined
if(profile.age > 20) {
    console.log('성인입니다')
}
else if(profile.age >= 8) {
    console.log('학생입니다')
}
else if {
    console.log('사람이세요")
                }

VM2630:7 Uncaught SyntaxError: Unexpected token '{'
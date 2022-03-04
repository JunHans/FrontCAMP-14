const classmates = ["철수", "영희"]
// undefined
(3)
// 3
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates.includes("영희")
// true
classmates.includes("맹구")
// false
classmates.push("맹구")
// 3
classmates
// (3) ['철수', '영희', '맹구']
classmates.includes("맹구")
// true
classmates.()
// VM736:1 Uncaught SyntaxError: Unexpected token '('
classmates.pop()
// '맹구'
classmates
// (2) ['철수', '영희']
classmates.length
// 2

// ------------------------------------------------------------------------


const dream = ["일", "사랑", "사랑", "일"]
// undefined

// ____.concat() = 두가지 배열을 합쳐준다.

developer.concat(dream)
// (9) ['열정', '개발능력', '카페인', '맹구', '훈이', '일', '사랑', '사랑', '일']
const pingu = ["핑가", "핑구"]
// undefined
dream.concat(pingu)
// (6) ['일', '사랑', '사랑', '일', '핑가', '핑구']
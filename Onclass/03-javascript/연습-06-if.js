let student = ["심윤주", "임준한", "핑구", "핑가"]
undefined
for(let i = 0; i < student.length; i++) {
    console.log(`환영합니다 ${student[i]} 님 안녕하세요?`)
}
VM4051:2 환영합니다 심윤주 님 안녕하세요?
VM4051:2 환영합니다 임준한 님 안녕하세요?
VM4051:2 환영합니다 핑구 님 안녕하세요?
VM4051:2 환영합니다 핑가 님 안녕하세요?
undefined
for(let i = 0; i < student.length; i++) {
    console.log(`환영합니다 프리캠프에 오신 ${student[i]} 님 안녕하세요?`)
}
VM4179:2 환영합니다 프리캠프에 오신 심윤주 님 안녕하세요?
VM4179:2 환영합니다 프리캠프에 오신 임준한 님 안녕하세요?
VM4179:2 환영합니다 프리캠프에 오신 핑구 님 안녕하세요?
VM4179:2 환영합니다 프리캠프에 오신 핑가 님 안녕하세요?
undefined
let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
undefined
for(let i = 0; i < persons.length; i++) {
    if(persons[i].age > 18) {
        console.log(persons[i].name + '님은 성인입니다')
    } else {
        console.log(persons[i].name + '님은 미성년자입니다')
    }
}
VM5040:5 철수님은 미성년자입니다
VM5040:3 영희님은 성인입니다
VM5040:5 도우너님은 미성년자입니다
VM5040:5 말포이님은 미성년자입니다
VM5040:5 도비님은 미성년자입니다
undefined
for(let i = 0; i < persons.length; i++) {
    if(persons[i].name + '말포이') {
        console.log('입닥쳐말포이')
    }
    
    if(persons[i].age > 18) {
        console.log(persons[i].name + '님은 성인입니다')
    } else {
        console.log(persons[i].name + '님은 미성년자입니다')
    }
}
VM5398:3 입닥쳐말포이
VM5398:9 철수님은 미성년자입니다
VM5398:3 입닥쳐말포이
VM5398:7 영희님은 성인입니다
VM5398:3 입닥쳐말포이
VM5398:9 도우너님은 미성년자입니다
VM5398:3 입닥쳐말포이
VM5398:9 말포이님은 미성년자입니다
VM5398:3 입닥쳐말포이
VM5398:9 도비님은 미성년자입니다
undefined
const fruits = [
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
    {number: 1, title: "레드향"},
];
undefined
const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"},
];
undefined
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].number + fruits[i].name)
    }
VM6302:3 Uncaught SyntaxError: Unexpected token '}'
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number" + "fruits[i].title)
                
VM6665:2 Uncaught SyntaxError: missing ) after argument list
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number" + "fruits[i].title)
                }
VM6695:2 Uncaught SyntaxError: missing ) after argument list
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number" + "fruits[i].title)
}
                
VM6785:2 Uncaught SyntaxError: missing ) after argument list
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number + fruits[i].title)
}
                
VM6800:2 1레드향
VM6800:2 2샤인머스켓
VM6800:2 3산청딸기
VM6800:2 4한라봉
VM6800:2 5사과
VM6800:2 6애플망고
VM6800:2 7딸기
VM6800:2 8천혜향
VM6800:2 9과일선물세트
VM6800:2 10귤
undefined
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number+" " + fruits[i].title)
                }
VM6830:2 1 레드향
VM6830:2 2 샤인머스켓
VM6830:2 3 산청딸기
VM6830:2 4 한라봉
VM6830:2 5 사과
VM6830:2 6 애플망고
VM6830:2 7 딸기
VM6830:2 8 천혜향
VM6830:2 9 과일선물세트
VM6830:2 10 귤
undefined

----------------------------------------------------------------------------------------------------------------------------------------------

const children = ["철수", "영희", "훈이"]
undefined
for(let i = 0; i < 3; i = i+1) {
    console.log(children[i]+" 안녕하세요")
}
VM3226:2 철수 안녕하세요
VM3226:2 영희 안녕하세요
VM3226:2 훈이 안녕하세요
undefined
for(let i = 0; i <= 3; i = i+1) {
    console.log(children[i]+" 안녕하세요")
}
VM3264:2 철수 안녕하세요
VM3264:2 영희 안녕하세요
VM3264:2 훈이 안녕하세요
VM3264:2 undefined 안녕하세요
undefined
for(let i = 0; i < children.length; i = i+1) {
    console.log(children[i]+" 안녕하세요")
}
VM3337:2 철수 안녕하세요
VM3337:2 영희 안녕하세요
VM3337:2 훈이 안녕하세요
undefined


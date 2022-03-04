const email = "codecamp@gmail.com"
undefined
email[0]
'c'
email.includes(@)
VM1926:1 Uncaught SyntaxError: Invalid or unexpected token
email.includes("@")
true
const email = "codecamp@gmail.com"
undefined
email.includes('@')
true
const email = 'codecamp@gmail.com'
undefined
email.includes('@')
true
email.split('@')
(2) ['codecamp', 'gmail.com']
email.split('@')[0]
'codecamp'
email.split('@')[1]
'gmail.com'
const usermail = email.split('@')[0]
undefined
usermail
'codecamp'
const company = email.split9'@0[1]
VM2305:1 Uncaught SyntaxError: Invalid or unexpected token
const company = email.split'@0[1]
VM2329:1 Uncaught SyntaxError: Invalid or unexpected token
const company = email.split'@'[1]
VM2342:1 Uncaught SyntaxError: Unexpected string
const company = email.split('@')[1]
// undefined
company
// 'gmail.com'
const maskingmail =[]
// undefined
usermail[0]
// 'c'
usermail[1]
// 'o'
maskingmail.push(usermail[0])
// 1
maskingmail
// ['c']
maskingmail.push(usermail[1])
// 2
maskingmail.push(usermail[2])
// 3
maskingmail.push(usermail[3])
// 4
maskingmail
// (4) ['c', 'o', 'd', 'e']
maskingmail.push('*')
// 5
maskingmail.push('*')
// 6
maskingmail.push('*')
// 7
maskingmail.push('*')
// 8
maskingmail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingmail.join('@')
// 'c@o@d@e@*@*@*@*'
maskingmail.join('-')
// 'c-o-d-e-*-*-*-*'
maskingmail.join('')
// 'code****'
maskingmail.join('')
// 'code****'
maskingmail.join('')+'@'+company
// 'code****@gmail.com'
const result = maskingmail.join(' ')+'@'+company
// undefined
const result = maskingmail.join('')+'@'+company
// undefined
result
// 'code****@gmail.com'
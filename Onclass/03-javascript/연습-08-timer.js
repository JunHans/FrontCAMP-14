let time = 10
undefined
setInterval(function(){
    if(time >= 0){
    console.log(time)
    time = time - 1
} ,1000)
VM2971:5 Uncaught SyntaxError: Unexpected token ','
setInterval(function(){
    if(time >= 0){
    console.log(time)
    time = time - 1
    }
} ,1000)
2
VM2984:3 10
VM2984:3 9
VM2984:3 8
VM2984:3 7
VM2984:3 6
VM2984:3 5
VM2984:3 4
VM2984:3 3
VM2984:3 2
VM2984:3 1
VM2984:3 0



-----------------------------------------------------------------------------------------
setInterval(function() {
    if(time >= 0) {
        const min = String(Math.floor( time / 60)).padStart(2,"0")
        const second = String(time % 60).padStart(2,"0")
        console.log(min + ":" + second)
        time = time - 1
    }
},1000)
------------------------------------------------------------------------------------------
let time = 180
undefined
setInterval(function() {
    if(time >= 0) {
        const min = String(Math.floor( time / 60)).padStart(2,"0")
        const second = String(time % 60).padStart(2,"0")
        console.log(min + ":" + second)
        time = time - 1
    }
},1000)

2
VM4934:5 03:00
VM4934:5 02:59
VM4934:5 02:58
VM4934:5 02:57
VM4934:5 02:56
VM4934:5 02:55
VM4934:5 02:54
VM4934:5 02:53
VM4934:5 02:52
VM4934:5 02:51
VM4934:5 02:50



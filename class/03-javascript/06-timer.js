let isStarted = false

function pressedBtn() {

    if(isStarted === false){
        isStarted = true;

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("auth").innerText = token

        //COMST는 상수라서 사용하면 안돼
        let time = 180;
        let timer = null;

        timer = setInterval(function(){
            if(time >= 0) {
                const min = String(Math.floor(time/60)).padStart(2, "0")
                const sec = String(time % 60).padStart(2, "0")
                document.getElementById("countdown").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true;
                isStarted = false;
                clearInterval(timer)
            }
        },1000)
    } else {
        alert("타이머가 이미 작동중입니다")
    }
}



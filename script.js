function startMusic(){
    let m = document.getElementById("bgmusic");
    if(m) m.play();
}

function check1(){
    let v = document.getElementById("a1").value.toLowerCase().trim();

    if(v === "happy new year"){   // CHANGE ANSWER
        document.getElementById("p1").classList.add("hidden");
        document.getElementById("p2").classList.remove("hidden");
    } else {
        document.getElementById("e1").innerText="Nope, try again.";
    }
}

function check2(){
    let v = document.getElementById("a2").value.trim();

    if(v === "😁"){   // CHANGE ANSWER
        document.getElementById("p2").classList.add("hidden");
        let f = document.getElementById("final");
        f.classList.remove("hidden");
        f.classList.add("show");
        startTyping();
    } else {
        document.getElementById("e2").innerText="Hmm wrong.";
    }
}

let text = "Love you yaar,I love you the most,For me everything is you only,without you i am nothong,I dont know yaar how to say and what to say,but one thing this keerthan is for u only,i will give u all the happiness and i will stay with u all the time,LOVE YOU❤️❤️😘 ";

let i=0;
function startTyping(){
    if(i<text.length){
        document.getElementById("msg").innerHTML += text.charAt(i);
        i++;
        setTimeout(startTyping,40);
    }
}
setInterval(createHeart, 500);

function createHeart(){
    let h = document.createElement("div");
    h.className = "heart";
    h.innerText = "❤️";
    h.style.left = Math.random()*100 + "vw";
    h.style.fontSize = (Math.random()*20 + 15) + "px";
    document.body.appendChild(h);

    setTimeout(()=>{ h.remove(); },6000);
}

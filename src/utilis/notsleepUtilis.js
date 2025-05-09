import axios from "axios";

let i = 1;

async function notSlepp() {
    console.log("oi")
}

async function cronJob(){
    setInterval(notSlepp, 600000)
}

export default cronJob
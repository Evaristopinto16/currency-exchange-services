import axios from "axios";

let i = 1;

async function notSlepp() {

    await axios.get("https://currency-exchange-services.onrender.com/api/v1/getcoin")
 
}

async function cronJob(){
    
    setInterval(notSlepp, 600000)
}

export default cronJob
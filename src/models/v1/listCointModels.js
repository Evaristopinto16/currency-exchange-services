async function listaMoedas() {
    return {
        coin: {
            first: {
                coin: "EURO",
                sigla: "eur"
            },
            second: {
                coin: "DOlar Americano",
                sigla: "usd"
            },
            third: {
                coin: "metical mocambicano", 
                sigla: "mzn"
            },
            fourth: {
                coin: "Rublo",
                sigla: "rub"
            },
            fifth: {
                coin: "Kwanza",
                sigla: "aoa"
            }
        }
    }
    
}

export default listaMoedas
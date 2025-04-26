


async function convesaoCambioUtilis(values) {

    const dataFinal = await taxaInformal(values)

    return dataFinal
    
}
  
async function parseToNumero(number){
    
    let parseNumber = ""
    let text 
    if(number.includes("AOA") === true){
        const dataNumber = number.split("AOA")[0];
        text = "AOA"
        parseNumber = dataNumber
    }
    if(number.includes("RUB")){
        text = "RUB"

        const dataNumber = number.split("RUB")[0]
        parseNumber = dataNumber 

    }
    parseNumber = await parseNumber.trim().replace(/\s+/g, '');
    return {
        parseNumber,
        coint: text
    }
}


async function taxaInformal(values) {

    let valueParse = await parseToNumero(values)  

    let coint = valueParse.coint

   
    valueParse = await  Number.parseInt(valueParse.parseNumber)
  let dataMin= valueParse + (valueParse * 0.17);
    let dataMax =valueParse+ (valueParse * 0.19);
    dataMin = Number(dataMin).toFixed(2)
    dataMax = Number(dataMax).toFixed(2)
    const response = {
        result: {
            compraMinima: valueParse + " " +coint,
            compraNormal: dataMin + " " +coint,
            compraMaxima: dataMax + " " +coint
        }
    }

    return response

    

}

 


export default convesaoCambioUtilis
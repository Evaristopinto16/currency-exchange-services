 const checkCoin = async(listaMoedas, data)=>{
   
    const encontrado = listaMoedas.find(item => item.sigla === data.fromCurrency || item.sigla === data.toCurrency );
if (!encontrado) {
  return {
            status: "false",
            message: "INVALID_ CURRENCY"
        }
}
    
}

export default checkCoin
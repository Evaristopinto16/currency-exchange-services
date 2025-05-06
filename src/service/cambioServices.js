import get from "axios";
import * as cheerio from "cheerio";
import taxa from "../utilis/conversaoCambioUtilis.js"
import URL from "../config/apiurlConfig.js"

import cotacoesPassadasUtilis from "../utilis/cotacoesPassadasUtilis.js";
 
 

const url = URL.url


async function cambioService(rub, aoa, valor) {
    
     
try {
    
 
    const {data} = await get(`${url}/${rub}-${aoa}/${valor}`);
     
  

    const $ = await cheerio.load(data);
   

    const dataConvesao  = await $("body > div.wrapper > div.content > div.page-content > div > div > div > div.conversion__value > div.conversion__value-text > h2 > span:nth-child(2)").text()
    const dataLastDate = await $("body > div.wrapper > div.content > div.page-content > div > div > div > div.conversion__links.pt-20.conversion__links--mob").text()
    let dataTable = await $("body > div.wrapper > div.content > div:nth-child(3) > div.container.container--big > div")
    let tabeleArray = await $('[class="table-blue__cell table-blue__cell--third"]').contents()
 
 
  const semana = await cotacoesPassadasUtilis.cotacoes(tabeleArray)
 

   // console.log()

/*a ideia é crawler os dados da tabela */
     aoa = aoa.toUpperCase()

    const values = await taxa(dataConvesao, aoa)
    
    const result = {
        status: "sucess",
        data: {
            valueCoint: valor +" "+ rub, 
            taxasInformal: values,
            atualizacao: dataLastDate 
        },

        cotacoespassadas: semana
       
    }

    return result

}catch (error) {

    
    console.log(error);

    return {
        status: false,
        data: "ocorreu um erro inesperado no servidor"
    }
    }
    
}


export default cambioService
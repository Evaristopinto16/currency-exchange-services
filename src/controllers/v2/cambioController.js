import cambioService from "../../service/v2/cambioServices.js";
import listaMoedas from "../../models/v2/listCointModels.js"; 

import checkCoin from "../../utilis/v2/checkCointUtilis.js";



  const cambioPost = async (request, reply) =>{
    const body = request.body;
 
    if(!body){
        reply.status(200).send({
            status: "false",
            message: "campos vazio"
        })
    }
    
    let check = await checkCoin(listaMoedas, body)

   if(check){
    reply.status(404)
    .send(
        check
    )
   }else{

     const data = await cambioService(body["fromCurrency"], body["toCurrency"], body.amount);
     if(data.status != "sucess" ){
            reply.status(500).send(data)
        }else{
        reply.send(data)

        }
   }
   
    
 }

 export default {
    cambioPost
}
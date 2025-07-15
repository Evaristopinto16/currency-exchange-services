import cambioService from "../../service/v1/cambioServices.js";

  const cambioPost = async (request, reply) =>{
    const body = request.body;
    if(!body){
        reply.status(200).send({
            status: "false",
            message: "Campos Vazio"
        })
    }
 
    if(!body["coin"] =="aoa" && !body["conversionto"] =="rub" || !body["coin"] =="rub" && !body["conversionto"] =="aoa"  ){
        reply.status(200).send({
            status: "false",
            message: "coint aoa and rub"
        }) 
    }

     
   
    if(body["coin"].length ==3 && body["conversionto"].length == 3){
        const data = await cambioService(body["coin"], body["conversionto"], body.value);
     
        if(data.status != "sucess" ){
            reply.status(500).send(data)
        } 
        reply.send(data)
    }else{
        reply.status(500)
        .send(
            {
                status: "false",
                message: "coint not found"
            }
        )
    }
 }

 export default {
    cambioPost
}
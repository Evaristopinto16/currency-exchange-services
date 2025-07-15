import listaMoedas from "../../models/v1/listCointModels.js"

const ListaMoedast = async (request, reply)=>{
 

    const date = await listaMoedas()

    reply.status(200).send(
        {
            status: "sucess",
            date
        }
      
    )


}

export default {
   ListaMoedast
}
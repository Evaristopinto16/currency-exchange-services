import listaMoedas from "../models/listCointModels.js"

const ListaMoedast = async (request, reply)=>{
 

    const date = await listaMoedas()
    console.log(date)
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
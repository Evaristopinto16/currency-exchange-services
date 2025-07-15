import cambioPost from "../../controllers/v1/cambioController.js";
import getCoinController from "../../controllers/v1/getCoinController.js"


const router = async(fastify)=>{
    
    fastify.post("/", cambioPost.cambioPost)
 
 
    fastify.get("/getcoin",  getCoinController.ListaMoedast)

}

export default router
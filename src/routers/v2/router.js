import cambioPost from "../../controllers/v2/cambioController.js";
import getCoinController from "../../controllers/v2/getCoinController.js"


const router = async(fastify)=>{
    
    fastify.post("/", cambioPost.cambioPost)
 
 
    fastify.get("/corrency",  getCoinController.ListaMoedast)

}

export default router
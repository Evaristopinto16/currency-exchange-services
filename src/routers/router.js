import cambioPost from "../controllers/cambioController.js";
import getCoinController from "../controllers/getCoinController.js"


const router = async(fastify)=>{
    
    fastify.post("/", cambioPost.cambioPost)
 
 
    fastify.get("/getcoin",  getCoinController.ListaMoedast)

}

export default router
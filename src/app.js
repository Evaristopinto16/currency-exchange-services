import fastify from "fastify";
import router from "./routers/router.js";
import cors from "@fastify/cors"

const app = fastify({
    logger: false
})

 
 app.decorate("notfound", ((reques, reply)=>{
    reply.status(404).send({status: false, mensage: "router not found"})
 }))
 app.register(cors, {
    origin: '*',
   
 })
app.register(router, {prefix: "/api/v1"});
app.setNotFoundHandler(app.notfound)
const port = 3000
app.listen({port: port}, ()=>{
    console.log(`server run in port ${port}`)
})
import fastify from "fastify";
import v1router from "./routers/v1/router.js";
import v2router from "./routers/v2/router.js";

import cors from "@fastify/cors"
import 'dotenv/config'

import cronJob from "./utilis/v1/notsleepUtilis.js"; 
cronJob()
const app = fastify({
    logger: false
})

 
 app.decorate("notfound", ((reques, reply)=>{

    reply.status(404).send({
        status: false, 
        mensage: "router not found"
    })
 }))
 app.register(cors, {
    origin: '*',
   
 })
app.register(v1router, {prefix: "/api/v1"});
app.register(v2router, {prefix: "/api/v2"});
app.setNotFoundHandler(app.notfound);

const port = process.env.PORT || 4000

 
app.listen({port: port, host: '0.0.0.0' }, ()=>{
    console.log(`server run in port ${port}`)
})
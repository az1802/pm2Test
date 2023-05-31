/*
 * @Author: sunjie
 * @Date: 2023-05-31 12:22:44
 * @LastEditors: sunj
 * @LastEditTime: 2023-05-31 12:25:49
 * @FilePath: /koaDemo/index.js
 */
const Koa = require("koa");
const router = require("./api")
const app = new Koa();


app.use(async (ctx,next)=>{
  await next();
})


app.use(router.routes())




app.listen(3003)
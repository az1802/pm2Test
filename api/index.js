/*
 * @Author: sunjie
 * @Date: 2023-05-31 12:25:13
 * @LastEditors: sunj
 * @LastEditTime: 2023-05-31 12:27:39
 * @FilePath: /koaDemo/api/index.js
 */
const Router = require("koa-router");
const router = new Router();



router.get("/test",(ctx,next)=>{


  ctx.body = "hello test"
})





module.exports = router;
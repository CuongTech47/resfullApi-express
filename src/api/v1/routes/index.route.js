const userRouter = require('./user.route')
function route(app) {
  //frontend
 
  
  
  app.use("/api/v1/users",userRouter)
  
  
  
}
module.exports = route;
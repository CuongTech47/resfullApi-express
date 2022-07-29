const express = require("express")
const router = express.Router()

router.get('/',(req , res , next)=> {
    // res.status(404)
    // res.json({
    //     status : 404,
    //     message : 'Not found!'
    // })
    console.log('this is a ::: ', a)
    res.send('List users')
})
router.post('/',(req, res)=> {
    res.send("create user")
})
router.delete('/id',(req , res)=> {
    res.send("delete user")
})
router.patch('/id',(req , res) => {
    res.send('update user')
})
router.get('/id',(req , res)=> {
    res.send("get a user")
})

module.exports = router
const express = require ('express')
const subDirRouter = express.Router()

const path = require('path')

subDirRouter.get(/^\/$|^\/index(\.html)?/, (req, res) => {
    res.sendFile(path.join(__dirname,'..','views','subdir','index.html'))
})

subDirRouter.get(/test(\.html)?/,(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','subdir','test.html'))
})

module.exports = subDirRouter
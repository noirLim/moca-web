const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/uploads')
    },
    filename:function(req,file,cb){
        // let ext = path.extname(file.originalname)
        cb(null,file.originalname)
    }
})

var upload = multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg"){
            callback(null,true)
        }else{
            console.log("file not supported")
            callback(null,false)
        }
    }
})

module.exports = upload
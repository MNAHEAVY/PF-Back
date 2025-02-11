const multer=require('multer')

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter=(req,file,cb)=>{
    //mimetype
    if(file.mimetype=='image/png'||file.mimetype=='image/jpeg'){
        cb(null,true)
    }else{
        //console.log(file)
        cb({message:"Incorrect format"},false)
    }
}

module.exports=multer({
    storage,
    fileFilter: fileFilter
})
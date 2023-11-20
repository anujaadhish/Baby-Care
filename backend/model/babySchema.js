const mongoose=require("mongoose")
const babySchema=new mongoose.Schema({
  category:{
   type:String,
   require:true,
  },
  
   brand:{
    type:String,
    require:true,
   },
   productName:{
    type:String,
    require:true,
   },
   price:{
    type:Number,
    require:true,
   },
   image:{
    type:String,
   }
   
 
})



module.exports=mongoose.model("baby",babySchema)
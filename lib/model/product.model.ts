import mongoose, { Mongoose, models   } from "mongoose";

const IproductSchema = new mongoose.Schema({
    
        link : {type:String,require:true,unique:true},
        title:{type:String,require:true,},
        img:{type:String,require:true,},
        star:{type:String||NaN,require:true,},
        price:{type:Number,require:true,},
        preprice:{type:Number||String||NaN,},
        pricehistory:[{
            price:{type:Number,require:true,},
            date:{type:Date,default:Date.now}
        }],
        low:{type:Number},
        high:{type:Number},
        avg:{type:Number},
        deal:{type:String||NaN,require:true,},
        review:{type:Number||String||NaN,require:true,},
        offer:{type:String||NaN,require:true,},
        isoutofstock:{type:Boolean},
        detail:[],
        user:[{
            email:{type:String,require:true}
        }],default:[],
    
},{timestamps:true})

export const IProduct = models.IProduct || mongoose.model('IProduct',IproductSchema)

const idSchema = new mongoose.Schema({
    arr : {type:Array}
},{timestamps:true}) 

export const ID = models.ID || mongoose.model('ID',idSchema)


const productSchema = new mongoose.Schema({
    
    link : {type:String,require:true,unique:true},
    title:{type:String,require:true,},
    img:{type:String,require:true,},
    star:{type:String||NaN,require:true,},
    price:{type:Number,require:true,},
    preprice:{type:Number||String||NaN,},
    deal:{type:String||NaN,require:true,},
    review:{type:Number||String||NaN,require:true,},
    offer:{type:String||NaN,require:true,},
    isoutofstock:{type:Boolean},
    web:{type:String,require:true,},

},{timestamps:true})

export const Product = models.Product || mongoose.model('Product',productSchema)




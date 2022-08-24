const Product = require('../model/Product')
const fs = require('fs')

// add product
const addProduct = async(req,res)=>{
    const {name , productDesc} = req.body;

    try{
        const product = new Product({name, productDesc})
        if(req.file){
            product.prodImage = req.file.path
        }
        await product.save()
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

// display list product
const displayProducts = async(req,res)=>{
    try{
        await Product.find().then((Result)=>{
            res.status(200).json(Result)
        })
    }catch(err){
        res.status(500).json(err);
    }
}

// updateProducts
const updateProducts = async(req,res)=>{
    const id = req.params.id;
    const {name , productDesc} = req.body;
    const prodImage = req.file.filename

   await Product.findByIdAndUpdate(id, {
        $set:{
            name,
            productDesc,
            prodImage
        }
    }, {new : true})
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err =>{
        res.status(500).json(err)
    })  
}

const deleteProducts = async(req,res)=>{
    const id = req.params.id
    try{
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.addProduct = addProduct;
exports.displayProducts = displayProducts;
exports.updateProducts = updateProducts;
exports.deleteProducts = deleteProducts;
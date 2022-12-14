const Service = require("../model/Service");
const path = require("path");

const displayServices = async (req, res) => {
  try {
    await Service.find().then((Result)=>{
      res.status(200).json(Result)
    })
    
  } catch (err) {
    res.status(500).json(err);
  }
};

const addServices = async (req, res) => {
  const { title, price, desc, inc } = req.body;

    const service = new Service({
      title,
      price,
      desc,
      inc,
    });
    if(req.file){
      service.serviceImage = req.file.path
    }
    
    service.save()
    .then((result)=>{
      res.status(200).json(result)
    })
    .catch((err)=>{
      res.status(200).json(err)
    })
};

const updateService = async (req, res) => {
  const id = req.params.id;
  const {title,price,desc,inc} = req.body
  const serviceImage = req.file.filename;

  try{
    const service = await Service.findByIdAndUpdate(id,{
      title,
      price,
      desc,
      serviceImage,
      inc
    })
    await service.save();
    res.status(200).json(service)
  }catch(err){
    res.status(500).json(err)
  }
};

const deleteService = async(req,res) =>{
  const id = req.params.id;
  try{
    const service = await Blog.findByIdAndDelete(id)
    res.status(200).json(service)
  }catch(err){
    res.status(500).json({message: err.message});
  }
} 

exports.displayServices = displayServices;
exports.addServices = addServices;
exports.updateService = updateService;
exports.deleteService = deleteService;
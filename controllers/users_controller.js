const {
    users,
    Sequelize
   } = require("../models");
   
   const Op = Sequelize.Op;
   let self = {};
   
  
   self.get = async (req,res) => {
    try{
     let userid = req.params.userid;
     let phoneNumber = req.params.phoneNumber;
     let data = await users.findOne({
      attributes:["id","userid","phoneNumber"],
      where:{
       userid:userid,
       phoneNumber:phoneNumber
      }
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
  
   self.save = async (req,res) => {
    try{
     let body = req.body;
     let data = await users.create(body);
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.update = async (req,res) => {
    try{
     let userid = req.params.userid;
     let phoneNumber = req.params.phoneNumber;
     let body = req.body;
     let data = await users.update(body,{
      where:{
       userid:userid,
       phoneNumber:phoneNumber
      }
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   self.delete = async (req,res) => {
    try{
     let userid = req.params.userid;
     let phoneNumber = req.params.phoneNumber;
     let data = await users.destroy({
      where:{
       userid:userid,
       phoneNumber:phoneNumber
      }
     });
     return res.json({
      status:"ok",
      data:data
     })
    }catch(error){
     res.status(500).json({
      status:"error",
      data:error
     })
    }
   }
   module.exports = self;
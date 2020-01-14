const express=require("express");
let userController=require('../controller/userController.js');
const router=express.Router();

router.post('/insert',userController.getUser);
router.post('/update',userController.updateUser);
router.post('/validate',userController.validateUser);



module.exports=router;
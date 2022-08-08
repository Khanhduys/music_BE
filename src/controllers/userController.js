import db from '../models/index'
import userService from "../services/userSevices"

let allUser=async(req,res)=>{
   
  let message=  await userService.getAllUser()
  console.log(message)
   return res.send(message)
      
    }
let addUser=async(req,res)=>{
 
  let message=  await userService.createNewUser(req.body)
  console.log(message)
   return res.send(message)
      }

      let getOneUser=async(req,res)=>{
 
        let message=  await userService.getUser(req.body)
        console.log(message)
         return res.send(message)
            }



      module.exports={
        allUser,
        addUser,
        getOneUser

    }
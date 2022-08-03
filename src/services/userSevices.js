import bcrypt, { compare } from'bcryptjs'
import db from '../models/index';
var salt = bcrypt.genSaltSync(10);

const createNewUser = async(data) =>{
  return new Promise(async (resolve, reject) => {
      try {
        console.log(data)
          let hashPassWordFromBcrypt = await hashUserPassWork(data.passWord)
          console.log(hashPassWordFromBcrypt)
          console.log(db.Users)
         await db.Users.create({
          email: data.email,
          passWord: hashPassWordFromBcrypt,
          userName: data.userName,
          status: data.status,
          roleId: data.roleId,
         })
          resolve('create new user succeed');

      } catch (e) {
          reject(e);
      }
  })
  
 
}
const hashUserPassWork =(password) => {
  return new Promise(async (resolve, reject)=>{
   
     try{
      const hashPasswork = await bcrypt.hashSync(password,salt)
      resolve(hashPasswork)
     }catch(e){
      reject(e)
     }
  })
}
// hàm lấy ra tất cả đối tượng
const getAllUser=async()=>{
  return new Promise(async(resolve,reject)=>{
    try{
      let allUser= await db.Users.findAll({raw:true}) 
      resolve(allUser)
    }
    catch(e){
      reject(e)
    }
  })
}

// ham lay ra 1 doi tuong
const getUser=async(data)=>{
  console.log(data)
  return new Promise(async(resolve,reject)=>{
    let hashPassWordFromBcrypt = await hashUserPassWork(data.passWord)
    try{
      let allUser= await db.Users.findOne({
        where: {
         email:data.email
          
        },
        raw:true,
       
      }) 
      if(allUser){
       if(await comparePass(data.passWord,allUser.passWord)){
      resolve(allUser)}
      else resolve({})
    }
      else  resolve({})
    }
    
    catch(e){
      reject(e)
    }
  })
}
  
async function  comparePass (pass,hashpass){
 return await bcrypt.compare(pass,hashpass)
}





const updateUser=async(id)=>{
  return new Promise(async(resolve,reject)=>{
    try{
      let user= await db.Users.findOne({
        where: {
          id: id,
        },
        raw:true
      })

      resolve(user)
    }
    catch(e){
      reject(e)
    }
  })
}

const putUser=(data)=>{
  console.log(data)
  return new Promise(async(resolve,reject)=>{

  
try{
  let user=db.Users.findOne({
    where: { id: data.id }
  })
  if(user){
   await db.Users.update(
    {
      userName: data.name,
          email: data.email,
          roleId: data.role,
    },
    {
      where: { id: data.id },
    }
  );
  let allUser= await db.Users.findAll({raw:true}) 
  console.log(allUser)
resolve(allUser);}
else  resolve( await db.Users.findAll({raw:true}) )
}
catch(e){
  reject(e)
}
  })
}
const deleteUser=async(id)=>{
  return new Promise(async(resolve,reject)=>{

  
    try{
      let user=db.Users.findOne({
        where: { id: id }
      })
      if(user){
       await db.Users.update(
        {
            status:0
          },
          {
            where: { id: data.id },
          }
      );
      let allUser= await db.Users.findAll({raw:true}) 
      console.log(allUser)
    resolve(allUser);}
    else  resolve( await db.Users.findAll({raw:true}) )
    }
    catch(e){
      reject(e)
    }
      })
}
module.exports={
    createNewUser:createNewUser,
    getAllUser:getAllUser,
    updateUser:updateUser,
    putUser:putUser,
    deleteUser:deleteUser,
    getUser:getUser

}
import db from '../models/index';
const getAllSongs=async()=>{
    return new Promise(async(resolve,reject)=>{
      try{
        let allSongs= await db.Songs.findAll({
            raw:true
        }) 
        resolve(allSongs)
      }
      catch(e){
        reject(e)
      }
    })
  }

  module.exports={
    getAllSongs
  }
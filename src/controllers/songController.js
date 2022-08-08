import songsService from "../services/songsService"
import dataSongs from "../services/dataOfSongService"
let addSong=async(req,res)=>{
 
    let message=  await songsService.addSong(req.body)

     return res.send(message)
        }

 let getSongs=async(req,res)=>{
 
            let message=  await songsService.getAllSongs(req.body)
         
             return res.send(message)
                }

                let deleteSong=async(req,res)=>{
 
                    let message=  await songsService.deleteSong(req.body)
                    
                     return res.send(message)
                        }
 
                     

                        let getAllSongs=async(req,res)=>{
 
                           let message=  await dataSongs.getAllSongs()
                        
                            return res.send(message)
                               }
               

                        
                        module.exports={
                            getAllSongs,
                            addSong,
                           deleteSong,
                           getSongs
                        }
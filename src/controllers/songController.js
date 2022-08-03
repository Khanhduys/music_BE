import songsService from "../services/songsService"
let addSong=async(req,res)=>{
 
    let message=  await songsService.addSong(req.body)
    console.log(message)
     return res.send(message)
        }

 let getAllSongs=async(req,res)=>{
 
            let message=  await songsService.getAllSongs(req.body)
           console.log(message)
             return res.send(message)
                }

                let deleteSong=async(req,res)=>{
 
                    let message=  await songsService.deleteSong(req.body)
                    
                     return res.send(message)
                        }
 
                        module.exports={
                            getAllSongs,
                            addSong,
                           deleteSong
                        }

                        
                        module.exports={
                            getAllSongs,
                            addSong,
                           deleteSong
                        }
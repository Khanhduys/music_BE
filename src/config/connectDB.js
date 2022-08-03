const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('music', 'root', null, {
  host: 'localhost', // co the la localhost hoawc dia chi server cua ta
  dialect: "mysql",
  logging:false // khoong cho phep in ra cau lenh select
});

// kiem tra ket nois toi database 
let connect=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports=connect
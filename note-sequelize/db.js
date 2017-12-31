//建立模型并连接 mysql

const config = require('./config');
const Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database, config.username,config.password,{
	host:config.host,
	dialect:'mysql',
	pool:{
		max:5,
		min:0,
		idle:30000
	}
});

//定义用户账户模型
var User = sequelize.define('user',{
	id:{
		type:Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement:true
	},
	username:Sequelize.STRING(10),
	password:Sequelize.STRING(15)
},{
	timestamps:false
});


//定义Note模型，根据用户账户访问
var Note = sequelize.define('note',{
	noteId:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true
	},
	userid:Sequelize.INTEGER,
	date:Sequelize.DATE,
	link:Sequelize.STRING(255)
   },{
     timestamps:false
	});


module.exports = {
	User:User,
	User.Note

}
let db = require('./db.js');
let myDate = new Date();


let User = db.User;
let Note = db.Note;

const getUserById = function* (obj){
	const userInfo = yield User.findOne({
		where:{
			id:obj.id
		}
	});
	return userInfo
}



/*
let obj = {
	username:"cheng"
}
let saveNote = async function(){
	var note = await User.create(obj).then(function(p){
		return true
	}).catch(function(err){
		console.log(err);
		return false
	});
	console.log(note);
}


let findUser = async function(obj){
	var findId = await User.find({
		where:{
			username:obj.username
		}
	});
	console.log(findId.dataValue)
}



module.exports = {
	saveNote,
	findUser
}

*/
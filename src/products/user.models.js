const {modol, Schema} = require ('moogose');

const userSchema = new Schema({
    id: String,
    username : String,
    password : String,
    role :{
        Type:String,
        default: 'regular'
    }


});
module.exports = model ('user', userSchema);
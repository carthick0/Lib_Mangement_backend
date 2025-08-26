const User =require("../models/user");
const { default: CrudRepository } = require("./crudRepository");
class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }
}

module.exports=new UserRepository();
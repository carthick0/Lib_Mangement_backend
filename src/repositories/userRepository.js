const User =require("../models/user");
const { default: CrudRepository } = require("./crudRepository");
class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }
    async findByEmail(email) {
        return this.model.findOne({ email });
    }
}

module.exports=new UserRepository();
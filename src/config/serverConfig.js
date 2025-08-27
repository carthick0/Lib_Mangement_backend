const dotenv =require("dotenv");
const path =require( "path");

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

module.exports={
    PORT :process.env.PORT ,
    JWT_SECRET:process.env.JWT_SECRET
}


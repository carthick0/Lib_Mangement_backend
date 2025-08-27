const mongoose =require( "mongoose");
const dotenv =require( "dotenv");

dotenv.config(); 
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL;
    if (!uri) {
      throw new Error("MONGO_URL not found in environment variables");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   
  } catch (err) {
    console.error( err);
    process.exit(1);
  }
};

module.exports=connectDB;
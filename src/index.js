const express=require("express");
const { PORT } = require("./config/serverConfig");
const  connectDB = require("./config/dbConfig");
const userRoutes=require("./routes/userRoutes.js");
const bookRoutes=require('./routes/bookRoutes.js');
const borrowRoutes=require('./routes/borrowRoutes.js')
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/user',userRoutes);
app.use('/api/books',bookRoutes);
app.use('/api/book',borrowRoutes)

app.get('/readyz',(req,res)=>{
  return res.json({message:"OK"})
});

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  try {
    await connectDB();
    console.log('✅ DB connected successfully');
  } catch (err) {
    console.error('❌ DB connection failed', err);
  }
});

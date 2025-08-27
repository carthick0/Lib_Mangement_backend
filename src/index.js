const express = require("express");
const { PORT } = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowRoutes = require("./routes/borrowRoutes");
const initGraphQL = require("./graphQL/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/book", borrowRoutes);

app.get("/readyz", (req, res) => res.json({ message: "OK" }));

initGraphQL(app).then(() => {
  console.log(`🚀 GraphQL endpoint ready at http://localhost:${PORT}/graphql`);
});

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  try {
    await connectDB();
    console.log("✅ DB connected successfully");
  } catch (err) {
    console.error("❌ DB connection failed", err);
  }
});

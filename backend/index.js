const express = require("express");
const connectDB = require('./config/db');
//const cors = require("cors");
//app.use(cors());


const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/roadmaps", require("./routes/roadmapRoutes"));

connectDB();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

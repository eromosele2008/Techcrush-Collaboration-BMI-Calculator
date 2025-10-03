// server.js
import express from "express";
//import bodyParser from "body-parser";
import bmiRoutes from "./routes.js";

const app = express();
const PORT = 3000;

//app.use(bodyParser.json());
app.use(express.json());

// Use the BMI routes
app.use("/api", bmiRoutes);

//server.js;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

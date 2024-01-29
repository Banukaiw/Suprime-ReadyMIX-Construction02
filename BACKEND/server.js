const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


//import routes

//warnings "s"
const MachineRepairRouter = require("./routes/MachineRepair.js");
const VehicleRouter = require("./routes/Vehicle.js");

//const PORT = process.env.PORT || 8070;
//app middleware
app.use(bodyParser.json());
app.use(cors());


app.use("/MachineRepair",MachineRepairRouter);
app.use("/Vehicle",VehicleRouter);


const PORT = 8070;
const DB_URL = "mongodb+srv://Banuka:bUZt5cdaYZdoQssq@supremereadymix.rwab7.mongodb.net/SupremeReadyMix?retryWrites=true&w=majority"

mongoose.connect(DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>{
  console.log('DB Connected');
})
.catch((err) =>console.log('DB connection erro',err));

app.listen(PORT, () =>{
  console.log(`app is running on ${PORT}`);
});




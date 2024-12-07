// importing

const express = require('express')
const dotenv = require('dotenv')
const productroutes = require("./routes/productroutes")

// initialize
const app = express()
dotenv.config()
require("./config/database")

// mid
app.use(express.json());

// api userroutes
app.use("/api/products",productroutes)

// port setting
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`port is running ${PORT}`);
});
  

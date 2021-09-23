const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const path = require("path");
dotenv.config();
mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
     console.log("Connected to MongoDB")}).catch((err=>console.log(err)));
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/movies", movieRoute);
app.use("/lists", listRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log("server running on port "+port)
})
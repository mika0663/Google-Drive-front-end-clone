const express = require('express');
const app = express();
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv")
dotenv.config();
const connectToDB = require('./config/db');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes')
connectToDB();


app.set('view engine', 'ejs');
app.use(express.json()); 
app.use(cookieParser())
app.use(express.urlencoded({extended: true })); // to parse form data

app.use('/user', userRouter);
app.use('/', indexRouter);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
}
);
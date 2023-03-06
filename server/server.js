const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const port = 8005;
const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }, {limit: '50mb'}));

require('dotenv').config();
require("./config/mongoose.config");
require('./routes/users.routes')(app);
require("./routes/blog.routes")(app);

app.listen(port, () => console.log('Listening on port', port))
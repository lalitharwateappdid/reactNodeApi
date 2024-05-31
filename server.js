require("dotenv").config()
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(express.json())

const cors = require('cors');
app.use(bodyParser.json());

app.use(cors());


// calling models here to synchronize
const sequelize = require("./database/database");
require("./models/YoutubeMedia");
require("./models/QuoteModel");
require("./models/BookModel");
require("./models/HomeContentModel");
require("./models/CategoryModel");
require("./models/SubCategoryModel");
require("./models/EbookModel");
require('./models/EventModel');
require("./models/UserModel");

// calling routes here
const bookApiRoute = require("./routes/api/BookApi");
const YoutubeMediaApi = require("./routes/api/YoutubeMediaApi");
const QuoteApi = require("./routes/api/QuoteApi");
const CategoryApi = require("./routes/api/CategoryApi");    
const SubCategoryApi = require("./routes/api/SubCategoryApi");
const HomeContentApi = require("./routes/api/HomeContentApi");
const EbookApi = require("./routes/api/EbookApi");
const EventApi = require("./routes/api/EventApi");
const UserApi = require("./routes/api/UserApi");
const AuthApi = require("./routes/api/auth/AuthApi");


// Middleware to parse JSON bodies
// app.use(express.json());


app.use("/api/books/", bookApiRoute);
app.use("/api/media/", YoutubeMediaApi);
app.use("/api/quote/", QuoteApi);
app.use("/api/category/", CategoryApi);
app.use("/api/sub-category/", SubCategoryApi);
app.use("/api/home-content/", HomeContentApi);
app.use("/api/ebook/",EbookApi);
app.use("/api/events/",EventApi);
app.use("/api/users/",UserApi);
app.use("/api/auth/",AuthApi);

app.get('/api', (req, res) => {
    res.status(200).json({
        "status": "True",
        "message": "Server is running"
    });
});


// sychronize models
sequelize.sync()
    .then(() => {
        console.log("Database & tables created");

        // when on local 👇
        app.listen(process.env.PORT, () => {
            console.log(`Server is Up & Running on port ${process.env.PORT}`);
        });

        // when hosting;👇
        // app.listen(process.env.PORT,"192.168.1.21", () => {
        //     console.log(`Server is Hosted and Running: ${process.env.PORT}`);
        // });
        
    })
    .catch(err => {
        console.log(err);
    })


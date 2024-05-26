require("dotenv").config()
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(express.json())
const cors = require('cors');
app.use(bodyParser.json());


// calling models here
const YoutubeMedia = require("./models/YoutubeMedia");
const sequelize = require("./database/database");

// calling routes here
const bookApiRoute = require("./routes/api/BookApi");
const YoutubeMediaApi = require("./routes/api/YoutubeMediaApi");
const QuoteApi = require("./routes/api/QuoteApi");
const CategoryApi = require("./routes/api/CategoryApi");
const SubCategoryApi = require("./routes/api/SubCategoryApi");
const HomeContentApi = require("./routes/api/HomeContentApi");

// Middleware to parse JSON bodies
// app.use(express.json());
app.use(cors());

app.use("/api/books/", bookApiRoute);
app.use("/api/media/", YoutubeMediaApi);
app.use("/api/quote/", QuoteApi);
app.use("/api/category/", CategoryApi);
app.use("/api/sub-category/", SubCategoryApi);
app.use("/api/home-content/", HomeContentApi);

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
        app.listen(process.env.PORT, () => {
            console.log(`Server is Up & Running on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    })


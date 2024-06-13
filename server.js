require("dotenv").config()
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(express.json())
const path = require("path")
const cors = require('cors');
app.use(bodyParser.json());

// file upload middleware
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// settings cross access origin
const corsOptions = {
    origin: ['http://localhost:5173',"http://localhost:5173/api/uploads"], // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: [['Content-Type', 'Authorization']],
    Credential:true // Allow these headers
};
app.use(cors(corsOptions));


// allowing static files to be fetched
app.use('/api/uploads', express.static('uploads'));

// set time zone
process.env.TZ ="Asia/Kolkata"


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
require("./models/LiteratureModel")
require("./models/MasterImageModel")
// require("./models/CategoryLiterature")



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
const DashboardApi = require("./routes/api/DashboardApi");
const LiteratureApi = require("./routes/api/LiteratureApi");
const MasterImageApi = require("./routes/api/MasterImageApi");
const Literature = require("./models/LiteratureModel");
const Category = require("./models/CategoryModel");


// defining routes hhere
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
app.use("/api/dashboard/",DashboardApi);
app.use("/api/literature/",LiteratureApi);
app.use("/api/masterimage/",MasterImageApi);

// m:m relationship 
Literature.belongsToMany(Category,{through:"category_literature"})
Category.belongsToMany(Literature,{through:"category_literature"})
// test route
app.get('/api', (req, res) => {
    res.status(200).json({
        "status": "True",
        "message": "Server is running"
    });
});

 // when on local 👇
 app.listen(process.env.PORT, () => {
    console.log(`Server is Up & Running on port ${process.env.PORT}`);
});

// when hosting;👇
// app.listen(process.env.PORT,"process.env.IP_PORT", () => {
//     console.log(`Server is Hosted and Running: ${process.env.PORT}`);
// });

// sychronize models
sequelize.sync({alter: true})
 


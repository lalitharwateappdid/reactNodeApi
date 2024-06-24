require("dotenv").config()
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
app.use(express.json())
// const path = require("path")
const cors = require('cors');
app.use(bodyParser.json());

// file upload middleware
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

// settings cross access origin
const corsOptions = {
    origin: ['http://localhost:5173', "http://localhost:5173/api/uploads/",], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: [['Content-Type', 'Authorization']],
    Credential: true // Allow these headers
};
app.use(cors(corsOptions));


// allowing static files to be fetched
app.use('/uploads', express.static('uploads'));

// set time zone
process.env.TZ = "Asia/Kolkata"


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
require("./models/NotificationModel")
// require("./models/BusinessSettingModel")
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
const BusinessSettingsApi = require("./routes/api/BusinessSettingsApi")

// const Literature = require("./models/LiteratureModel");
// const Category = require("./models/CategoryModel");


// calling mobile apis here
const ContentApi = require("./routes/mobile_api/HomeContentApi");
const YoutubeMediaMobileApi = require("./routes/mobile_api/YoutubeMediaApi");
const QuoteMobileApi = require("./routes/mobile_api/QuoteApi");
const EventMobileApi = require("./routes/mobile_api/EventApi");
const EbookMobileApi = require("./routes/mobile_api/EbookApi")
const AuthMobileApi = require("./routes/mobile_api/AuthApi");
const CategoryLiteratureApi = require("./routes/mobile_api/LiteratureApi");
const BusinessSettingsMobileApi = require("./routes/mobile_api/BusinessSettingApi");
const CategoryMobileApi = require("./routes/mobile_api/CategoryApi");
const subcategoryMobileApi = require("./routes/mobile_api/subCategoryApi");


// defining routes hhere
app.use("/api/books/", bookApiRoute);
app.use("/api/media/", YoutubeMediaApi);
app.use("/api/quote/", QuoteApi);
app.use("/api/category/", CategoryApi);
app.use("/api/sub-category/", SubCategoryApi);
app.use("/api/home-content/", HomeContentApi);
app.use("/api/ebook/", EbookApi);
app.use("/api/events/", EventApi);
app.use("/api/users/", UserApi);
app.use("/api/auth/", AuthApi);
app.use("/api/dashboard/", DashboardApi);
app.use("/api/literature/", LiteratureApi);
app.use("/api/masterimage/", MasterImageApi);
app.use("/api/business-settings/",BusinessSettingsApi)

// defining mobile routes here
app.use("/api/v1/content", ContentApi);
app.use("/api/v1/media", YoutubeMediaMobileApi)
app.use("/api/v1/quote", QuoteMobileApi)
app.use("/api/v1/event", EventMobileApi)
app.use("/api/v1/ebook", EbookMobileApi)
app.use("/api/v1/auth", AuthMobileApi)
app.use("/api/v1/business-settings",BusinessSettingsMobileApi);
app.use("/api/v1/category",CategoryMobileApi)
app.use("/api/v1/sub-category",subcategoryMobileApi)
app.use("/api/v1/literature",CategoryLiteratureApi)

// m:m relationship 
// Literature.belongsToMany(Category, { through: "category_literature" })
// Category.belongsToMany(Literature, { through: "category_literature" })
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
// app.listen(process.env.PORT,process.env.IP_PORT, () => {
//     console.log(`Server is Hosted and Running: ${process.env.PORT}`);
// });

// sychronize models
sequelize.sync({ alter: true })



const express = require("express");
const router = express.Router();


// calling Controllers here
const bookControllers = require("../../controllers/BookController");


router.get("/get",bookControllers.get);
router.post("/create",bookControllers.create);
router.delete("/destroy",bookControllers.destroy);
router.put('/update',bookControllers.update)
router.get("/edit/:id",bookControllers.edit);


module.exports = router;
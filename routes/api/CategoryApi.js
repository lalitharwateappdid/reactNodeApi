const express = require("express")

const router = express.Router()

const CategoryController = require("../../controllers/CategoriesController");

router.get("/get",CategoryController.get);
router.post("/create",CategoryController.create);
router.delete("/destroy",CategoryController.destroy);
router.get("/edit/:id",CategoryController.edit);
router.put("/update",CategoryController.update);
router.put("/status",CategoryController.status)

module.exports=router


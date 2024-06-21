const express = require("express")
const router = express.Router();


const subCategoryController = require("../../controllers/SubCategoriesController");

router.get("/get",subCategoryController.get);
router.post("/create",subCategoryController.uploadFiles,subCategoryController.create);
router.delete("/destroy",subCategoryController.destroy);
router.get("/edit/:id",subCategoryController.edit);
router.put("/update",subCategoryController.uploadFiles,subCategoryController.update);
router.put("/status",subCategoryController.status);
router.get("/getByCategory",subCategoryController.getByCategoryId)

module.exports = router;
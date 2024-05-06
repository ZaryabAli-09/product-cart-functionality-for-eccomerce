const express = require("express");
const {
  getAllItems,
  getOneItem,
  uploadProduct,
} = require("../controller/items.controller.js");
const router = express.Router();

router.get("/items", getAllItems);
router.get("/items/:id", getOneItem);
router.post("/items/upload", uploadProduct);
exports.router = router;

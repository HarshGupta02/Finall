const express = require("express");
// const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts} = require("../controllers/productController")
// const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");

const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts} = require("./productController.js")
const {isAuthenticatedUser, authorizeRoles} = require("./auth.js");
const router = express.Router();

router.route("https://ecommerceprojectserver.onrender.com/products").get(getAllProducts);
router.route("https://ecommerceprojectserver.onrender.com/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route("https://ecommerceprojectserver.onrender.com/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route("https://ecommerceprojectserver.onrender.com/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
router.route("https://ecommerceprojectserver.onrender.com/product/:id").get(getProductDetails);
router.route("https://ecommerceprojectserver.onrender.com/review").put(isAuthenticatedUser, createProductReview);
router.route("https://ecommerceprojectserver.onrender.com/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);

module.exports = router;
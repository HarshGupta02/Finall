const express = require("express");
// const {newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder} = require("../controllers/orderController");
const {newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder} = require("./orderController.js");
const router = express.Router();
// const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const {isAuthenticatedUser, authorizeRoles} = require("./auth.js");

router.route("https://ecommerceprojectserver.onrender.com/order/new").post(isAuthenticatedUser, newOrder);
router.route("https://ecommerceprojectserver.onrender.com/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("https://ecommerceprojectserver.onrender.com/orders/me").get(isAuthenticatedUser, myOrders);
router.route("https://ecommerceprojectserver.onrender.com/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router.route("https://ecommerceprojectserver.onrender.com/admin/order/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
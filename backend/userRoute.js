const express = require("express");
// const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, 
//         updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser} = require("../controllers/userController");
// const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");

const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, 
    updateProfile, getAllUser, getSingleUser, updateUserRole, deleteUser} = require("./userController.js");
const { isAuthenticatedUser , authorizeRoles} = require("./auth.js");
const router = express.Router();

router.route("https://ecommerceprojectserver.onrender.com/register").post(registerUser);
router.route("https://ecommerceprojectserver.onrender.com/login").post(loginUser);
router.route("https://ecommerceprojectserver.onrender.com/logout").get(logout);
router.route("https://ecommerceprojectserver.onrender.com/password/forgot").post(forgotPassword);
router.route("https://ecommerceprojectserver.onrender.com/password/reset/:token").put(resetPassword);
router.route("https://ecommerceprojectserver.onrender.com/me").get(isAuthenticatedUser, getUserDetails);
router.route("https://ecommerceprojectserver.onrender.com/password/update").put(isAuthenticatedUser, updatePassword);
router.route("https://ecommerceprojectserver.onrender.com/me/update").put(isAuthenticatedUser, updateProfile);
router.route("https://ecommerceprojectserver.onrender.com/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.route("https://ecommerceprojectserver.onrender.com/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
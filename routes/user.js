const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers=require("../controllers/users.js");

router.route("/signup")
.get(userControllers.renderSignupForm) // giving new signup form
.post(wrapAsync (userControllers.signup));// to signup the user

router.route("/login")
.get(userControllers.renderLoginForm) // for giving the login form to user
.post(saveRedirectUrl, passport.authenticate("local",{
    failureRedirect:"/login",
    failureFlash:true,
 }), userControllers.login); // for login the user

 router.get("/logout",userControllers.logout);

module.exports=router;
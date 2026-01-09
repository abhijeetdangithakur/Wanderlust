const express=require('express');
const router=express.Router(mergeparams=true);
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingsController=require("../controllers/listings.js");

router.route("/")
.get(wrapAsync(listingsController.index)) //index route - to show all listings
.post(isLoggedIn,validateListing,wrapAsync (listingsController.createListing)); // create route to add new listing

// create route  ko upar rakha hai kyonki /new ko id smj ke search kar skta hai agar ye neeche hota to
router.get("/new",isLoggedIn,listingsController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingsController.showListing))//show route-read route
.put(isLoggedIn,isOwner,validateListing,wrapAsync(listingsController.updateListing))// put route to update the values fill in edit route
.delete(isLoggedIn,isOwner,wrapAsync(listingsController.destroyListing)); // Delete route for deleting the listing


// Edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingsController.renderEditForm));


module.exports=router;
const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const wrapAsync=require("../utils/wrapAsync.js");
const reviewsController=require("../controllers/reviews.js");

const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");


// post request route for storing the reviews
 router.post("/",isLoggedIn,validateReview,wrapAsync(reviewsController.createReview));

 // Delete route for deleting the review from the listing and reviews db
  router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync (
    reviewsController.destoryReview
  ));

  module.exports=router;
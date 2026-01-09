const Listing=require("../models/listing.js");

module.exports.index=async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings});
}

// render new form
module.exports.renderNewForm=(req,res)=>{
     res.render("listings/new.ejs");
};

// posting new form
module.exports.createListing=async(req,res,next)=>{
    // if(!req.body.listing){
    //     throw new ExpressError(400,"send valid data for listing");
    // }
  
  const newListing=new Listing(req.body.listing);
  newListing.owner=req.user._id;
   await newListing.save();
   req.flash("success","new Listing created!");
   res.redirect("/listings");
};

// show route 
module.exports.showListing=async (req,res)=>{
    let {id} =req.params;
    const listing= await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
};

//Edit route
module.exports.renderEditForm=async (req,res)=>{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
};

// put route to update the values fill in edit route
module.exports.updateListing=async(req,res)=>{
     if(!req.body.listing){
        throw new ExpressError(400,"send valid data for listing");
    }
   let {id} = req.params;
   const listing=req.body.listing;
   await Listing.findByIdAndUpdate(id,{...req.body.listing});
     req.flash("success","Listing updated!");
   res.redirect(`/listings/${id}`);
};

// Delete route for deleting the listing
module.exports.destroyListing=async (req,res)=>{
    let {id}=req.params;
   let deletedListing= await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   req.flash("success","Listing Deleted!");
    res.redirect("/listings");
 };
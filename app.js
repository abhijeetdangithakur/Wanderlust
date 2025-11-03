const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8080;
let mongodb="mongodb://127.0.0.1:27017/wanderlust";
const Listing=require("./models/listing.js");
const path=require("path");
const ejsMate=require("ejs-mate");
const methodOverride=require("method-override");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended :true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.engine("ejs",ejsMate);
main().then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("there is some err in connecting the db ",err);
});
async function main() {
   mongoose.connect(mongodb);
}

app.get("/",(req,res)=>{
    res.send("working");
});
//Index Route
app.get("/listings",wrapAsync(async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings});
}));
// create route 
app.get("/listings/new",(req,res)=>{
     res.render("listings/new.ejs");
});

app.post("/listings",wrapAsync(async(req,res,next)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"send valid data for listing");
    }
    
  const newListing=new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
}));

//show route-read route
app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})); 

// Edit route
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id} =req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

// put route to update the values fill in edit route
app.put("/listings/:id",wrapAsync(async(req,res)=>{
     if(!req.body.listing){
        throw new ExpressError(400,"send valid data for listing");
    }
   let {id} = req.params;
   const listing=req.body.listing;
   await Listing.findByIdAndUpdate(id,{...req.body.listing});
   res.redirect(`/listings/${id}`);
}));
 // Delete route for deleting the listing
 app.delete("/listings/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
   let deletedListing= await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
    res.redirect("/listings");
 }));

// app.get("/testListing",async (req,res)=>{
//     let sampleTesting=new Listing({
//         title:"my new villa",
//         description:"by the beach",
//         price:"1200",
//         location:"calungate,Goa",
//         country:"India"    
//     });
//   await sampleTesting.save().then(()=>{             // just for testing the listing schema
//     console.log("data was saved");
//   }).catch((err)=>{
//     console.log(err);           
//   })
//   res.send("Data was saved");
// });
// creating route for all routes 
app.use((req,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
});

//Error handler
app.use((err,req,res,next)=>{
    let {statusCode=500,message="something went wrong"}=err;
    res.status(statusCode).render("listings/error.ejs",{message});
});

app.listen(port,()=>{
    console.log("app is listening");
});
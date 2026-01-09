require("dotenv").config();
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
let mongodb=process.env.ATLASDB_URL;



main().then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("there is some err in connecting the db ",err);
});
async function main() {
await mongoose.connect(mongodb);
}


const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner : "695eb53349354115243bbfc1"}));
    await Listing.insertMany(initData.data);
    console.log("data was saved");
}
  
 initDB();
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");


let mongodb="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("there is some err in connecting the db ",err);
});
async function main() {
   mongoose.connect(mongodb);
}


const initDB= async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was saved");
}
  
 initDB();
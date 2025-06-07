const Listing = require("../models/listing");
const User = require("../models/user")

module.exports.index = async (req,res) => {
    const allListings=  await Listing.find({}); 
    res.render("./listings/index.ejs" , {allListings}); 
}

module.exports.renderNewForm = (req,res) => {
    
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews" , populate : {path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error" , "Listing you requested for doesn't exist");
        res.redirect("/listings");
    }
    res.render("./listings/show.ejs" , {listing});
}

module.exports.createListing = async (req,res) => {
    
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing =new Listing(req.body.listing); 
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    await newListing.save();  
    console.log(newListing);
    req.flash("success" , "New Listing created");
    res.redirect("/listings"); 
    
      
};

module.exports.renderEditForm = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "Listing you requested for doesn't exist");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
     originalImageUrl=originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit.ejs" , {listing , originalImageUrl}); 
};

module.exports.updateListing = async (req,res) => {
    let {id} = req.params;
    let listing =await Listing.findByIdAndUpdate(id, {...req.body.listing}, {new : true});
    if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
    }
    req.flash("success" , "Listing updated");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success" , "Listing deleted");
    res.redirect("/listings");
};

module.exports.searchListings = async (req, res) => {
  const searchLocation = req.query.location?.trim() || "";

  try {
    // Break the search query into words
    const searchWords = searchLocation.split(/\s+/);

    // Build array of regex for each word
    const regexArray = searchWords.map(word => ({
      $or: [
        { location: { $regex: word, $options: "i" } },
        { title: { $regex: word, $options: "i" } },
      ],
    }));

    const listings = await Listing.find({ $and: regexArray });

    res.render("listings/index", { allListings: listings });
  } catch (err) {
    console.log("Search error:", err);
    req.flash("error", "Search failed");
    res.redirect("/listings");
  }
};

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    const user = req.user ? await User.findById(req.user._id) : null;
    
    res.render("listings/index", { allListings,  user });
};


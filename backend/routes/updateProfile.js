const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer-config');
const User = require('../models/User')
const cloudinary = require('cloudinary');
const configCloudinary = require('../utils/cloudinary-config');

configCloudinary();

router.post('/update/:email', upload.single('profilePicture'), async (req, res) => {
    try {
        let user = await User.findOne({email: req.params.email});
        if(!user) {
            res.status(400).json({message: "No user found, Please register!!"});
        } 
        const newUser = user;
        if(req.body.name) newUser.name = req.body.name;
        if(req.body.regNo) newUser.regNo = req.body.regNo;
        if(req.body.number) newUser.number = req.body.number;
        if(req.body.branch) newUser.branch = req.body.branch;
        if(req.body.year) newUser.year = req.body.year;
        console.log(req.file);
        if(req.file) {
            const uploadResult = await cloudinary.uploader
            .upload(
                req.file.path, {
                    folder: 'webster',
                    public_id: 'websterProfile' + req.file.originalname,
                }
            )
            .catch((error) => {
                console.log(error);
            });
            console.log(uploadResult.secure_url);
            newUser.profilePicture = uploadResult.secure_url
            
            fs.unlink((req.file.path), (err) => {
                if(err) console.log(err);
                else console.log("Deleted File");
            })
        } 
        user.updateOne({email: req.params.email}, {$set: newUser}, {new: true});
        user.save();
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(501).json({message: "It's not you it's us"});
    }
});
module.exports = router
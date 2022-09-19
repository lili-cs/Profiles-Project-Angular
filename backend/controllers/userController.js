const express = require('express');
const router = express.Router();

const User = require('../models/User');


router.post('/profiles/add', async (req, res, next) => {
    const user = new User(req.body);
    try{
        await user.save();
        res.send(req.body);
    }
    catch(err){
        console.log(err);
    }
});

router.get('/profiles', async (req, res, next) => {
    const profiles = await User.find({});
    res.send(profiles);
});


router.put('/profiles/:userId', async (req, res) => {
    const updatedUser = req.body;
    try{
        let profile = await User.findById(updatedUser.id);
        profile = {
            profilePicture: updatedUser.profilePicture,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone
        };
        await profile.save();
        res.send(profile);
    }
    catch(err){
        console.log(err);
    }
});

router.delete('/profiles/:userId', async (req, res)=> {
    const userId = param.userId;
    try{
        await User.findByIdAndDelete(userId);
        res.send(userId);
    }
    catch(err){
        console.log(err);
    }
});



module.exports = router;
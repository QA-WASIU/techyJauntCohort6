const express = require('express');

//const router = express.Router();
const { 
  signup,
   login, 
   forgotPassword, 
   verifyOtp, 
   changePassword, 
   verifyEmail, 
   initiateGoogleAuth,
    handleGoogleCallback,
     unlinkGoogle, 
     setPasswordForGoogleUser } 
     = require('../controller/user.controller');

const router = express.Router();
// Regular authentication routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/change-password/:userId', changePassword);
router.post('/verify-otp', verifyOtp);
router.post('/verify-email/:token', verifyEmail);

// Server-side Google OAuth routes
router.get('/google', initiateGoogleAuth);
router.get('/google/callback', handleGoogleCallback);
router.delete('/unlink-google/:userId', unlinkGoogle);
router.post('/set-password/:userId', setPasswordForGoogleUser);

module.exports = router
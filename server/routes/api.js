const express = require('express');
const router = express.Router();

//GET API LISTING

router.get('/',(req,res) =>
{
    res.send('api works');
});

module.exports = router;
const express = require('express');
const router = express.Router();

//GET API LISTING
/*
router.get('/',(req,res) =>
{
    res.send('api works');
});

module.exports = router;*/

//DECLARE AXIOS FOR MAKING HTTP REQUESTS
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

//GET API LISTING

router.get('/',(req, res) =>
{
    res.send('api works');
});

router.get('/posts', (req,res) =>
{
//GET POSTS FROM THE JSONPLACEHOLDER
//THIS SHOULD IDEALLY BE REPLACED WITH THE SERVICE THAT CONNECTS TO MONGODB

axios.get(`${API}/posts`)
    .then(posts =>
    {
        res.status(200).json(posts.data);
    })
    .catch(error =>
    {
        res.status(500).send(error);
    });
});

module.exports = router;
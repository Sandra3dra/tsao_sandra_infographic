var express = require('express');
var router = express.Router();
var path = require('path');

const sql = require("../utils/sql");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('on the main routes');
//   res.sendFile((path.join(__dirname, "../views/index.html")));
let query = "SELECT * FROM tbl_tp101";

sql.query(query, (err, result) => {
    if (err) { throw err; console.log(err); }

    //console.log(result); // should see objects wrapped in an array

    // render the home view with dynamic data
    res.render('home', { data: result });
})
});

router.get("/condata/africa", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_africa`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/oceania", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_oceania`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/other", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_other`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/america", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_america`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/europe", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_europe`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

module.exports = router;

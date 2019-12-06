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
router.get("/condata/oceania2", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_oceania WHERE ID = "2"`;

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

router.get("/condata/america2", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_america WHERE ID = "2"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/america3", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_america WHERE ID = "3"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/america4", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_america WHERE ID = "4"`;

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

router.get("/condata/europe2", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_europe WHERE ID = "2"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/europe3", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_europe WHERE ID = "3"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/europe4", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_europe WHERE ID = "4"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/europe5", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_europe WHERE ID = "5"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/europe6", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_europe WHERE ID = "6"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/europe7", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_europe WHERE ID = "7"`;

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

router.get("/condata/asia2", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "2"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia3", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "3"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia4", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "4"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia5", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "5"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia6", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "6"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia7", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "7"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia8", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "8"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia9", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "9"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia10", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "10"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

router.get("/condata/asia11", (req, res) => {
    //here is where we set up the quiery
    let query = `SELECT * FROM tbl_asia WHERE ID = "11"`;

    sql.query(query, (err, result) => {
        if (err) { console.log(err); } //something broke!

        console.log(result); //this should be the database row

        res.json(result[0]); // send that row back to the calling function
    })
})

module.exports = router;

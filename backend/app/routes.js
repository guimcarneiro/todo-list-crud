module.exports = function (app) {

    var mysql = require('mysql');
    const bodyParser = require('body-parser');

    var db = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '090199carneiro',
        database: 'test'
    })

    var cors = require('cors');

    app.use(cors());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.get('/user', function (req, res) {
        db.query('select * from Customer',
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send("NOK");
                } else {
                    res.status(200).send(result);
                }
            })
    });

    app.get('/supermarket', function (req, res) {
        db.query('select * from Supermarket',
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send('NOK');
                } else {
                    res.status(200).send(result);
                }
            })
    })

    app.get('/user/:firstname', function (req, res) {
        db.query('select * from Customer where FIRSTNAME =?', [req.params.firstname],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send('NOK');
                } else {
                    res.status(200).send(result);
                }
            })
    })

    app.get('/supermarket/:fantasyname', function (req, res) {
        db.query('select * from Supermarket where FANTASYNAME =?', [req.params.fantasyname],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send('NOK');
                } else {
                    res.status(200).send(result);
                }
            })
    })

    app.post('/user', function (req, res) {
        db.query('insert into Customer (FIRSTNAME, MIDDLENAME, LASTNAME, CITYID, DISTRICT, STATEID, ZIP, COUNTRY, PHONE, EMAIL, STATUS) values (?,?,?,?,?,?,?,?,?,?,?)',
            [req.body.firstname, req.body.middlename, req.body.lastname, req.body.cityid, req.body.district, req.body.stateid, req.body.zip, req.body.country, req.body.phone, req.body.email, req.body.status],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send('NOK');
                } else {
                    res.status(200).send(result);
                }
            })
    })

    app.post('/supermarket', function (req, res) {
        db.query('insert into Supermarket (FANTASYNAME, CITYID) values (?,?)',
            [req.body.fantasyname, req.body.cityid],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send('NOK');
                } else {
                    res.status(200).send(result);
                }
            })
    })

    app.delete('/user/:id', function (req, res) {
        console.log("aqio")
        db.query('delete from Customer where CUSTOMERID = ?', [req.params.id],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send("NOK");
                } else {
                    console.log("chegou OK")
                    res.status(200).send("OK");
                }
            })
    })

    app.delete('/supermarket/:id', function (req, res) {
        db.query('delete from Supermarket where SUPERMARKETID=?', [req.params.id],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send("NOK");
                } else {
                    res.status(200).send(result);
                }
            })
    })

    app.put('/user/:id', function (req, res) {
        db.query('update Customer set FIRSTNAME=? where CUSTOMERID=?', [req.body.firstname, req.params.id],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send("NOK");
                } else {
                    res.status(200).send(result);
                }
            })
    });

    app.put('/supermarket/:id', function (req, res) {
        db.query('update Supermarket set FANTASYNAME=? where SUPERMARKETID=?', [req.body.fantasyname, req.params.id],
            function (err, result) {
                if (err) {
                    console.log(err)
                    res.status(500).send("NOK");
                } else {
                    res.status(200).send(result);
                }
            })
    });
}

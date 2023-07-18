const pool = require("./../sql/connection");

const list = (req, res) => {
    pool.query(`SELECT * FROM vinyl`, (err, vinyl, fields) => {
        if(err){
            return res.status(500).json( {message: err.message} );
        }

        res.json( {vinyl} );
    });
};

const show = (req, res) => {
    const {id} = req.params;
    pool.query(`SELECT * FROM vinyl WHERE id = ${id}`, (err, vinyl, fields) => {
        if(err){
            return res.status(500).json( {message: err.message} );
        }

        res.json( {vinyl} );
    });
};

module.exports = {
    list,
    show
};
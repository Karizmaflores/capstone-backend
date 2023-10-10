const pool = require("./../sql/connection");

const list = (req, res) => {
  pool.query(`SELECT * FROM couches`, (err, couches, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
console.log(couches);
    res.json(couches);
  });
};

const show = (req, res) => {
  const { id } = req.params;
  pool.query(`SELECT * FROM couches WHERE id = ${id}`, (err, couches, fields) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: err.message });
    }
    res.json(couches);
  });
};

const create = (req, res) => {
  const { material, color, wear, age } = req.body;
  //Abtract the variable values
  pool.query(
    `INSERT INTO couches (material, color, wear, age) VALUES(?, ?, ?, ?)`,
    //Dependency array
    [material, color, wear, age],
    (err, results, fields) => {
      if(err){
        console.log(err);
        res.json(err);
      }
      res.json(results);
    }
  );
};

const update = (req, res) => {
  const { id } = req.params;
  pool.query(
    `UPDATE couches SET ? WHERE id = ?`,
    [req.body, id],
    (err, row, fields) => {
      res.json(row);
    }
  );
};

module.exports = {
  list,
  show,
  create,
  update,
};

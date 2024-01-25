const pool = require('../database/db');

exports.getAllUsers = (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.addUser = (req, res) => {
  const { name, email, number } = req.body;
  pool.query('INSERT INTO users (name, email, number) VALUES (?, ?, ?)', [name, email, number], (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId, name, email, number });
  });
};


exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, number } = req.body;
  
    pool.query('UPDATE users SET name=?, email=?, number=? WHERE id=?', [name, email, number, id], (err) => {
      if (err) throw err;
      res.json({ id: parseInt(id), name, email, number });
    });
  };
  
  exports.deleteUser = (req, res) => {
    const { id } = req.params;
  
    pool.query('DELETE FROM users WHERE id=?', [id], (err) => {
      if (err) throw err;
      res.json({ id: parseInt(id), message: 'User deleted successfully' });
    });
  };
  



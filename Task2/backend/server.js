const express = require("express");
const cors=require("cors")
const mysql=require('mysql')


const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"

})
const app=express()
app.use(express.json());


app.use(cors())


app.get("/allnotes",(req,res)=>{
    const sql="Select * from notes"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })

})

app.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const sql = `UPDATE notes SET title = ?, content = ? WHERE id = ?`;
    db.query(sql, [title, content, id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Note updated successfully' });
    });
  });
  
  // Delete Note API Endpoint
  app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM notes WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Note deleted successfully' });
    });
  });

  app.post('/notes/add', (req, res) => {
    console.log("req",req.body)
    const { title, content } = req.body;
    const sql = `INSERT INTO notes (title, content) VALUES (?, ?)`;
    db.query(sql, [title, content], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Note added successfully', id: result.insertId });
    });
  });


app.listen(4000,()=>{
    console.log("Running")
})
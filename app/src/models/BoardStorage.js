"use strict";

const db = require("../config/db");

const board = db.board(function(err) {
  if (err) throw err;
  db.query("SELECT * FROM board", function(err, result, fields) {
    if(err) throw err;
  }); 
});

module.exports = board;
"use strict";

const db = require("../config/db");

class BoardStorage {
    static getBoardInfo(bno) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM board where bno = ?";
            db.query(query, [bno], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }
}

module.exports = BoardStorage;
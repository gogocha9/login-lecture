"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "gogocha22", "나개발", "김팀장"],
        psword: ["1234", "cha02099!","1234", "123456"],
        name: ["우리밋", "차영현", "나개발", "김팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
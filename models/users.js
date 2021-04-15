var db = require('../db');

const getAll = () => {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM users',(err,rows) => {
            if(err) reject(err)
            resolve(rows);
        });
    });
};



// Registrando Users
const insert = ({ username,password}) => {
    return new Promise((resolve,reject) => {
        db.query('INSERT INTO users (username,password) VALUES (?,?)',[username,password],(err,result) =>{
            if(err) reject(err)
            if(result){
                resolve(result)
            };
        });
    });
};

// Obtener usuarios por username
const getByUsername = (username) => {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM users where username = ?',[username],(err,rows) => {
        if(err) reject(err)
        resolve(rows[0])
        });
    });
};

module.exports = {
    getAll: getAll,
    insert: insert,
    getByUsername: getByUsername
}
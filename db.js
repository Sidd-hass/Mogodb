// const { MongoClient } = require('mongodb')

// let dbConnection

// module.exports = {
//     connectToDb: (cb) =>{
//         MongoClient.connect('mongodb://localhost:27017/bookstore')
//            .then((client) => {
//               dbConnection = client.db()
//               return cb()
//            })
//            .catch(err => {
//             console.log(err)
//             return cb(err)
//            })
//     },
//     getDb: () => dbConnection
// }

const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
            .then((client) => {
                dbConnection = client.db()
                cb(null) // No error, pass null as the first argument
            })
            .catch(err => {
                console.log(err)
                cb(err) // Pass the error as the first argument
            })
    },
    getDb: () => {
        if (!dbConnection) {
            throw new Error('Database connection has not been established.')
        }
        return dbConnection
    }
}


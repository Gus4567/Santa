const dotenv= require('dotenv')
dotenv.config()

module.exports= {
    db: {
        connection: process.env.MONGO_SRC
    },   

    api: {
        key: process.env.API_KEY

    }
}
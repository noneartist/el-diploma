require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models.js')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')
const path = require('path')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler) // Обработка ошибок, последний MiddleWare (всегда замыкающий)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Working'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.');
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))    
    } catch (e) {
        console.e('Unable to connect to the database:', e);
    }
}

start()

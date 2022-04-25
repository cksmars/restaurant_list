// require packages used in the project
const express = require('express')

// require express-handlebars here
const exphbs = require('express-handlebars')

// 載入 mongoose
const mongoose = require('mongoose')

const bodyParser = require('body-parser')

// 載入 method-override
const methodOverride = require('method-override')

const routes = require('./routes')

const app = express()
const port = 3000

// 設定連線到 mongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

app.use(routes)

// setting static files
app.use(express.static('public'))

// start and listen on the Express sever
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
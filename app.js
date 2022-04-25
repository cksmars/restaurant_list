// require packages used in the project
const express = require('express')

// require express-handlebars here
const exphbs = require('express-handlebars')

const bodyParser = require('body-parser')

// 載入 method-override
const methodOverride = require('method-override')

const routes = require('./routes')

require('./config/mongoose')

const app = express()
const port = 3000

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
const mongoose = require('mongoose')
const Restaurant = require('../restaurant') // 載入 Restaurant
const restaurantList = require('../../restaurant.json')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')

  Restaurant.create(restaurantList.results)
  console.log('done')
})
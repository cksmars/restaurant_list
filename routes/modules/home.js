const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// 瀏覽全部餐廳
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// 搜尋餐廳
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const searchedkeyword = keyword.toLowerCase().trim()
  return Restaurant.find()
    .lean()
    .then(restaurants => {
      const filteredrestaurant = restaurants.filter(
        data => data.name.toLowerCase().includes(searchedkeyword) || data.category.toLowerCase().includes(searchedkeyword)
      )
      res.render('index', { restaurants: filteredrestaurant, keyword })
    })
    .catch(error => console.log(error))
})

module.exports = router